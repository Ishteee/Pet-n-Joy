import prisma from '@/lib/prisma';

export async function DELETE(req) {
    try {
        const { userId, itemId } = await req.json(); // Expecting userId and productId from request body
        // Find the corresponding wishlist for the user
        const wishlist = await prisma.wishlist.findFirst({
            where: {
                userId: userId,  // Ensure we're operating on the correct user's wishlist
            },
        });

        if (!wishlist) {
            return new Response(JSON.stringify({ message: 'Wishlist not found' }), { status: 404 });
        }

        // Delete the wishlist item (product) from the user's wishlist
        await prisma.wishlistItem.delete({
            where: {
                id: itemId, // Ensure we're deleting from the correct wishlist
                wishlistId: wishlist.id,   // Ensure the correct product is being removed
            },
        });

        return new Response(JSON.stringify({ message: 'Item removed from wishlist' }), { status: 200 });
    } catch (error) {
        console.error('Error removing item from wishlist:', error);
        return new Response(JSON.stringify({ message: 'Failed to remove item' }), { status: 500 });
    }
}
