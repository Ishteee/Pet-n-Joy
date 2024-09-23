import prisma from '@/lib/prisma'; // Assuming you have prisma setup in lib/prisma
import OrdersClientComponent from './OrdersClientComponent';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';

export default async function OrdersPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return <p>You need to be logged in to view your orders.</p>;
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      orders: {
        where: {
          status: 'PAID', // Filter to include only orders with status "PAID"
        },
        include: {
          orderItems: {
            include: { product: true },
          },
        },
      },
    },
  });
  

  if (!user || !user.orders.length) {
    return <p>No orders found.</p>;
  }

  return <OrdersClientComponent orders={user.orders} />;
}
