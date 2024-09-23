import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import CartClientComponent from "./CartClientComponent";


async function fetchCartItems(userId) {
    const res = await fetch(`https://pet-shop-rust.vercel.app/api/cart/${userId}`);
    const data = await res.json();  
  
    if (res.ok) {
      return data.cartItems;
    } else {
      throw new Error('Error fetching cart items');
    }
}

export default async function Cart() {
    const session = await getServerSession(authOptions);
    const userId = session.user.id;

    if (!session) {
      return (
        <div className="no-cart">
            Please log in to view your cart.
        </div>
      );
    }

    let cartItems = [];


    try {
        cartItems = await fetchCartItems(userId);
        
    } catch (error) {
        console.error('Error fetching cart items:', error);
    } finally {
    }

    return (
        <CartClientComponent cartItems={cartItems}/>
    );
}
