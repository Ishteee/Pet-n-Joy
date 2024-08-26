import prisma from '@/lib/prisma';

export async function PATCH(request, { params }) {
  const { cartItemId } = params; // Get cart item ID from the dynamic route

  try {
    // Parse the incoming request body
    const { quantity } = await request.json();

    // Update the cart item in the database using Prisma
    const updatedCartItem = await prisma.cartItem.update({
      where: {
        id: cartItemId, // Identify cart item by ID
      },
      data: {
        quantity, // Update the quantity field with the new value
      },
    });

    // Return success response with the updated cart item
    return new Response(
      JSON.stringify({ message: 'Cart item updated successfully', updatedCartItem }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error updating cart item quantity:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to update cart item' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
