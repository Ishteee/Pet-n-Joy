"use client";

import React from 'react';

const RemoveCartItemButton = ({ cartItemId }) => {
  const handleRemove = async () => {
    try {
      const res = await fetch(`https://pet-shop-rust.vercel.app/api/cart/remove/${cartItemId}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Error removing cart item');
      }

      const result = await res.json();
      console.log(result.message);
      
      // Refresh the page to fetch the updated cart items
      window.location.reload();
    } catch (error) {
      console.error('Error removing cart item:', error);
    }
  };

  return (
    <button
      className="cart-tras-btn"
      onClick={handleRemove}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};

export default RemoveCartItemButton;
