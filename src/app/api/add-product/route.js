import { NextResponse } from "next/server";
import prisma from '@/lib/prisma';

export async function POST(request) {
    const res = await request.json()
    const {productName, productType, originalPrice, discountedPrice, imageUrl} = res;
    console.log({res})

    const result = await prisma.product.create({
        data: {
            productName,
            productType,
            originalPrice: parseFloat(originalPrice),
            discountedPrice: parseFloat(discountedPrice),
            imageUrl,
        }
    })

    return NextResponse.json({result})
}