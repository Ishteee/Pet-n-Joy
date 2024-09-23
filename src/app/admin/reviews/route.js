import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const reviews = await prisma.review.findMany({
            include: {
              user: true,    // Include the associated user data
              product: true, // Include the associated product data
            },
          });          
      return NextResponse.json(reviews);
    } catch (error) {
      return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
  }