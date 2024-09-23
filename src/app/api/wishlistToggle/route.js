import prisma from "@/lib/prisma"; // Adjust the path

export async function POST(request) {
  try {
    const { productId, userId } = await request.json();

    // Ensure productId and userId are valid
    if (!productId || !userId) {
      return new Response(JSON.stringify({ message: 'Invalid product or user' }), { status: 400 });
    }

    // Check if the product is already in the wishlist
    const wishlistItem = await prisma.wishlistItem.findFirst({
      where: {
        productId,
        wishlist: {
          userId,
        },
      },
    });

    if (wishlistItem) {
      // If the item is in the wishlist, remove it
      await prisma.wishlistItem.delete({
        where: {
          id: wishlistItem.id,
        },
      });
      return new Response(JSON.stringify({ message: 'Removed from wishlist' }), { status: 200 });
    } else {
      // Check if the user already has a wishlist
      let wishlist = await prisma.wishlist.findFirst({
        where: { userId },
      });

      if (!wishlist) {
        // Create a wishlist if it doesn't exist
        wishlist = await prisma.wishlist.create({
          data: {
            userId,
          },
        });
      }

      // Add the product to the wishlist
      await prisma.wishlistItem.create({
        data: {
          productId,
          wishlistId: wishlist.id,
        },
      });
      return new Response(JSON.stringify({ message: 'Added to wishlist' }), { status: 200 });
    }
  } catch (error) {
    console.error('Error updating wishlist:', error);
    return new Response(JSON.stringify({ message: 'Error updating wishlist' }), { status: 500 });
  }
}
