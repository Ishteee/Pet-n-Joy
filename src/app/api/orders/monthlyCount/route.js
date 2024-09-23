// app/api/orders/monthlyCount/route.js
import prisma from "@/lib/prisma"; // Adjust the path as necessary

export async function GET() {
    try {
        const orders = await prisma.order.groupBy({
            by: ['createdAt'],
            _count: {
                id: true,
            },
            orderBy: {
                createdAt: 'asc',
            },
        });

        const monthlyCounts = orders.reduce((acc, order) => {
            const month = new Date(order.createdAt).toLocaleString('default', { month: 'long', year: 'numeric' });
            acc[month] = (acc[month] || 0) + order._count.id;
            return acc;
        }, {});

        return new Response(JSON.stringify(monthlyCounts), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error fetching orders' }), { status: 500 });
    }
}
