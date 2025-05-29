import getProductDetails from "@/app/api/getProductDetails";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import AddToCartButton from "@/app/components/ui/AddToCartButton";
import ProductClientComponent from "./ProductClientComponent";
import prisma from "@/lib/prisma";

export default async function ProductDetails({ params }) {
    const { id } = params;
    const product = await getProductDetails(id);
    const productId = product.id;

    const reviews = await prisma.review.findMany({
        where: { productId },  // Get reviews only for this product
        include: {
            user: {
                select: {
                    name: true,  // Fetch user names
                    username: true,
                },
            },
        },
        orderBy: { createdAt: 'desc' },  // Order reviews by most recent
    });

    const session = await getServerSession(authOptions);
    const userId = session.user.id;

    return (
        <ProductClientComponent product={product} userId={userId} reviews={reviews} />
    );
}