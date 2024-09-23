import { NextResponse } from "next/server";
import sha256 from "crypto-js/sha256";
import axios from "axios";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function POST(req) {

  console.log("AsassasassaSDDDAAAAAAA");
  const data = await req.formData();
  
  const status = data.get("code");
  const merchantId = data.get("merchantId");
  const transactionId = data.get("transactionId");
  const amount = (data.get("amount"))/100;

  const st =
    `/pg/v1/status/${merchantId}/${transactionId}` +
    process.env.NEXT_PUBLIC_SALT_KEY;
  // console.log(st)
  const dataSha256 = sha256(st);

  const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;




  const options = {
    method: "GET",
    url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${transactionId}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
      "X-MERCHANT-ID": `${merchantId}`,
    },
  };

  try {
    const response = await axios.request(options);

    if (response.data.code === "PAYMENT_SUCCESS") {
      // Step 1: Fetch the WalletTransaction by transactionId
      if(transactionId.startsWith("Wl")) {
      
      const walletTransaction = await prisma.walletTransaction.findFirst({
        where: { transactionId: transactionId },
        select: { id: true, userId: true, amount: true } // Select only the `id` field
    });

    // Step 2: Check if the transaction exists
    if (!walletTransaction) {
        throw new Error(`Transaction with ID ${transactionId} not found`);
    }

    await prisma.wallet.update({
      where: { userId: walletTransaction.userId },
      data: { balance: { increment: walletTransaction.amount } },
    });

    // Step 3: Update the transaction status to COMPLETED
    const updatedTransaction = await prisma.walletTransaction.update({
        where: { id: walletTransaction.id }, // Use the unique `id` field for update
        data: { status: "COMPLETED" },
    });

    console.log('Transaction status updated to COMPLETED:', updatedTransaction);

    // Step 4: Redirect to success page after updating the status
    return NextResponse.redirect(
        "https://pet-shop-rust.vercel.app/wallet",
        { status: 301 }
    );
    } else if (transactionId.startsWith("Cr")) {
      const order = await prisma.order.findFirst({
        where: { transactionId: transactionId },
        select: { id: true, userId: true } // Select `id` and `userId` fields
      });
    
      if (!order) {
        throw new Error(`Order with transactionId ${transactionId} not found.`);
      }
    
      // Update the order status to "PAID"
      const updatedOrder = await prisma.order.update({
        where: { id: order.id }, // Use the unique `id` field for update
        data: { status: "PAID" },
      });
    
      console.log('Order status updated to PAID:', updatedOrder);
    
      // Step 1: Try to find and delete the cart with status "DIRECT"
      let cart = await prisma.cart.findFirst({
        where: { userId: order.userId, status: 'DIRECT' },
      });
    
      if (cart) {
        // If cart with status "DIRECT" exists, delete it
        await prisma.cart.delete({
          where: { id: cart.id },
        });
        console.log('Deleted DIRECT cart for user:', order.userId);
      } else {
        // Step 2: If no "DIRECT" cart, find and delete the cart with status "ACTIVE"
        cart = await prisma.cart.findFirst({
          where: { userId: order.userId, status: 'ACTIVE' },
        });
    
        if (cart) {
          await prisma.cart.delete({
            where: { id: cart.id },
          });
          console.log('Deleted ACTIVE cart for user:', order.userId);
        } else {
          console.log('No cart found for user:', order.userId);
        }
      }
    
      // Step 3: Redirect to success page after updating the status and deleting the cart
      return NextResponse.redirect(
        `https://pet-shop-rust.vercel.app/success/${transactionId}`,
        { status: 301 }
      );
    } 
    
    
    
    else {
      return NextResponse.redirect(
        `https://pet-shop-rust.vercel.app/success/${transactionId}`,
        { status: 301 }
    );
    }


    } else {
        // Redirect to failure page with transactionId
        return NextResponse.redirect(
          `https://pet-shop-rust.vercel.app/failure/${transactionId}`,
          { status: 301 }
        );
      }
  } catch (error) {
    console.error("Error processing payment status:", error);
    return NextResponse.json({ error: "Payment status error" }, { status: 500 });
  }
}