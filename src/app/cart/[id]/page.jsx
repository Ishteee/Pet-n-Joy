import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import RemoveCartItemButton from "@/app/components/ui/RemoveCartItemButton";
import QuantityChange from "@/app/components/ui/ChangeQuantity";
import LoadingIndicator from "@/app/components/ui/LoadingIndicator";

async function fetchCartItems(userId) {
    const res = await fetch(`http://localhost:3000/api/cart/${userId}`);
    const data = await res.json();  
  
    if (res.ok) {
      return data.cartItems;
    } else {
      throw new Error('Error fetching cart items');
    }
}

export default async function Cart({ params }) {
    const session = await getServerSession(authOptions);
    const userId = params.id;

    if (!session) {
      return <div>Please log in to view your cart.</div>;
    }

    let cartItems = [];
    let grandTotal = 0;
    let loading = true; // Set loading to true initially

    try {
        cartItems = await fetchCartItems(userId);
        grandTotal = cartItems.reduce((total, item) => total + (item.product.discountedPrice * item.quantity), 0);
    } catch (error) {
        console.error('Error fetching cart items:', error);
    } finally {
        loading = false; // Set loading to false once data is fetched
    }

    return (
        <>
            {loading && <LoadingIndicator />} {/* Show loading indicator while fetching data */}
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
                                                                <div className="cart-pro-img"><img src={item.product.imageUrl} alt=""/></div>
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
                                                <li>{cartItems.length} items <span>${grandTotal.toFixed(2)}</span></li>
                                                <li>Shipping <span>Free</span></li>
                                            </ul>
                                        </div>
                                        <div className="subtotal-btn text-center">
                                            <button className="theme-btn">Proceed To Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
