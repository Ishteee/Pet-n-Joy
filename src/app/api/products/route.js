import prisma from '@/lib/prisma';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const brandsParam = searchParams.get('brands');
  const categoriesParam = searchParams.get('categories');
  const priceRangesParam = searchParams.get('priceRanges');
  const searchParam = searchParams.get('search');  // Retrieve the search query
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 10;
  const sortParam = searchParams.get('sort') || 'manual';

  let filters = {};
  let orderBy = {};

  // Apply brand filter if available
  if (brandsParam) {
    const brands = brandsParam.split(',');
    filters.brand = { in: brands };
  }

  // Apply category filter if available
  if (categoriesParam) {
    const categories = categoriesParam.split(',');
    filters.category = { in: categories };
  }

  // Handle price ranges if available
  if (priceRangesParam) {
    const priceRanges = priceRangesParam.split(',').map(range => {
      const [rangeMin, rangeMax] = range.split('-').map(Number);
      return {
        discountedPrice: {
          gte: rangeMin,
          lte: rangeMax,
        },
      };
    });

    // Combine all price ranges with OR condition
    filters.AND = [
      {
        OR: priceRanges,
      },
    ];
  }

  // Apply search filter if available
  if (searchParam) {
    filters.OR = [
      {
        productName: {
          contains: searchParam,
          mode: 'insensitive',  // Case-insensitive search
        },
      },
    //   {
    //     description: {
    //       contains: searchParam,
    //       mode: 'insensitive',  // Case-insensitive search
    //     },
    //   },
      // Add other fields to search if necessary
    ];
  }

  switch (sortParam) {
    case 'best-selling':
      orderBy = { sales: 'desc' }; // Example: sorting by sales
      break;
    case 'title-ascending':
      orderBy = { productName: 'asc' };
      break;
    case 'title-descending':
      orderBy = { productName: 'desc' };
      break;
    case 'price-ascending':
      orderBy = { discountedPrice: 'asc' };
      break;
    case 'price-descending':
      orderBy = { discountedPrice: 'desc' };
      break;
    default:
      orderBy = {}; // No sorting
      break;
  }

  try {
    // Fetch the total count of products that match the filters
    const totalProducts = await prisma.product.count({ where: filters });

    // Fetch the paginated products
    const products = await prisma.product.findMany({
      where: filters,
      orderBy,
      skip: (page - 1) * limit,
      take: limit,
    });

    return new Response(
      JSON.stringify({
        products,
        totalProducts,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch products' }),
      { status: 500 }
    );
  }
}
