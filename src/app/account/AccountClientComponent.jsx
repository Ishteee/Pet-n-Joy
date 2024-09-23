"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import styles from './ProfileClientComponent.module.css';
import LogoutButton from '../components/ui/LogoutButton';
import LoadingSpinner from "@/app/components/ui/LoadingSpinner"; // Assume you have this component
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const AccountClientComponent = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Track current path

  const handleOrders = () => {
    setIsLoading(true);
    router.push("/orders");
  };

  // Hide loader when the pathname changes (indicating navigation has finished)
  useEffect(() => {
    if (pathname === "/orders") {
      setIsLoading(false);
    }
  }, [pathname]);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Your Profile</h1>
      {user ? (
        <div className={styles.profileDetails}>
          <p className={styles.detail}>
            {user.name != null ? "Name: ": "Username: "}<span className={styles.value}>{user.name || user.username}</span>
          </p>
          <p className={styles.detail}>
            Email: <span className={styles.value}>{user.email}</span>
          </p>

          <div className={styles.buttons}>
            <button onClick={handleOrders} className={styles.ordersButton}>Orders</button>
            <LogoutButton/>
          </div>
        </div>
      ) : (
        <p className={styles.noProfile}>No profile found</p>
      )}

      {/* Show loading spinner */}
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default AccountClientComponent;
