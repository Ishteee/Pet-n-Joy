"use client";

export default function SuccessClientComponent({ transactionId }) {

  return (
    <div className="flex justify-center items-center text-center h-screen">
      <h1>Payment Successful</h1>
      <p>Transaction ID: {transactionId}</p>
    </div>
  );
}