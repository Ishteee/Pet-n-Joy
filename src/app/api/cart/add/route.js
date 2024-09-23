import prisma from '@/lib/prisma'; // Adjust the path to your Prisma instance if necessary

export async function POST(request) {
  const { userId, productId, quantity, buyNow } = await request.json();

  if(buyNow == false) {
  try {
    // Step 1: Find or create an active cart for the user
    let cart = await prisma.cart.findFirst({
      where: {
        userId: userId,
        status: 'ACTIVE',
      },
    });

    if (!cart) {
      cart = await prisma.cart.create({
        data: {
          userId: userId,
          status: 'ACTIVE',
        },
      });
    }

    // Step 2: Check if the product is already in the cart
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: cart.id,
        productId: productId,
      },
    });

    if (cartItem) {
      // Update the quantity if the product is already in the cart
      await prisma.cartItem.update({
        where: {
          id: cartItem.id,
        },
        data: {
          quantity: cartItem.quantity + quantity,
        },
      });
    } else {
      // Add new product to the cart if it's not in the cart
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId: productId,
          quantity: quantity,
        },
      });
    }

    return new Response(
      JSON.stringify({ message: 'Product added to cart successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error adding to cart:', error);
    return new Response(
      JSON.stringify({ error: 'Error adding to cart' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
else {
  try {
    let cart = await prisma.cart.create({
      data: {
        userId: userId,
        status: 'DIRECT',
      },
    });

    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: productId,
        quantity: quantity,
      },
    });

    return new Response(
      JSON.stringify({ message: 'Direct product added to cart successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }
  catch (error) {
    console.error('Error adding to cart:', error);
    return new Response(
      JSON.stringify({ error: 'Error adding to cart' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
}
