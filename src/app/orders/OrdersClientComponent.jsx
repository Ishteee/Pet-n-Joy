"use client";

import { useRouter } from 'next/navigation'; // for client-side navigation
import styles from "./OrdersClientComponent.module.css";

const OrdersClientComponent = ({ orders }) => {
  const router = useRouter();

  const handleCardClick = (orderId) => {
    router.push(`/orderDetails/${orderId}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Your Orders</h1>
      <div className={styles.ordersList}>
        {orders.map((order) => (
          <div
            key={order.id}
            className={styles.orderCard}
            onClick={() => handleCardClick(order.id)}
          >
            <p className={styles.detail}>
              Transaction ID: <span className={styles.value}>{order.transactionId}</span>
            </p>
            <p className={styles.detail}>
              Total Amount: <span className={styles.value}>${order.totalAmount.toFixed(2)}</span>
            </p>
            <p className={styles.detail}>
              Status: <span className={styles.value}>{order.status}</span>
            </p>
            <p className={styles.detail}>
              Ordered On: <span className={styles.value}>
                {new Date(order.createdAt).toLocaleDateString('en-GB')}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersClientComponent;