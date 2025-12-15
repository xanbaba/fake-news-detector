import { useState } from 'react'
import PricingHeading from '../ui/pricing/PricingHeading'
import BillingToggle from '../ui/pricing/BillingToggle'
import PlanCard from '../ui/pricing/PlanCard'
import PricingFAQ from '../ui/pricing/PricingFAQ'

export default function PricingPage() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('annual')
  const proPrice = billing === 'monthly' ? 29 : 23

  return (
    <section className="mt-16 md:mt-24 flex flex-col items-center gap-12 text-center">
      <PricingHeading />
      <BillingToggle value={billing} onChange={setBilling} />

      <div className="grid w-full grid-cols-1 gap-6 px-4 py-3 text-left md:grid-cols-2 lg:grid-cols-3">
        <PlanCard
          title="Basic"
          price={0}
          priceSuffix="/month"
          features={[
            '50 daily checks',
            'Core detection features',
            'Browser extension',
            'Standard support',
          ]}
          ctaLabel="Start for Free"
          ctaVariant="outline"
        />

        <PlanCard
          title="Pro"
          price={proPrice}
          priceSuffix="/month"
          features={[
            '500 daily checks',
            'Advanced source analysis',
            'API access',
            'Priority support',
          ]}
          ctaLabel="Choose Pro"
          highlight
        />

        <PlanCard
          title="Enterprise"
          features={[
            'Unlimited checks',
            'Custom integrations',
            'Team management features',
            'Dedicated support',
          ]}
          ctaLabel="Contact Sales"
          ctaVariant="outline"
        />
      </div>

      <PricingFAQ
        items={[
          {
            question: 'Can I cancel anytime?',
            answer:
              'Yes, you can cancel your subscription at any time. Your plan will remain active until the end of the current billing cycle, and you will not be charged again.',
            defaultOpen: true,
          },
          {
            question: 'What payment methods do you accept?',
            answer:
              'We accept all major credit cards, including Visa, Mastercard, and American Express. For Enterprise plans, we also support invoicing and bank transfers.',
          },
          {
            question: 'How does the API access work?',
            answer:
              'API access, available on the Pro and Enterprise plans, allows you to integrate our fake news detection capabilities directly into your own applications, workflows, and systems. Documentation is provided upon subscribing.',
          },
        ]}
      />
    </section>
  )
}
