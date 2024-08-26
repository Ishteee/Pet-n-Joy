import prisma from '@/lib/prisma';

export async function GET(request, { params }) {
  const { userId } = params;

  try {
    const cart = await prisma.cart.findFirst({
      where: { userId: userId, status: 'ACTIVE' },
      include: {
        cartItems: {
          include: {
            product: true, // Include related product data
          },
        },
      },
    });

    if (!cart) {
      return new Response(
        JSON.stringify({ cartItems: [] }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ cartItems: cart.cartItems }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching cart:', error);
    return new Response(
      JSON.stringify({ error: 'Error fetching cart' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}