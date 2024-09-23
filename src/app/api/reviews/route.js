import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Assuming you have Prisma setup

export async function POST(request) {
    try {
        const body = await request.json();
        const { userId, productId, rating, comment } = body;

        // if (!userId || !productId || !rating) {
        //     return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
        // }

        const review = await prisma.review.create({
            data: {
                userId,
                productId,
                rating,
                comment,
            },
        });

        return NextResponse.json({ success: true, review }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
