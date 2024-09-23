'use client';

import { useState } from "react";

export default function WishlistClientComponent({ wishlistItems, userId }) {
    const [items, setItems] = useState(wishlistItems);

    const addToCart = async (productId, quantity, buyNow) => {
      try {
        const res = await fetch('/api/cart/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: userId, // Replace with logic to get the logged-in user's ID
            productId: productId,
            quantity: quantity, // You can modify this based on the selected quantity
            buyNow: buyNow,
          }),
        });
  
        const result = await res.json();
        console.log(result.message);
      } catch (error) {
        console.error('Error adding to cart:', error);
      } finally {
      }
    };

    const removeItem = async (itemId) => {
      try {
          const res = await fetch('/api/wishlist/remove', {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  userId: userId, // Assuming userId is available in the component
                  itemId: itemId, // The product you want to remove
              }),
          });
  
          if (res.ok) {
              setItems(items.filter(item => item.productId !== itemId)); // Update the UI optimistically
          } else {
              console.error('Failed to remove item from wishlist');
          }
      } catch (error) {
          console.error('Error:', error);
      }
    };
  


    return(
        <section className="wishlist-product-area page-paddings">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                     <div className="whislist-pro-box">
                        <div className="theme-table">
                           <table>
                              <thead>
                                 <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Stock Status</th>
                                    <th>Add to cart</th>
                                    <th>Remove</th>
                                 </tr>
                              </thead>
                              <tbody>
                              {items.length > 0 ? (
                                items.map(item => (
                                    <tr key={item.id}>
                                    <td>
                                       <div className="cart-pro-box">
                                          <div className="cart-pro-img"><img src={item.product.imageUrl} alt=""/></div>
                                          <div className="cart-pro-content">
                                             <h3 className="theme-title">{item.product.productName}</h3>
                                             <div className="product-ratting">
                                                <i className="fas fa-star ratting-active"></i><i className="fas fa-star ratting-active"></i><i className="fas fa-star ratting-active"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                             </div>
                                          </div>
                                       </div>
                                    </td>
                                    <td><span className="cart-subtotal">{item.product.discountedPrice}</span></td>
                                    <td className="pro-stock in-stock">In Stock</td>
                                    <td><button onClick={() => addToCart(item.product.id, 1, false)} className="theme-btn btn-light">Add To Cart</button></td>
                                    <td><button className="cart-tras-btn" onClick={() => removeItem(item.id)} data-toggle="modal" data-target="#remove-product"><i className="fas fa-trash-alt"></i></button></td>
                                 </tr>
                                ))
                              ) : (
                                 <tr>
                                    <td colSpan="5" className="text-center">Your wishlist is empty.</td>
                                 </tr>
                              )}
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    );
}