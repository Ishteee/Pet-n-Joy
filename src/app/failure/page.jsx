"use client";

import { useSearchParams } from 'next/navigation';

const FailurePage = () => {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get('transactionId'); // Accessing transactionId from the query

  return (
    <div className="flex justify-center items-center text-center h-screen">
      <h1>Payment Failed</h1>
      <p>Transaction ID: {transactionId}</p>
    </div>
  );
};

export default FailurePage;
