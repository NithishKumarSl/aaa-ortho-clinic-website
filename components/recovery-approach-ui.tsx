"use client"

import { useState } from "react"
import { ClipboardList, FileText, Activity, Target } from "lucide-react"

export default function RecoveryApproach() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [clickedStep, setClickedStep] = useState<number | null>(null)

  const steps = [
    {
      id: 1,
      icon: ClipboardList,
      title: "Consultation &",
      subtitle: "Pain Analysis",
      pos: { left: "11%", top: "44%" },
    },
    {
      id: 2,
      icon: Activity,
      title: "Clinical Tests /",
      subtitle: "X-Ray (if needed)",
      pos: { left: "36%", top: "74%" },
    },
    {
      id: 3,
      icon: FileText,
      title: "Personalized",
      subtitle: "Treatment Plan",
      pos: { left: "59%", top: "46%" },
    },
    {
      id: 4,
      icon: Target,
      title: "Exercises & Follow-Up",
      subtitle: "for Long-Term Relief",
      pos: { left: "84%", top: "74%" },
    },
  ]

  const handleStepClick = (id: number) => {
    setClickedStep(clickedStep === id ? null : id)
  }

  return (
    <section
      id="recovery-approach"
      className="section reveal py-12 md:py-16 bg-[#FDFEFF] scroll-mt-[70px] px-5 md:px-[5%]"
    >
      <div className="container max-w-[1280px] mx-auto">
        <div className="relative w-full overflow-hidden rounded-2xl border border-[#d8e7ff] bg-[#f6fbff] shadow-[0_12px_36px_rgba(12,60,120,0.10)] px-5 py-6 md:px-8 md:py-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a65d9] leading-[1.15] mb-6 md:mb-8">
            4-Step Recovery
            <br />
            Approach
          </h2>

          {/* Connector canvas */}
          <div className="relative w-full" style={{ paddingBottom: "34%", minHeight: 260 }}>
            <svg
              viewBox="0 0 1200 520"
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
            >
              {/* 1 -> 2 */}
              <path
                d="M 150 230 C 240 250 310 270 390 320"
                fill="none"
                stroke="#0f5fcc"
                strokeWidth="3"
                opacity="0.65"
              />
              {/* 2 -> 3 */}
              <path
                d="M 430 340 C 520 360 600 310 700 250"
                fill="none"
                stroke="#0f5fcc"
                strokeWidth="3"
                opacity="0.65"
              />
              {/* 3 -> 4 */}
              <path
                d="M 720 250 C 830 280 920 320 1020 350"
                fill="none"
                stroke="#0f5fcc"
                strokeWidth="3"
                opacity="0.65"
              />
            </svg>

            {/* Step cards absolute positioned to mirror the reference layout */}
            {steps.map((step) => {
              const Icon = step.icon
              const isActive = hoveredStep === step.id || clickedStep === step.id

              return (
                <div
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="absolute"
                  style={{
                    left: step.pos.left,
                    top: step.pos.top,
                    transform: "translate(-50%, -50%)",
                    minWidth: 220,
                    maxWidth: 240,
                    zIndex: isActive ? 2 : 1,
                  }}
                >
                  <div
                    className={`flex items-start gap-3 rounded-xl border-2 bg-white px-4 py-3.5 shadow-[0_10px_24px_rgba(16,86,204,0.08)] transition-all duration-200 ${
                      isActive ? "border-[#0a65d9] scale-[1.02]" : "border-[#d8e7ff]"
                    }`}
                  >
                    <div
                      className={`mt-0.5 rounded-lg p-2 transition-colors ${
                        isActive ? "bg-[#0a65d9]" : "bg-[#eef6ff]"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isActive ? "text-white" : "text-[#0a65d9]"
                        }`}
                      />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-[#0a65d9] leading-tight">
                        {step.title}
                      </div>
                      <div className="text-sm font-semibold text-[#0a65d9] leading-tight">
                        {step.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}