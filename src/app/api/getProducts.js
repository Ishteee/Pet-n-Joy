import prisma from '@/lib/prisma';

async function getProducts() {
   const products = await prisma.product.findMany({})
   return products;
}

export default getProducts;