export default function WTClient({ transactions }) {
    return (
        <section className="wishlist-product-area page-paddings">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="whislist-pro-box">
                            <div className="theme-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Transaction ID</th>
                                            <th>Amount</th>
                                            <th>Balance</th>
                                            <th>CashBack</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactions.length > 0 ? (
                                            transactions.map((transaction) => (
                                                <tr key={transaction.id}>
                                                    <td><span className="">{transaction.title}</span></td>
                                                    <td><span className="">{transaction.transactionId}</span></td>
                                                    <td><span className="">₹{transaction.amount.toFixed(2)}</span></td>
                                                    <td className={`pro-stock ${transaction.title === 'Made Purchase, Earned Cashback' || transaction.title === 'Money Added' ? 'in-stock' : 'out-stock'}`}>
                                                        {transaction.title === 'Made Purchase, Earned Cashback' || transaction.title === 'Money Added' ? '+' + transaction.balance.toFixed(2) : '-' + transaction.balance.toFixed(2)}
                                                    </td>
                                                    <td className={`pro-stock ${transaction.cashbackBalance == null ? "" : transaction.title === 'Made Purchase, Earned Cashback' || transaction.title === 'Money Added' ? 'in-stock' : 'out-stock'}`}>
                                                        {transaction.cashbackBalance === null ? "N/A" : transaction.title === 'Made Purchase, Earned Cashback' || transaction.title === 'Money Added' ? '+' + transaction.cashbackBalance.toFixed(2) : '-' + transaction.cashbackBalance.toFixed(2)}</td>
                                                    <td><span className="">
                                                        {new Date(transaction.updatedAt).toLocaleDateString('en-GB', {
                                                            day: '2-digit',
                                                            month: '2-digit',
                                                            year: 'numeric',
                                                        })}
                                                    </span></td>

                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="6" className="text-center">No transactions found.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}