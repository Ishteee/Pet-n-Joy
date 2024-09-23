import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';  // Assuming prisma is configured properly

export async function POST(req) {
  const { userId, transactionId, totalAmount, gstAmount, status, cartItems, billingAddressId, shippingAddressId } = await req.json();
  try {
    // Create the order
    const order = await prisma.order.create({
      data: {
        userId,
        transactionId,
        totalAmount,
        gstAmount,
        status,
        billingAddressId,   // Save billing address
        shippingAddressId,  // Save shipping address
        orderItems: {
          create: cartItems.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.productPrice,
          })),
        },
      },
    });

    return NextResponse.json({ message: 'Order created successfully', order }, { status: 200 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
