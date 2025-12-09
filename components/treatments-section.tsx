"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function TreatmentsSection() {
  const [activeTreatment, setActiveTreatment] = useState(0)

  const treatments = [
    "Joint Pain Treatment",
    "Back Pain Treatment",
    "Fracture Treatment",
    "Arthritis Management",
    "Shoulder & Neck Pain",
    "Sports Injury & Muscle Sprain",
  ]

  const treatmentCards = [
    {
      title: "Joint Pain Treatment",
      image: "/treatments/JointPainTreatment.png",
    },
    {
      title: "Back Pain Treatment",
      image: "/treatments/BackPainTreatment.png",
    },
    {
      title: "Fracture Treatment",
      image: "/treatments/FractureTreatment.png",
    },
    {
      title: "Arthritis Management",
      image: "/treatments/ArthritisManagement.png",
    },
    {
      title: "Shoulder & Neck Pain",
      image: "/treatments/Shoulder&NeckPain.png",
    },
    {
      title: "Sports Injury & Muscle Sprain",
      image: "/treatments/SportsInjury&MuscleSprain.png",
    },
  ]

  const orderedCards = [
    ...treatmentCards.slice(activeTreatment),
    ...treatmentCards.slice(0, activeTreatment),
  ]

  const layers = [
    { x: "-6%", y: "-6%", scale: 1.05, blur: "0px", bright: "100%", opacity: 1, z: 30 },
    { x: "8%", y: "4%", scale: 0.96, blur: "1px", bright: "85%", opacity: 0.85, z: 20 },
    { x: "18%", y: "8%", scale: 0.9, blur: "2px", bright: "70%", opacity: 0.7, z: 10 },
  ]

  return (
    <section id="treatments" className="section reveal bg-[#FDFEFF] w-full py-[50px] md:py-[40px] scroll-mt-[70px] px-5 md:px-[5%]">
      <div className="container max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <p className="text-xs font-semibold tracking-[1.2px] text-[#6b7c93] uppercase mb-2">TREATMENTS</p>
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#0a65d9] leading-[1.2] mb-6 md:mb-8 mt-0">
            Orthopedic Services We Provide
          </h2>

          {/* Tab Buttons */}
          <div className="flex flex-row gap-4 md:gap-6 items-center mb-6 md:mb-8 w-fit">
            <div className="info-item flex items-center gap-2.5 md:gap-3.5">
              <img 
                src="/icon location-light.svg" 
                alt="Treatment icon" 
                className="w-6 h-6 shrink-0"
              />
              <div>
                <div className="label text-[13px] font-normal leading-[1.3] text-[#666]">Treatment</div>
              </div>
            </div>
            <div className="divider w-px h-8 md:h-10 bg-[#e0e8f2] shrink-0"></div>
            <div className="info-item flex items-center gap-2.5 md:gap-3.5">
              <img 
                src="/mdi_clock-outline.svg" 
                alt="Process icon" 
                className="w-6 h-6 shrink-0"
              />
              <div>
                <div className="label text-[13px] font-normal leading-[1.3] text-[#666]">Process</div>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Tab Content */}
        <div className="treatments-grid grid grid-cols-1 md:grid-cols-[360px_1fr] gap-7 items-start">
            {/* Left Side - Treatment List */}
            <div className="treatments-left">
              <ul className="treatment-list list-none p-0 m-0 mb-3 rounded-xl overflow-hidden bg-white shadow-[0_4px_12px_rgba(18,52,91,0.06)]">
                {treatments.map((treatment, idx) => (
                  <li
                    key={idx}
                    className={`px-4 py-3.5 border-l-4 border-b border-[rgba(18,52,91,0.04)] bg-white cursor-pointer transition-all ${
                      activeTreatment === idx
                        ? 'border-l-[#0a65d9] bg-[#f6fbff] font-bold text-[#12345b]'
                        : 'border-l-transparent text-[#5f7f9f] hover:border-l-[#0a65d9] hover:bg-[#f6fbff] hover:text-[#0a65d9]'
                    }`}
                    onClick={() => setActiveTreatment(idx)}
                  >
                    {treatment}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Treatment Cards */}
            <div className="treatments-right">
              <div className="relative w-full min-h-[260px] flex items-center">
                <div className="relative flex w-full justify-start gap-5 md:gap-7">
                  {orderedCards.slice(0, 3).map((card, layerIdx) => {
                    const originalIdx = treatmentCards.findIndex(c => c.title === card.title)
                    const layer = layers[layerIdx] || layers[layers.length - 1]
                    const isFront = layerIdx === 0
                    return (
                      <motion.article
                        key={card.title}
                        onClick={() => setActiveTreatment(originalIdx)}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: layer.opacity,
                          x: layer.x,
                          y: layer.y,
                          scale: layer.scale,
                        }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative rounded-[18px] overflow-hidden cursor-pointer transition-all duration-400"
                        style={{ zIndex: layer.z }}
                      >
                        <div
                          className={`relative w-[240px] h-[200px] md:w-[280px] md:h-[230px] overflow-hidden rounded-[18px] border ${
                            isFront ? "border-[#2b76e5]" : "border-[#d0e0ff]"
                          } shadow-[0_16px_40px_rgba(12,60,120,0.18)] bg-white transition-all duration-400`}
                          style={{
                            filter: `blur(${layer.blur}) brightness(${layer.bright})`,
                            transition: "filter 0.45s ease, transform 0.45s ease",
                          }}
                        >
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className={`object-cover transition-all duration-500 ${
                              isFront ? "scale-[1.02]" : ""
                            }`}
                            loading="lazy"
                          />
                        </div>
                        <div className={`p-3.5 text-center bg-white rounded-[16px] mt-3 shadow-[0_10px_24px_rgba(12,60,120,0.12)] border ${isFront ? "border-[#2b76e5]" : "border-[#e3edff]"}`}>
                          <h4
                            className={`text-[15px] font-semibold transition-all duration-300 ${
                              isFront ? "text-[#0a65d9]" : "text-[#6c7fa3]"
                            }`}
                          >
                            {card.title}
                          </h4>
                        </div>
                      </motion.article>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}