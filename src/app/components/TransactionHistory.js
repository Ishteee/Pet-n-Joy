// app/components/TransactionHistory.js

export default function TransactionHistory({ transactions }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Transaction History</h2>
        <ul>
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className={`flex justify-between items-center py-2 ${
                transaction.type === 'credit' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              <span>{transaction.type === 'credit' ? 'Credit' : 'Debit'}</span>
              <span>${transaction.amount}</span>
              <span className="text-gray-500">{transaction.date}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  