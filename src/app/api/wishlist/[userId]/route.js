// app/api/wishlist/[userId]/route.js

import prisma from '@/lib/prisma';

export async function GET(request, { params }) {
  const { userId } = params;

  try {
    const wishlist = await prisma.wishlist.findFirst({
      where: { userId },
      include: {
        items: {
          include: {
            product: true, // Include related product data
          },
        },
      },
    });

    if (!wishlist) {
      return new Response(
        JSON.stringify({ wishlistItems: [] }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ wishlistItems: wishlist.items }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    return new Response(
      JSON.stringify({ error: 'Error fetching wishlist' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
