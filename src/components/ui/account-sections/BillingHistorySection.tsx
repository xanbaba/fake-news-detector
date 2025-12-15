export default function BillingHistorySection() {
  const dummyInvoices = [
    { id: 'INV-001', date: 'Dec 1, 2025', amount: '$19.00', status: 'Paid', plan: 'Pro Plan' },
    { id: 'INV-002', date: 'Nov 1, 2025', amount: '$19.00', status: 'Paid', plan: 'Pro Plan' },
    { id: 'INV-003', date: 'Oct 1, 2025', amount: '$19.00', status: 'Paid', plan: 'Pro Plan' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-white text-2xl font-bold mb-2">Billing History</h2>
        <p className="text-white/60 text-sm">View your past invoices and payments</p>
      </div>

      <div className="rounded-xl bg-white/5 border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">Invoice</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">Plan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white/80 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {dummyInvoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{invoice.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70">{invoice.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70">{invoice.plan}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/70">{invoice.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-500/20 text-green-400">
                      {invoice.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
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

      <div className="rounded-xl bg-white/5 border border-white/10 p-6">
        <h3 className="text-white text-lg font-semibold mb-4">Payment Method</h3>
        <div className="flex items-center gap-4">
          <div className="w-12 h-8 rounded bg-white/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-white !text-xl">credit_card</span>
          </div>
          <div>
            <p className="text-white font-medium">•••• •••• •••• 4242</p>
            <p className="text-white/60 text-sm">Expires 12/2026</p>
          </div>
          <button className="ml-auto text-primary hover:text-primary/80 text-sm font-medium transition-colors">
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

