// app/wishlist/page.jsx

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import WishlistClientComponent from "./WishlistClientComponent";
import Breadcrumb from "../components/Breadcrumb";

async function fetchWishlistItems(userId) {
    const res = await fetch(`https://pet-shop-rust.vercel.app/api/wishlist/${userId}`);
    const data = await res.json();

    if (res.ok) {
      return data.wishlistItems;
    } else {
      throw new Error('Error fetching wishlist items');
    }
}

export default async function Wishlist() {
    const session = await getServerSession(authOptions);
    const userId = session.user.id;

    if (!session) {
      return (
        <div className="no-wishlist">
            Please log in to view your wishlist.
        </div>
      );
    }

    let wishlistItems = [];

    try {
        wishlistItems = await fetchWishlistItems(userId);
    } catch (error) {
        console.error('Error fetching wishlist items:', error);
    }

    return (
        <div>
            <Breadcrumb name="Wishlist" />
            <WishlistClientComponent wishlistItems={wishlistItems} userId={userId}/>
        </div>
    );
}
