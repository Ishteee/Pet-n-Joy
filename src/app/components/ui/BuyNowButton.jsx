"use client";
const BuyNowButton = ({productId, userId, quantity, price, buyNow}) => {
    
    const BuyNow = async () => {
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
          router.push
        }
      };

    return (
        <button onClick={BuyNow} className="theme-btn">Buy Now</button>
    );
};

export default BuyNowButton;