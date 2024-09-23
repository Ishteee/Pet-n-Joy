import { getServerSession } from "next-auth";
import Breadcrumb from "../components/Breadcrumb";
import WTClient from "./WTClient";
import { authOptions } from "@/lib/authOptions";

async function fetchTransactions(userId) {
    const response = await fetch("https://pet-shop-rust.vercel.app/api/wallet-transactions/find", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch transactions');
    }

    const data = await response.json();
    return data.transactions;
}

export default async function WalletTransactionsPage() {
    const session = await getServerSession(authOptions);
    const userId = session.user.id;

    const transactions = await fetchTransactions(userId);

    return (
        <>
            <Breadcrumb name="Wallet Transactions" />
            <WTClient transactions={transactions} />
        </>
    );
}