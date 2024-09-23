// app/api/orders/route.js
import prisma from "@/lib/prisma"; // Adjust path as necessary

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: true, // Include user details if needed
        orderItems: true, // Include order items if needed
      },
    });
    return new Response(JSON.stringify(orders), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch orders' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
