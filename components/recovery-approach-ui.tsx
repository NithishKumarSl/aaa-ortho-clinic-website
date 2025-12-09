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
      className="section reveal py-16 md:py-24 bg-linear-to-br from-[#f6fbff] via-[#eef6ff] to-[#f0f7ff] scroll-mt-[70px] px-5 md:px-[5%]"
    >
      <div className="container max-w-[1280px] mx-auto">
        <div className="relative w-full overflow-hidden rounded-3xl border border-[#c7daf4] bg-white/70 backdrop-blur-sm shadow-[0_16px_48px_rgba(0,0,0,0.12)] px-6 py-8 md:px-12 md:py-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a65d9] leading-[1.1] mb-10 md:mb-12">
            4-Step Recovery
            <br />
            Approach
          </h2>

          {/* Connector canvas */}
          <div className="relative w-full" style={{ paddingBottom: "46%", minHeight: 320 }}>
            <svg
              viewBox="0 0 1200 520"
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
            >
              {/* 1 -> 2 */}
              <path
                d="M 150 240 C 220 280 300 300 390 360"
                fill="none"
                stroke="#0f5fcc"
                strokeWidth="3"
                opacity="0.65"
              />
              {/* 2 -> 3 */}
              <path
                d="M 430 380 C 520 410 600 340 700 260"
                fill="none"
                stroke="#0f5fcc"
                strokeWidth="3"
                opacity="0.65"
              />
              {/* 3 -> 4 */}
              <path
                d="M 720 260 C 830 300 920 340 1020 380"
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
                    minWidth: 240,
                    maxWidth: 270,
                    zIndex: isActive ? 2 : 1,
                  }}
                >
                  <div
                    className={`flex items-start gap-3 rounded-xl border-2 bg-white px-5 py-4 shadow-[0_10px_24px_rgba(16,86,204,0.08)] transition-all duration-200 ${
                      isActive ? "border-[#0a65d9] scale-[1.02]" : "border-[#cfe0ff]"
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