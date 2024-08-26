// app/components/WalletBalance.js

export default function WalletBalance({ balance }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700">Wallet Balance</h2>
        <p className="mt-4 text-4xl text-green-500">${balance.toFixed(2)}</p>
      </div>
    );
  }
  