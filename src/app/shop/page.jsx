import "../globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/responsive.css';
import Breadcrumb from "../components/Breadcrumb";
import ShopClientComponent from "./ShopClientComponent";
import getProducts from "../api/getProducts";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import prisma from "@/lib/prisma";

// Force dynamic rendering to fetch fresh data each time
export const dynamic = 'force-dynamic';

export default async function Shop() {
  const products = await getProducts();
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div>
        <Breadcrumb name="Shop" />
        <p>Please log in to view the shop.</p>
      </div>
    );
  }

  const userId = session.user.id;

  // Fetch wishlist items
  const wishlist = await prisma.wishlistItem.findMany({
    where: {
      wishlist: {
        userId,
      },
    },
    select: {
      productId: true,
    },
  });

  // Extract productIds from wishlist items
  const wishlistProductIds = wishlist.map((item) => item.productId);

  const brandsData = await prisma.product.findMany({
    select: { brand: true },
    distinct: ['brand'],
  });

  const brands = [...new Set(brandsData.map((item) => item.brand))];

  // Fetch distinct categories
  const categories = await prisma.product.findMany({
    select: { category: true },
    distinct: ['category'],
  });

  return (
    <div>
      <Breadcrumb name="Shop" />
      <ShopClientComponent
        initialProducts={products}
        brands={brands}
        categories={categories}
        wishlistProductIds={wishlistProductIds}
        userId={userId}
      />
    </div>
  );
}
