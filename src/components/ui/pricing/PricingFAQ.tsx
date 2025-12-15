type FAQItem = {
  question: string
  answer: string
  defaultOpen?: boolean
}

type Props = {
  items: FAQItem[]
}

export default function PricingFAQ({ items }: Props) {
  return (
    <div className="w-full max-w-3xl space-y-8 px-4 py-16 text-left">
      <h2 className="text-center text-3xl font-bold text-white">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {items.map(({ question, answer, defaultOpen }) => (
          <details key={question} className="group rounded-lg bg-white/5 p-4" {...(defaultOpen ? { open: true } : {})}>
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-white">
              {question}
              <span className="transition group-open:rotate-180">
                <span className="material-symbols-outlined">expand_more</span>
              </span>
            </summary>
            <p className="mt-3 text-white/70">{answer}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
