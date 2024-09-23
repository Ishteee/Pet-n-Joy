"use server";
import { v4 as uuidv4 } from "uuid";
import sha256 from "crypto-js/sha256";
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";


export async function payment(grandTotal, transactionid) {

  // const generateTransactionId = (tag) => {
  //   // Generate a unique part for the transaction ID
  //   const uniquePart = uuidv4().toString(36).slice(-6);

  //   // Decide the prefix based on the tag
  //   let prefix = "";
  //   switch (tag) {
  //       case "wallet":
  //           prefix = "Wl";
  //           break;
  //       case "direct":
  //           prefix = "Dr";
  //           break;
  //       case "cart":
  //           prefix = "Cr";
  //           break;
  //       default:
  //           prefix = "Tr"; // Default prefix if tag doesn't match any case
  //           break;
  //   }

  //   // Construct the transaction ID
  //   const transactionid = prefix + "-" + uniquePart;
  //   return transactionid;
  // };

   const session = await getServerSession(authOptions);
   console.log(transactionid);
   const amountInPaise = Math.round(grandTotal * 100);
   console.log(amountInPaise);

  const payload = {
    merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
    merchantTransactionId: transactionid,
    merchantUserId: session.user.id,
    amount: amountInPaise,
    redirectUrl: `https://pet-shop-rust.vercel.app/api/status/${transactionid}`,
    redirectMode: "POST",
    callbackUrl: `https://pet-shop-rust.vercel.app/api/status/${transactionid}`,
    mobileNumber: "9999999999",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const dataPayload = JSON.stringify(payload);
  console.log(dataPayload);

  const dataBase64 = Buffer.from(dataPayload).toString("base64");
  console.log(dataBase64);

  const fullURL = dataBase64 + "/pg/v1/pay" + process.env.NEXT_PUBLIC_SALT_KEY;
  const dataSha256 = sha256(fullURL);

  const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;
  console.log("c====", checksum);
  const UAT_PAY_API_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

  try {
  const response = await axios.post(
    UAT_PAY_API_URL,
    {
      request: dataBase64,
    },
    {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
    }
  );

  console.log("Raw response:", response.data);
  const redirect = response.data.data.instrumentResponse.redirectInfo.url;
  return { url: redirect };
  } catch (error) {
    console.error("Error:", error);
  }

  
}
