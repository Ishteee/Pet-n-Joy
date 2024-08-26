// WalletClientComponent.jsx (Client Component)
'use client'; // Make sure this is a client component

import { useState } from 'react';
import styles from './WalletClientComponent.module.css'; // Assuming you're using CSS Modules

export default function WalletClientComponent({ wallet }) {
    const [moneyToAdd, setMoneyToAdd] = useState('');
    const [showAddMoneyField, setShowAddMoneyField] = useState(false);

    const handleAddMoneyClick = () => {
        setShowAddMoneyField(true);
    };

    const handleInputChange = (e) => {
        setMoneyToAdd(e.target.value);
    };

    const handleConfirmClick = () => {
        if (Number(moneyToAdd) >= 200) {
            // Logic to add money (e.g., API call) can go here
            console.log(`Adding ₹${moneyToAdd} to wallet`);
        }
        else {
            console.log("Amount should be atleast 500 Rs");
            alert("Amount should be atleast 200 Rs");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Your Wallet</h1>
            {wallet ? (
                <div className={styles.walletDetails}>
                    <p className={styles.detail}>
                        Name: <span className={styles.value}>{wallet.user.name}</span>
                    </p>
                    <p className={styles.detail}>
                        Balance: <span className={styles.value}>${wallet.balance.toFixed(2)}</span>
                    </p>
                    <div className={styles.buttons}>
                        <button className={styles.addMoney} onClick={handleAddMoneyClick}>Add Money</button>
                        <button className={styles.addMoney}>Show Transactions</button>
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
                                    onClick={handleConfirmClick}
                                    disabled={!moneyToAdd} // Disable button if input is less than 500
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
        </div>
    );

}
