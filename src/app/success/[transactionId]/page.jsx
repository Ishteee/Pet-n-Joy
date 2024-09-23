import SuccessClientComponent from "./SuccessClientComponent";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import prisma from '@/lib/prisma'; // Ensure you import your Prisma client instance
import { NextResponse } from "next/server";

export default async function SuccessPage({ params }) {
  const session = await getServerSession(authOptions);
  const userId = session.user.id;
  const { transactionId } = params;
  console.log(transactionId);

  // Convert amount from string to float

  // Wallet balance update if transaction starts with "Wl"
  

  // Fetch the cart for the user
  // let cart = await prisma.cart.findFirst({
  //   where: {
  //     userId: userId,
  //     status: 'DIRECT',
  //   },
  //   include: { cartItems: { include: { product: true } } },
  // });

  // if (!cart) {
  //   cart = await prisma.cart.findFirst({
  //     where: {
  //       userId: userId,
  //       status: 'ACTIVE',
  //     },
  //     include: { cartItems: { include: { product: true } } },
  //   });
  // }

  // if(cart)

  // console.log("DDSDSDS"+transactionId);
  
  // // Calculate the total amount based on cart items
  // const totalAmount = cart.cartItems.reduce((total, item) => {
  //   return total + item.quantity * item.product.discountedPrice;
  // }, 0);

  // // Create the order
  // const order = await prisma.order.create({
  //   data: {
  //     userId,
  //     transactionId,
  //     totalAmount,
  //     status: 'SUCCESS',
  //     orderItems: {
  //       create: cart.cartItems.map((item) => ({
  //         productId: item.productId,
  //         quantity: item.quantity,
  //         price: item.product.discountedPrice,
  //       })),
  //     },
  //   },
  // });

  // // Delete the cart after creating the order
  // await prisma.cart.delete({
  //   where: { id: cart.id },
  // });

  // Pass only serializable data (like transactionId) to the Client Component
  return (
    <SuccessClientComponent transactionId={transactionId}/>
  );
};
