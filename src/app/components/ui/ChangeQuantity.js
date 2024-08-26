"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress from Material-UI

const QuantityChange = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [loading, setLoading] = useState(false); // To manage loading state
  const router = useRouter(); // Initialize the router

  const handleQuantityChange = async (newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
    setLoading(true); // Set loading state when the update is triggered
    setQuantity(newQuantity);

    try {
      // Making API request to update the cart item's quantity
      const res = await fetch(`/api/cart/update/${item.id}`, {
        method: 'PATCH', // Using PATCH for partial updates
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quantity: newQuantity, // Pass the new quantity
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to update cart item quantity');
      }

      const updatedItem = await res.json();
      console.log('Quantity updated:', updatedItem);

      // Refresh the router to reflect the updated quantity
      router.refresh();

    } catch (error) {
      console.error('Error updating quantity:', error);
    } finally {
      setLoading(false); // Reset loading state after request completion
    }
  };

  return (
    <div className="quantity-control">
      <button
        className="quantity-btn"
        onClick={() => handleQuantityChange(quantity - 1)}
        disabled={loading} // Disable button during API call
      >
        -
      </button>

      <input
        type="number"
        className="quantity-input"
        value={quantity}
        readOnly
      />

      <button
        className="quantity-btn"
        onClick={() => handleQuantityChange(quantity + 1)}
        disabled={loading} // Disable button during API call
      >
        +
      </button>

      {loading && (
        <div className="loading-indicator">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default QuantityChange;
