"use client";

const AddToCartButton = ({productId, userId}) => {

    const addToCart = async () => {
        console.log("HELLO");
        console.log("Product ID:", productId);
        console.log("User ID:", userId);
        try {
          const res = await fetch('/api/cart/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              userId: userId, // Replace with logic to get the logged-in user's ID
              productId: productId,
              quantity: 1, // You can modify this based on the selected quantity
            }),
          });
    
          const result = await res.json();
          console.log(result.message);
        } catch (error) {
          console.error('Error adding to cart:', error);
        } finally {
        }
      };

    return (
        <button onClick={addToCart} className="theme-btn">Add To Cart</button>
    );
};

export default AddToCartButton;