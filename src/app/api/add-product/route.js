import { NextResponse } from "next/server";
import prisma from '@/lib/prisma';

export async function POST(request) {
    const { productName, productType, originalPrice, discountedPrice, imageUrl, brand, category, stock } = await request.json()

    try {
        const newProduct = await prisma.product.create({
            data: {
                productName,
                productType,
                originalPrice: parseFloat(originalPrice),
                discountedPrice: parseFloat(discountedPrice),
                imageUrl,
                brand,
                category,
                stock: parseInt(stock),
                sales: 0,
            }
        })

        return NextResponse.json({ newProduct })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to add product' }, { status: 500 });
    }
}