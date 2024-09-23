// app/api/update-wallet/route.js
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export async function POST(req) {
  const { transactionId, amount } = await req.json();
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }

  const userId = session.user.id;
  const floatAmount = parseFloat(amount) / 100;

  if (transactionId.startsWith("Wl")) {
    try {
      await prisma.wallet.update({
        where: { userId: userId },
        data: { balance: { increment: floatAmount } },
      });
      return new Response(JSON.stringify({ message: 'Wallet updated successfully' }), { status: 200 });
    } catch (error) {
      console.error('Error updating wallet:', error);
      return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
    }
  }

  return new Response(JSON.stringify({ message: 'Invalid transaction ID' }), { status: 400 });
}
