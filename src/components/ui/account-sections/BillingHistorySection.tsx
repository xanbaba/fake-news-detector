export default function BillingHistorySection() {
  const dummyInvoices = [
    { id: 'INV-001', date: 'Dec 1, 2025', amount: '$19.00', status: 'Paid', plan: 'Pro Plan' },
    { id: 'INV-002', date: 'Nov 1, 2025', amount: '$19.00', status: 'Paid', plan: 'Pro Plan' },
    { id: 'INV-003', date: 'Oct 1, 2025', amount: '$19.00', status: 'Paid', plan: 'Pro Plan' },
  ]

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-white text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Billing History</h2>
        <p className="text-white/60 text-xs sm:text-sm">View your past invoices and payments</p>
      </div>

      {/* Mobile: Card-based layout */}
      <div className="sm:hidden space-y-3">
        {dummyInvoices.map((invoice) => (
          <div key={invoice.id} className="rounded-xl bg-white/5 border border-white/10 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-medium text-sm">{invoice.id}</span>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-green-500/20 text-green-400">
                {invoice.status}
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/60">Date</span>
                <span className="text-white/80">{invoice.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Plan</span>
                <span className="text-white/80">{invoice.plan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Amount</span>
                <span className="text-white font-medium">{invoice.amount}</span>
              </div>
            </div>
            <button className="mt-3 w-full text-primary hover:text-primary/80 text-sm font-medium transition-colors py-2 border border-primary/30 rounded-lg">
              Download
            </button>
          </div>
        ))}
      </div>

      {/* Desktop: Table layout */}
      <div className="hidden sm:block rounded-xl bg-white/5 border border-white/10 overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">Invoice</th>
                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">Date</th>
                <th className="hidden md:table-cell px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">Plan</th>
                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">Amount</th>
                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">Status</th>
                <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {dummyInvoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-white">{invoice.id}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white/70">{invoice.date}</td>
                  <td className="hidden md:table-cell px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white/70">{invoice.plan}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white/70">{invoice.amount}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-500/20 text-green-400">
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm">
                    <button className="text-primary hover:text-primary/80 transition-colors">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl bg-white/5 border border-white/10 p-4 sm:p-6">
        <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Payment Method</h3>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <div className="w-10 h-7 sm:w-12 sm:h-8 rounded bg-white/10 flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-white !text-lg sm:!text-xl">credit_card</span>
          </div>
          <div className="flex-1">
            <p className="text-white font-medium text-sm sm:text-base">•••• •••• •••• 4242</p>
            <p className="text-white/60 text-xs sm:text-sm">Expires 12/2026</p>
          </div>
          <button className="text-primary hover:text-primary/80 text-xs sm:text-sm font-medium transition-colors">
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

