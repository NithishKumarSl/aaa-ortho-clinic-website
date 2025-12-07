import { Check, ArrowRight } from "lucide-react"

export default function StepsSection() {
  const steps = [
    {
      number: "1",
      title: "Consultation & Pain Analysis",
      icon: Check,
    },
    {
      number: "2",
      title: "Personalized Treatment Plan",
      icon: Check,
    },
    {
      number: "3",
      title: "Clinical Therapy & Targeted Treatment",
      icon: Check,
    },
    {
      number: "4",
      title: "Recovery & Follow-Up for Long-Term Relief",
      icon: Check,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">4-Step Recovery Approach</h2>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-4 md:gap-0">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center md:relative">
              {/* Step Card */}
              <div className="bg-white rounded-lg p-6 shadow-sm w-full md:w-full text-center mb-4 md:mb-0">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
              </div>

              {/* Arrow */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex justify-center w-full py-4">
                  <ArrowRight className="text-primary" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

