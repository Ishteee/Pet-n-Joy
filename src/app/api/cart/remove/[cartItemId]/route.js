import prisma from '@/lib/prisma';

export async function DELETE(request, { params }) {
  const { cartItemId } = params; // Extract cartItemId from params

  try {
    // Delete the cart item
    await prisma.cartItem.delete({
      where: {
        id: cartItemId,
      },
    });

    return new Response(
      JSON.stringify({ message: 'Cart item removed successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error removing cart item:', error);
    return new Response(
      JSON.stringify({ error: 'Error removing cart item' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
