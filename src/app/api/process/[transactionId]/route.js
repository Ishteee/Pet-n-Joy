import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Assuming you have Prisma setup in your `lib` folder

export async function POST(request, { params }) {
    const { transactionId } = params;

    try {
        if(transactionId.startsWith("Cd")) {
            const order = await prisma.order.findFirst({
              where: { transactionId: transactionId },
              select: { id: true, userId: true } // Select `id` and `userId` fields
            });
          
            if (!order) {
              throw new Error(`Order with transactionId ${transactionId} not found.`);
            }
          
            // Update the order status to "PAID"
            const updatedOrder = await prisma.order.update({
              where: { id: order.id }, // Use the unique `id` field for update
              data: { status: "PAID" },
            });
          
            console.log('Order status updated to PAID:', updatedOrder);
          
            // Try to find and delete the cart with status "DIRECT"
            let cart = await prisma.cart.findFirst({
              where: { userId: order.userId, status: 'DIRECT' },
            });
          
            if (cart) {
              await prisma.cart.delete({
                where: { id: cart.id },
              });
              console.log('Deleted DIRECT cart for user:', order.userId);
            } else {
              // If no "DIRECT" cart, find and delete the cart with status "ACTIVE"
              cart = await prisma.cart.findFirst({
                where: { userId: order.userId, status: 'ACTIVE' },
              });
          
              if (cart) {
                await prisma.cart.delete({
                  where: { id: cart.id },
                });
                console.log('Deleted ACTIVE cart for user:', order.userId);
              } else {
                console.log('No cart found for user:', order.userId);
              }
            }

            return NextResponse.json({ message: 'Order processed successfully' }, { status: 200 });
        }

        else if (transactionId.startsWith("Wi") || transactionId.startsWith("Wc")) {
            const order = await prisma.order.findFirst({
                where: { transactionId: transactionId },
                select: { id: true, userId: true, totalAmount: true }, // Select the required fields
            });

            if (!order) {
                return NextResponse.json({ error: `Order with transactionId ${transactionId} not found.` }, { status: 404 });
            }

            // Update the order status to "PAID"
            const updatedOrder = await prisma.order.update({
                where: { id: order.id },
                data: { status: "PAID" },
            });

            console.log('Order status updated to PAID:', updatedOrder);

            // Try to find and delete the cart with status "DIRECT"
            let cart = await prisma.cart.findFirst({
                where: { userId: order.userId, status: 'DIRECT' },
            });

            if (cart) {
                await prisma.cart.delete({
                    where: { id: cart.id },
                });
                console.log('Deleted DIRECT cart for user:', order.userId);
            } else {
                // If no "DIRECT" cart, find and delete the cart with status "ACTIVE"
                cart = await prisma.cart.findFirst({
                    where: { userId: order.userId, status: 'ACTIVE' },
                });

                if (cart) {
                    await prisma.cart.delete({
                        where: { id: cart.id },
                    });
                    console.log('Deleted ACTIVE cart for user:', order.userId);
                } else {
                    console.log('No cart found for user:', order.userId);
                }
            }

            // Handle wallet update and transaction logging
            if (transactionId.startsWith("Wi")) {
                await prisma.wallet.update({
                    where: { userId: order.userId },
                    data: { 
                        balance: { decrement: order.totalAmount }, 
                        cashbackAmount: { increment: order.totalAmount * 0.05 } 
                    },
                });

                await prisma.walletTransaction.create({
                    data: {
                        userId: order.userId,
                        transactionId: transactionId,
                        amount: order.totalAmount,
                        balance: order.totalAmount,
                        cashbackBalance: order.totalAmount * 0.05,
                        title: "Made Purchase, Earned Cashback",
                        status: 'COMPLETED',
                    },
                });

            } else if (transactionId.startsWith("Wc")) {
                const wallet = await prisma.wallet.findFirst({
                    where: { userId: order.userId },
                    select: { id: true, cashbackAmount: true },
                });

                await prisma.walletTransaction.create({
                    data: {
                        userId: order.userId,
                        transactionId: transactionId,
                        amount: order.totalAmount,
                        balance: order.totalAmount,
                        cashbackBalance: wallet.cashbackAmount,
                        title: "Made Purchase, Used Cashback",
                        status: 'COMPLETED',
                    },
                });

                await prisma.wallet.update({
                    where: { userId: order.userId },
                    data: { 
                        balance: { decrement: order.totalAmount }, 
                        cashbackAmount: 0 
                    },
                });
            }

            return NextResponse.json({ message: 'Order processed successfully' }, { status: 200 });
        } else {
            return NextResponse.json({ error: 'Invalid transaction type' }, { status: 400 });
        }
    } catch (error) {
        console.error("Error processing transaction:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
