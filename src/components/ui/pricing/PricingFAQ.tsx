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
    <div className="w-full max-w-3xl space-y-4 sm:space-y-6 md:space-y-8 px-2 sm:px-4 py-8 sm:py-12 md:py-16 text-left">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-white">Frequently Asked Questions</h2>
      <div className="space-y-3 sm:space-y-4">
        {items.map(({ question, answer, defaultOpen }) => (
          <details key={question} className="group rounded-lg bg-white/5 p-3 sm:p-4" {...(defaultOpen ? { open: true } : {})}>
            <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-white text-sm sm:text-base">
              {question}
              <span className="transition group-open:rotate-180 flex-shrink-0 ml-2">
                <span className="material-symbols-outlined text-xl sm:text-2xl">expand_more</span>
              </span>
            </summary>
            <p className="mt-2 sm:mt-3 text-white/70 text-sm sm:text-base">{answer}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
