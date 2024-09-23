import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Assuming you have set up Prisma in the lib directory

export async function GET() {
  try {
    const bestSellingProducts = await prisma.product.findMany({
      orderBy: {
        sales: 'desc', // Assuming you have a 'sales' field
      },
      take: 10, // Limit to top 10 products
    });
    return NextResponse.json(bestSellingProducts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch best-selling products' }, { status: 500 });
  }
}
