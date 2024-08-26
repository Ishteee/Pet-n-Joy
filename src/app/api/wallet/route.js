import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Ensure this path is correct

export async function POST(request) {
  try {
    // Parse the JSON body from the request
    const { userId } = await request.json();

    // Check if userId is provided
    if (!userId) {
      return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
    }

    // Check if a wallet already exists for the user
    const existingWallet = await prisma.wallet.findUnique({
      where: { userId: userId },
    });

    if (existingWallet) {
      // If a wallet exists, return it
      return NextResponse.json(existingWallet);
    } 

    // Otherwise, create a new wallet
    const newWallet = await prisma.wallet.create({
      data: {
        userId: userId,
        balance: 0.0, // Set initial balance
      },
    });

    // Return the newly created wallet
    return NextResponse.json(newWallet);
  } catch (error) {
    // Log detailed error message
    console.error('Error creating wallet:', error.message);
    console.error('Error stack:', error.stack);
    
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
