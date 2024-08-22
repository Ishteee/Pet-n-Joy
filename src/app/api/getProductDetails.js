import prisma from '@/lib/prisma';

async function getProductDetails(id) {
    if (!id) {
        throw new Error('Product ID is required');
    }
    
    const product = await prisma.product.findUnique({
        where: {
          id: id, // Convert the id to an integer (if it's an Int in your Prisma schema)
        },
      });
      return product;
}

export default getProductDetails;