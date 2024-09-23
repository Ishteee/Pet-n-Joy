// page.jsx (Server Component)

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { prisma } from '@/lib/prisma';
import WalletClientComponent from './WalletClientComponent'; // Import the client component

async function fetchWallet(userId) {
  try {
    const res = await fetch(`https://pet-shop-rust.vercel.app/api/wallet/${userId}`);

    if (!res.ok) {
      throw new Error('Failed to fetch wallet');
    }

    const wallet = await res.json();
    return wallet;
  } catch (error) {
    console.error('Error fetching wallet:', error);
    return null;
  }
}

export default async function WalletPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return <div>Please log in to view your wallet.</div>;
  }

  const userId = session.user.id;

  try {
    const wallet = await fetchWallet(userId);

    return (
      <WalletClientComponent wallet={wallet} userId={userId} /> // Pass wallet data to client component
    );
  } catch (error) {
    return <div>Error: Failed to load wallet</div>;
  }
}
