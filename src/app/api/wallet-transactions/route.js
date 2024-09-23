// /app/api/wallet-transactions/route.js

import prisma from '@/lib/prisma'; // Assuming you're using Prisma ORM

export async function POST(req) {
    const { userId, transactionId, amount, balance, cashbackBalance, title } = await req.json();

    try {
        const newTransaction = await prisma.walletTransaction.create({
            data: {
                userId,
                transactionId,
                amount: parseFloat(amount),
                balance: parseFloat(balance),
                cashbackBalance: cashbackBalance ? parseFloat(cashbackBalance) : null,
                title,
                status: 'PENDING',
            },
        });

        return new Response(JSON.stringify(newTransaction), {
            status: 201,
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to create transaction' }), {
            status: 500,
        });
    }
}
