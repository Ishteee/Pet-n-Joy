import prisma from '@/lib/prisma';

export async function GET(request, { params }) {
  const { userId } = params;

  try {
    // Try to find the cart with status "DIRECT"
    let cart = await prisma.cart.findFirst({
      where: { userId: userId, status: 'DIRECT' },
      include: {
        cartItems: {
          include: {
            product: true, // Include related product data
          },
        },
      },
    });

    if(!cart) {
      // If no cart with status "DIRECT" is found, search for the one with status "ACTIVE"
      cart = await prisma.cart.findFirst({
        where: { userId: userId, status: 'ACTIVE' },
        include: {
          cartItems: {
            include: {
              product: true,
            },
          },
        },
      });
    }

    

    // If no cart is found, return an empty cartItems array
    if (!cart) {
      return new Response(
        JSON.stringify({ cartItems: [] }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Return the found cart's items
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
