'use client';

import React, { useEffect, useState } from 'react';
import styles from './OrderDetailsClientComponent.module.css';
import { useRouter } from 'next/navigation';

const OrderDetailsClientComponent = ({ order }) => {

  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("");


  useEffect(() => {
    if (order.transactionId.startsWith("Wi")) {
      setPaymentMethod("Paid with PetNJoy Card");
    } else if (order.transactionId.startsWith("Wc")) {
      setPaymentMethod("Paid with PetNJoy Card, used Cashback");
    } else if (order.transactionId.startsWith("Cr")) {
      setPaymentMethod("Paid via Phonepe Gateway");
    } else if (order.transactionId.startsWith("Cd")) {
      setPaymentMethod("Cash on Delivery");
    }
  }, [order.transactionId]);

  const handleImageClick = (productId) => {
    router.push(`/product/${productId}`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.orderCard}>
        <div className={styles.transactionInfo}>
          <p>Transaction ID: {order.transactionId}</p>
          <p>Total Amount: ${order.totalAmount.toFixed(2)}</p>
          <p>Status: {order.status}</p>
          <p>Payment Method: {paymentMethod}</p>
          <p>Ordered On: {new Date(order.createdAt).toLocaleDateString('en-GB')}</p>
        </div>

        <div className={styles.orderDetailsCard}>
          <h2 className={styles.sectionTitle}>Products Ordered:</h2>
          {order.orderItems.map((item) => (
            <div key={item.id} className={styles.productDetails}>
              <div className={styles.productInfo}>
                <p>Product: {item.product.productName}</p>
                <p>Quantity: {item.quantity}</p>
                <p className={styles.priceInfo}>Price: ${item.price.toFixed(2)}</p>
              </div>
              <div className={styles.productImage} onClick={() => handleImageClick(item.product.id)}>
                <img src={item.product.imageUrl} alt={item.product.productName} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsClientComponent;
