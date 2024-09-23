// WalletClientComponent.jsx (Client Component)
'use client'; // Make sure this is a client component

import { useState } from 'react';
import styles from './WalletClientComponent.module.css'; // Assuming you're using CSS Modules
import { payment } from '@/action/ServerActions';
import { useRouter } from "next/navigation";
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { v4 as uuidv4 } from "uuid";

export default function WalletClientComponent({ wallet, userId }) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [moneyToAdd, setMoneyToAdd] = useState('');
    const [showAddMoneyField, setShowAddMoneyField] = useState(false);

    const handleAddMoneyClick = () => {
        setShowAddMoneyField(true);
    };

    const handleShowTransactionsClick = () => {
        setShowAddMoneyField(false); // Hide add money field when showing transactions
        setIsLoading(true);
        router.push("/walletTransactions");
        setIsLoading(false);
    };

    const handleInputChange = (e) => {
        setMoneyToAdd(e.target.value);
    };

    const handleConfirmClick = (e) => {
        if (Number(moneyToAdd) >= 200) {
            // Logic to add money (e.g., API call) can go here
            alert(`Adding ₹${moneyToAdd} to wallet`);
            makePayment(e);
        }
        else {
            console.log("Amount should be atleast 500 Rs");
            alert("Amount should be atleast 200 Rs");
        }
    };

    const makePayment = async (e) => {
        e.preventDefault();
        if (Number(moneyToAdd) >= 200) {
            setIsLoading(true);
            const transactionId = "Wl-" + uuidv4().toString(36).slice(-6);
    
            try {
                // Step 1: Call API to create WalletTransaction
                const transactionResponse = await fetch('/api/wallet-transactions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: userId, // Assuming `wallet` contains the userId
                        transactionId: transactionId,
                        amount: moneyToAdd,
                        balance: moneyToAdd, // Update balance after adding money
                        cashbackBalance: null, // Assuming cashback remains the same
                        title: "Money Added",
                    }),
                });
    
                const transactionData = await transactionResponse.json();
    
                if (transactionResponse.ok) {
                    console.log("Wallet transaction created successfully:", transactionData);
                    setIsLoading(false);

                    // Step 2: Proceed with payment after successfully creating the transaction
                    const redirect = await payment(moneyToAdd, transactionId);
                    console.log("redirect>>>", redirect.url);
                    router.push(redirect.url);
                } else {
                    console.error("Failed to create wallet transaction:", transactionData);
                    alert('Error creating wallet transaction');
                }
            } catch (error) {
                console.error("Error during payment process:", error);
                alert('Something went wrong during the payment process');
            }
        } else {
            console.log("Amount should be atleast 200 Rs");
            alert("Amount should be atleast 200 Rs");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>PetNJoy Card</h1>
            {wallet ? (
                <div className={styles.walletDetails}>
                    <p className={styles.detail}>
                        {wallet.user.name != null ? "Name: ": "Username: "}<span className={styles.value}>{wallet.user.name || wallet.user.username}</span>
                    </p>
                    <p className={styles.detail}>
                        Balance: <span className={styles.value}>₹{wallet.balance.toFixed(2)}</span>
                    </p>
                    <p className={styles.detail}>
                        Cashback Balance: <span className={styles.value}>₹{wallet.cashbackAmount.toFixed(2)}</span>
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.addMoney} onClick={handleAddMoneyClick}>Add Money</button>
                        <button className={styles.addMoney} onClick={handleShowTransactionsClick}>Show Transactions</button>
                    </div>

                    {/* Section to add money, initially hidden */}
                    {showAddMoneyField && (
                        <div className={styles.addMoneySection}>
                            <p>How much money do you want to add?</p>
                            <div className={styles.inputContainer}>
                                <span className={styles.rupeeSymbol}>₹</span>
                                <input
                                    type="number"
                                    placeholder="Enter amount"
                                    value={moneyToAdd}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                />
                                <button
                                    className={styles.confirmButton}
                                    onClick={makePayment} // Call makePayment when button is clicked
                                    disabled={!moneyToAdd} // Disable if `moneyToAdd` is not valid
                                    >
                                    ➡
                                </button>
                            </div>


                        </div>
                    )}
                    


                </div>
            ) : (
                <p className={styles.noWallet}>No wallet found</p>
            )}
            {isLoading && (
                <div className={styles.loadingOverlay}>
                <LoadingSpinner />
                </div>
            )}
        </div>
    );

}
