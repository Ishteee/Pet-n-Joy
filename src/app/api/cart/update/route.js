import prisma from '@/lib/prisma'; // Adjust the path based on your prisma setup
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { cartItemId, quantity } = await req.json(); // Extract data from the request body

    // Update the quantity of the cart item
    const updatedCartItem = await prisma.cartItem.update({
      where: {
        id: cartItemId,
      },
      data: {
        quantity: quantity, // Set the new quantity
      },
    });

    return NextResponse.json(updatedCartItem); // Respond with the updated cart item
  } catch (error) {
    console.error('Error updating cart item quantity:', error);
    return NextResponse.json({ error: 'Failed to update quantity' }, { status: 500 });
  }
}
