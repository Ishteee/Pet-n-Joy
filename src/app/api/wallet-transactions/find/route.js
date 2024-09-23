import prisma from "@/lib/prisma"; // Prisma client

// API route to fetch wallet transactions based on userId
export async function POST(request) {
    try {
        const { userId } = await request.json();

        if (!userId) {
            return new Response(JSON.stringify({ error: 'User ID is required' }), {
                status: 400,
            });
        }

        const transactions = await prisma.walletTransaction.findMany({
            where: { userId },
            orderBy: { updatedAt: 'desc' }, // Sorting by creation date
        });

        return new Response(JSON.stringify({ transactions }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch transactions' }), {
            status: 500,
        });
    }
}
