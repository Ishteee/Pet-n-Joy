import prisma from '@/lib/prisma'; // Ensure the prisma client is correctly imported
import CheckoutClientComponent from "./CheckoutClientComponent";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';


async function fetchCartItems(userId) {
    const res = await fetch(`https://pet-shop-rust.vercel.app/api/cart/${userId}`);
    const data = await res.json();  
  
    if (res.ok) {
      return data.cartItems;
    } else {
      throw new Error('Error fetching cart items');
    }
}


// Server component to fetch the user's addresses and pass it to the client component
export default async function CheckoutPage() {
    const session = await getServerSession(authOptions);
    const userId = session.user.id;

    const addresses = await prisma.address.findMany({
        where: {
            userId: userId, // Filter addresses based on the userId
        },
    });

    const wallet = await prisma.wallet.findUnique({
        where: {
            userId: userId,
        },
    });


    let cartItems = [];


    try {
        cartItems = await fetchCartItems(userId);
        
    } catch (error) {
        console.error('Error fetching cart items:', error);
    } finally {
    }


    return (
        <CheckoutClientComponent addresses={addresses} wallet={wallet} cartItems={cartItems} userId={userId}/>
    );
}