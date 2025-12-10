"use client"

import { useState } from "react"

export default function RecoveryApproach() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [clickedStep, setClickedStep] = useState<number | null>(null)

  const steps = [
    {
      id: 1,
      iconSrc: "/StepRecoveryimg/Consultation&PainAnalysis.svg",
      iconHoverSrc: "/StepRecoveryimg/Consultation&PainAnalysis-light.svg",
      alt: "Consultation and pain analysis icon",
      title: "Consultation &",
      subtitle: "Pain Analysis",
      pos: { left: 11, top: 44 },
    },
    {
      id: 2,
      iconSrc: "/StepRecoveryimg/ClinicalTestsX-Ray.svg",
      iconHoverSrc: "/StepRecoveryimg/ClinicalTestsX-Ray-light.svg",
      alt: "Clinical tests and X-ray icon",
      title: "Clinical Tests /",
      subtitle: "X-Ray (if needed)",
      pos: { left: 36, top: 74 },
    },
    {
      id: 3,
      iconSrc: "/StepRecoveryimg/PersonalizedTreatmentPlan.svg",
      iconHoverSrc: "/StepRecoveryimg/PersonalizedTreatmentPlan-light.svg",
      alt: "Personalized treatment plan icon",
      title: "Personalized",
      subtitle: "Treatment Plan",
      pos: { left: 59, top: 46 },
    },
    {
      id: 4,
      iconSrc: "/StepRecoveryimg/Exercises&Follow-UporLong-TermRelief.svg",
      iconHoverSrc: "/StepRecoveryimg/Exercises&Follow-UporLong-TermRelief-light.svg",
      alt: "Exercises and follow-up icon",
      title: "Exercises & Follow-Up",
      subtitle: "for Long-Term Relief",
      pos: { left: 84, top: 74 },
    },
  ]

  const makeLinePath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    return `M ${start.x} ${start.y} L ${end.x} ${end.y}`
  }

  const connectorPaths = [
    makeLinePath({ x: steps[0].pos.left, y: steps[0].pos.top }, { x: steps[1].pos.left, y: steps[1].pos.top }),
    makeLinePath({ x: steps[1].pos.left, y: steps[1].pos.top }, { x: steps[2].pos.left, y: steps[2].pos.top }),
    makeLinePath({ x: steps[2].pos.left, y: steps[2].pos.top }, { x: steps[3].pos.left, y: steps[3].pos.top }),
  ]

  const mobileConnectorPaths = [
    "M 50 0 L 38 70", // 1 -> 2 (diagonal left)
    "M 50 0 L 62 70", // 2 -> 3 (diagonal right)
    "M 50 0 L 38 70", // 3 -> 4 (diagonal left)
  ]

  const handleStepClick = (id: number) => {
    setClickedStep(clickedStep === id ? null : id)
  }

  const renderCard = (step: typeof steps[number], isActive: boolean) => (
    <div
      className={`flex items-start gap-2.5 sm:gap-3 rounded-lg sm:rounded-xl border-2 bg-white px-3 py-3 sm:px-4 sm:py-3.5 shadow-[0_10px_24px_rgba(16,86,204,0.08)] transition-all duration-200 active:scale-[0.98] ${
        isActive ? "border-[#0a65d9] scale-[1.02]" : "border-[#d8e7ff]"
      }`}
    >
      <div
        className={`mt-0.5 rounded-lg p-1.5 sm:p-2 transition-colors shrink-0 ${
          isActive ? "bg-[#0a65d9]" : "bg-[#eef6ff]"
        }`}
      >
        <img
          src={isActive && step.iconHoverSrc ? step.iconHoverSrc : step.iconSrc}
          alt={step.alt}
          className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
          loading="lazy"
        />
      </div>
      <div className="text-left flex-1 min-w-0">
        <div className="text-xs sm:text-sm font-semibold text-[#0a65d9] leading-tight">
          {step.title}
        </div>
        <div className="text-xs sm:text-sm font-semibold text-[#0a65d9] leading-tight">
          {step.subtitle}
        </div>
      </div>
    </div>
  )

  return (
    <section
      id="recovery-approach"
      className="section reveal py-10 sm:py-12 md:py-16 bg-[#FDFEFF] scroll-mt-[70px] px-4 sm:px-5 md:px-[5%]"
    >
      <div className="container max-w-[1280px] mx-auto">
        <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl border border-[#d8e7ff] bg-[#f6fbff] shadow-[0_12px_36px_rgba(12,60,120,0.10)] px-4 py-5 sm:px-5 sm:py-6 md:px-8 md:py-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a65d9] leading-[1.15] mb-5 sm:mb-6 md:mb-8">
            4-Step Recovery
            <br />
            Approach
          </h2>

{/* Mobile (stacked) */}
<div className="lg:hidden flex flex-col px-2 sm:px-4">
          {steps.map((step, idx) => {
            const isActive = hoveredStep === step.id || clickedStep === step.id
            return (
              <div key={step.id} className="relative">
                <div
                  onClick={() => handleStepClick(step.id)}
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="w-full relative z-10"
                >
                  {renderCard(step, isActive)}
                </div>
                {idx < steps.length - 1 && (
                  <div className="relative w-full h-12 sm:h-16 -mt-1 -mb-1">
                    <svg
                      className="absolute w-full h-full"
                      viewBox="0 0 100 70"
                      preserveAspectRatio="none"
                      fill="none"
                      style={{ overflow: 'visible' }}
                    >
                      <path
                        d={mobileConnectorPaths[idx]}
                        stroke="#0a65d9"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>

          {/* Desktop (absolute map) */}
          <div className="relative w-full hidden lg:block" style={{ paddingBottom: "34%", minHeight: 260 }}>
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
            >
              {connectorPaths.map((d, idx) => (
                <path
                  key={idx}
                  d={d}
                  fill="none"
                  stroke="#0a65d9"
                  strokeWidth="0.5"
                  opacity="0.65"
                />
              ))}
            </svg>

            {/* Step cards absolute positioned to mirror the reference layout */}
            {steps.map((step) => {
              const isActive = hoveredStep === step.id || clickedStep === step.id

              return (
                <div
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="absolute cursor-pointer"
                  style={{
                    left: `${step.pos.left}%`,
                    top: `${step.pos.top}%`,
                    transform: "translate(-50%, -50%)",
                    minWidth: 220,
                    maxWidth: 240,
                    zIndex: isActive ? 2 : 1,
                  }}
                >
                  {renderCard(step, isActive)}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}