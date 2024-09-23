// app/api/orders/monthlySales/route.js
import prisma from "@/lib/prisma"; // Adjust the path as necessary

export async function GET() {
    try {
        // Group orders by month and calculate the sum of totalAmount for each month
        const orders = await prisma.order.groupBy({
            by: ['createdAt'],
            _sum: {
                totalAmount: true, // Sum the totalAmount for each month
            },
            orderBy: {
                createdAt: 'asc', // Order by creation date
            },
        });

        // Process the orders to calculate the total sales for each month
        const monthlySales = orders.reduce((acc, order) => {
            const month = new Date(order.createdAt).toLocaleString('default', { month: 'long', year: 'numeric' });

            // Accumulate the sales for each month
            acc[month] = (acc[month] || 0) + order._sum.totalAmount;
            return acc;
        }, {});

        // Return the monthly sales as a JSON response
        return new Response(JSON.stringify(monthlySales), { status: 200 });
    } catch (error) {
        console.error("Error fetching monthly sales:", error);
        return new Response(JSON.stringify({ error: 'Error fetching monthly sales' }), { status: 500 });
    }
}
