import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './wallet.module.css';

function Wallet() {
  const router = useRouter();
  const [walletBalance, setWalletBalance] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    // Fetch wallet balance and transaction history from API
    fetchWalletBalance();
    fetchTransactionHistory();
  }, []);

  const fetchWalletBalance = async () => {
    try {
      const response = await fetch('/api/wallet/balance');
      const data = await response.json();
      setWalletBalance(data.balance);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTransactionHistory = async () => {
    try {
      const response = await fetch('/api/wallet/transactions');
      const data = await response.json();
      setTransactionHistory(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddMoney = async (amount) => {
    try {
      const response = await fetch('/api/wallet/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });
      if (response.ok) {
        fetchWalletBalance();
        fetchTransactionHistory();
      } else {
        console.error('Error adding money');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.walletContainer}>
      <h2 className={styles.walletTitle}>Your Wallet</h2>
      <div className={styles.walletBalance}>
        <p>Balance:</p>
        <span className={styles.balanceAmount}>{walletBalance}</span>
      </div>
      <button className={styles.addMoneyButton} onClick={() => router.push('/wallet/add')}>
        Add Money
      </button>
      <div className={styles.transactionHistory}>
        <h3>Transaction History</h3>
        <ul>
          {transactionHistory.map((transaction, index) => (
            <li key={index}>
              <p>{transaction.date}</p>
              <p>{transaction.amount}</p>
              <p>{transaction.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Wallet;