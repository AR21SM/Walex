export const RecentTxn = () => {
    const transactions = [
        {
            id: 1,
            date: "2025-02-25",
            description: "Swiggy Order",
            amount: "-₹432.50",
            type: "debit"
        },
        {
            id: 2,
            date: "2025-02-24",
            description: "Salary Credit",
            amount: "+₹85,000.00",
            type: "credit"
        },
        {
            id: 6,
            date: "2025-02-20",
            description: "Google Pay Transfer",
            amount: "+₹3,200.00",
            type: "credit"
        },
        {
            id: 7,
            date: "2025-02-19",
            description: "Amazon Shopping",
            amount: "-₹2,799.00",
            type: "debit"
        }
    ];

    return (
        <div className="bg-gradient-to-br from-[#FFFFFF] via-[#FCFCFC] to-[#FAFAFA] shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-3xl p-6 w-full max-w-2xl border border-gray-100 hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition-all duration-300">
            <div className="text-gray-600 font-medium text-xl uppercase tracking-wider mb-4">
                Recent Transactions
            </div>
            
            <div className="space-y-2">
                {transactions.map((txn) => (
                    <div key={txn.id} className="flex justify-between items-center px-4 py-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                        <div className="space-y-0.5">
                            <div className="text-gray-700 text-sm font-medium">{txn.description}</div>
                            <div className="text-gray-500 text-xs">{txn.date}</div>
                        </div>
                        <div className={`text-sm font-semibold ${txn.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                            {txn.amount}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};