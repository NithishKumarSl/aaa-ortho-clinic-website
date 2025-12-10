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
    <section className="py-12 sm:py-16 md:py-24 bg-[#f5faff] px-4 sm:px-5 md:px-[5%]">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <h2 className="text-[28px] sm:text-3xl md:text-4xl font-bold text-[#0a65d9] mb-8 sm:mb-10 md:mb-12 text-center leading-tight">
          4-Step Recovery Approach
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-0">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center md:relative">
              {/* Step Card */}
              <div className="bg-[#FDFEFF] rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-[0_4px_12px_rgba(0,0,0,0.04)] w-full md:w-full text-center mb-4 md:mb-0 border border-[rgba(18,52,91,0.06)] hover:shadow-[0_8px_24px_rgba(10,101,217,0.12)] transition-all">
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#eaf3ff] rounded-full flex items-center justify-center border-2 border-[#0a65d9]">
                    <span className="text-[#0a65d9] font-bold text-lg sm:text-xl">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-[#222] leading-relaxed">{step.title}</h3>
              </div>

              {/* Arrow */}
              {idx < steps.length - 1 && (
                <>
                  <div className="hidden sm:flex md:hidden justify-center w-full py-4">
                    {idx % 2 === 0 ? (
                      <ArrowRight className="text-[#0a65d9]" size={24} />
                    ) : (
                      <ArrowRight className="text-[#0a65d9] rotate-180" size={24} />
                    )}
                  </div>
                  <div className="hidden md:flex justify-center w-full py-4">
                    <ArrowRight className="text-[#0a65d9]" size={24} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

