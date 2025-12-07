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
    },
    {
      id: 2,
      icon: Activity,
      title: "Clinical Tests /",
      subtitle: "X-Ray (if needed)",
    },
    {
      id: 3,
      icon: FileText,
      title: "Personalized",
      subtitle: "Treatment Plan",
    },
    {
      id: 4,
      icon: Target,
      title: "Exercises & Follow-Up",
      subtitle: "for Long-Term Relief",
    },
  ]

  const handleStepClick = (id: number) => {
    setClickedStep(clickedStep === id ? null : id)
  }

  return (
    <section id="recovery-approach" className="section reveal py-16 md:py-24 bg-linear-to-br from-[#f6fbff] via-[#eef6ff] to-[#f0f7ff] scroll-mt-[70px]">
      <div className="container max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="w-full bg-white/60 backdrop-blur-sm rounded-3xl shadow-[0_16px_48px_rgba(0,0,0,0.14)] p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a65d9] mb-8 md:mb-16 text-center md:text-left">
            4-Step Recovery
            <br />
            Approach
          </h2>

          <div className="relative">
            {/* SVG Connection Lines - Hidden on mobile, visible on desktop */}
            <svg
              className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 0 }}
              viewBox="0 0 1200 600"
              preserveAspectRatio="none"
            >
              {/* Line from Step 1 to Step 2 */}
              <path
                d="M 300 150 Q 400 200 350 250"
                fill="none"
                stroke="#8aa6d6"
                strokeWidth="2"
                opacity="0.5"
              />
              {/* Line from Step 2 to Step 3 */}
              <path
                d="M 500 300 Q 600 280 700 320"
                fill="none"
                stroke="#8aa6d6"
                strokeWidth="2"
                opacity="0.5"
              />
              {/* Line from Step 3 to Step 4 */}
              <path
                d="M 800 350 Q 900 380 1000 420"
                fill="none"
                stroke="#8aa6d6"
                strokeWidth="2"
                opacity="0.5"
              />
            </svg>

            {/* Steps Grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-16 md:gap-y-12 lg:gap-x-24 lg:gap-y-16" style={{ zIndex: 1 }}>
              {steps.map((step, index) => {
                const Icon = step.icon
                const isHovered = hoveredStep === step.id
                const isClicked = clickedStep === step.id
                const isActive = isHovered || isClicked

                return (
                  <div
                    key={step.id}
                    className={`${
                      index % 2 === 0 ? 'md:justify-self-end' : 'md:justify-self-start'
                    } ${index === 1 ? 'md:mt-8' : ''} ${index === 3 ? 'md:mt-8' : ''}`}
                    style={{ maxWidth: '100%', width: '100%' }}
                  >
                    <button
                      onClick={() => handleStepClick(step.id)}
                      onMouseEnter={() => setHoveredStep(step.id)}
                      onMouseLeave={() => setHoveredStep(null)}
                      className={`w-full px-6 md:px-8 py-5 md:py-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'border-[#0a65d9] bg-[#eef6ff] shadow-lg scale-[1.02] md:scale-105 -translate-y-1'
                          : 'border-[#cfe0ff] bg-white shadow-[0_4px_12px_rgba(18,52,91,0.06)] hover:shadow-lg hover:border-[#8aa6d6]'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`p-3 rounded-xl transition-colors duration-300 shrink-0 ${
                            isActive ? 'bg-[#0a65d9]' : 'bg-[#eef6ff]'
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${
                              isActive ? 'text-white' : 'text-[#0a65d9]'
                            }`}
                          />
                        </div>
                        <div className="text-left">
                          <div
                            className={`text-sm md:text-base font-semibold transition-colors duration-300 ${
                              isActive ? 'text-[#0f5fcc]' : 'text-[#0a65d9]'
                            }`}
                          >
                            {step.title}
                          </div>
                          <div
                            className={`text-sm md:text-base font-semibold transition-colors duration-300 ${
                              isActive ? 'text-[#0f5fcc]' : 'text-[#0a65d9]'
                            }`}
                          >
                            {step.subtitle}
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}