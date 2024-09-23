import prisma from "@/lib/prisma";

export async function GET(req) {
    try {
        const orders = await prisma.order.findMany();
        const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0);
        return new Response(JSON.stringify({ totalRevenue }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch total revenue' }), { status: 500 });
    }
}
