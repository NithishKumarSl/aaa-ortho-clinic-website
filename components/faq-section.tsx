"use client"

import { useState } from "react"

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "When should I visit an orthopedic doctor for pain?",
      answer: "If pain persists more than a week or limits daily activities, book a consultation for diagnosis.",
    },
    {
      question: "Can long term knee pain be cured?",
      answer: "Many knee problems respond well to targeted treatment and physiotherapy; some degenerative conditions are managed to reduce symptoms.",
    },
    {
      question: "Is back pain due to posture treatable?",
      answer: "Yes — posture-related pain often improves with exercise, postural training and targeted care.",
    },
    {
      question: "Do you treat senior citizens & arthritis patients?",
      answer: "Yes. We offer tailored treatment plans for older patients focused on safety and function.",
    },
    {
      question: "Can I avoid surgery with early treatment?",
      answer: "Many conditions can be treated conservatively if identified early; surgery is recommended only when necessary.",
    },
    {
      question: "Do you offer emergency fracture treatment?",
      answer: "We provide initial fracture care and immobilization; complex cases are referred to specialist centres when required.",
    },
  ]

  return (
    <section id="faq" className="section faq reveal py-16 md:py-20 scroll-mt-[70px]">
      <div className="container max-w-[1200px] mx-auto px-8">
        <p className="sub-title text-sm tracking-[1px] text-[#0f5fcc] mb-2.5 font-medium">FAQ</p>
        <h3 className="section-title text-[36px] md:text-4xl font-bold text-[#0f5fcc] mb-10 leading-[1.2]">
          Orthopedic Services We Provide
        </h3>
        <div className="faq-grid grid grid-cols-1 md:grid-cols-2 gap-3">
          {faqs.map((faq, idx) => (
            <details 
              key={idx} 
              className="faq-item bg-white rounded-[10px] p-3 shadow-[0_4px_12px_rgba(18,52,91,0.06)]"
              open={openIndex === idx}
              onToggle={(e) => {
                setOpenIndex(e.currentTarget.open ? idx : null)
              }}
            >
              <summary className="cursor-pointer font-bold text-[#12345b] list-none">
                {faq.question}
              </summary>
              <p className="mt-2 mb-0 text-[#5f7f9f] leading-[1.5]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <style jsx>{`
        .faq-item summary::-webkit-details-marker {
          display: none;
        }
        .faq-item summary::before {
          content: '+ ';
          font-weight: bold;
          margin-right: 8px;
        }
        .faq-item[open] summary::before {
          content: '− ';
        }
      `}</style>
    </section>
  )
}
