"use client";

import { useRouter } from "next/navigation";
import RemoveCartItemButton from "@/app/components/ui/RemoveCartItemButton";
import QuantityChange from "@/app/components/ui/ChangeQuantity";
// import { payment } from "@/action/ServerActions";
import styles from '@/app/cart/CartClientComponent.module.css';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingSpinner from "../components/ui/LoadingSpinner";

export default function CartClientComponent({ cartItems }) {
    const router = useRouter();
    let grandTotal = 0;
    let items = 0;
    grandTotal = cartItems.reduce((total, item) => total + (item.product.discountedPrice * item.quantity), 0);
    items = cartItems.reduce((total, item) => total + (item.quantity), 0);


    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname(); // Track current path

    const handleCheckoutClick = () => {
        setIsLoading(true);
        router.push("/checkout");
    };

    // Hide loader when the pathname changes (indicating navigation has finished)
    useEffect(() => {
        if (pathname === "/checkout") {
        setIsLoading(false);
        }
    }, [pathname]);


    
    // const makePayment = async (e) => {
    //     e.preventDefault();
    //     const redirect = await payment(grandTotal.toFixed(2));
    //     console.log("redirect>>>",redirect.url)
    //      router.push(redirect.url);
    //   };

    return (
        <section className="shopping-cart-area page-paddings">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="shopping-cart-box">
                            <div className="shopping-cart-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Unit Price</th>
                                            <th>Qty</th>
                                            <th>Subtotal</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.length > 0 ? (
                                            cartItems.map((item) => (
                                                <tr key={item.id}>
                                                    <td>
                                                        <div className="cart-pro-box">
                                                            <div className="cart-pro-img"><img src={item.product.imageUrl} alt="" /></div>
                                                            <span>{item.product.productName}</span>
                                                        </div>
                                                    </td>
                                                    <td>${item.product.discountedPrice.toFixed(2)}</td>
                                                    <td>
                                                        <QuantityChange item={item} />
                                                    </td>
                                                    <td><span className="cart-subtotal">${(item.product.discountedPrice * item.quantity).toFixed(2)}</span></td>
                                                    <td><RemoveCartItemButton cartItemId={item.id} /></td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5" className="text-center">Your cart is empty.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="sidebar">
                            <div className="shopping-cart-box widget-box">
                                <div className="widget">
                                    <div className="blog-news-title">
                                        <h2>Subtotal</h2>
                                    </div>
                                    <div className="subtotal-content">
                                        <h3 className="theme-title">Grand Total: ${grandTotal.toFixed(2)}</h3>
                                        <ul>
                                            <li>{items} items <span>${grandTotal.toFixed(2)}</span></li>
                                            <li>Shipping <span>Free</span></li>
                                        </ul>
                                    </div>
                                    <div className="subtotal-btn text-center">
                                        <button className="theme-btn" onClick={handleCheckoutClick}>Proceed To Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isLoading && (
                <div className={styles.loadingOverlay}>
                    <LoadingSpinner />
                </div>
            )}
        </section>
    );
}