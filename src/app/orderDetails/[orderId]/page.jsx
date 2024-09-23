import React from 'react';
import OrderDetailsClientComponent from './OrderDetailsClientComponent';
import prisma from '@/lib/prisma'; // Assuming prisma client is set up

export default async function OrderDetailsPage({ params }) {
  const { orderId } = params;

  // Fetch order details by orderId including order items and product details
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      orderItems: {
        include: {
          product: true, // Include product details
        },
      },
    },
  });

  return (
    <div>
      {/* Pass the fetched order details to the client component */}
      <OrderDetailsClientComponent order={order} />
    </div>
  );
}
