"use client";

import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "When should I visit an orthopedic doctor for pain?",
      answer:
        "You should consult an orthopedic doctor immediately after any accident, fall, or sudden injury. The initial hours of treatment are very important in the case of fractures or minor injuries.",
    },
    {
      question: "Can long-term knee pain be cured?",
      answer:
        "Long-term knee pain is usually caused by osteoarthritis. Lifestyle modifications and proper medication can help manage the condition and slow its progression before it causes severe damage.",
    },
    {
      question: "Is back pain due to posture treatable?",
      answer:
        "Yes, back pain caused by poor posture is treatable, especially when identified early. However, chronic postural back pain can become difficult to manage if treatment is delayed.",
    },
    {
      question: "Do you treat senior citizens & arthritis patients?",
      answer:
        "Yes, we treat patients of all age groups, including senior citizens and those with any stage of arthritis.",
    },
    {
      question: "Can I avoid surgery with early treatment?",
      answer:
        "It depends on your specific condition. In many cases, early treatment with medications and physiotherapy can delay or even prevent the need for surgery.",
    },
    {
      question: "Do you offer emergency fracture treatment?",
      answer: "Yes, we provide emergency fracture treatment to the best of our ability.",
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-[#f5faff] px-5 sm:px-6 md:px-[5%] scroll-mt-[70px]">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-[#0a65d9] text-xs sm:text-sm font-semibold mb-3 sm:mb-4 uppercase tracking-wide">FAQ</p>

        <h2 className="text-[32px] sm:text-[36px] md:text-4xl font-bold text-[#0a65d9] leading-tight mb-10 sm:mb-12 md:mb-10 text-left">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-xl sm:rounded-2xl border-2 border-[#d8e7ff] transition-all ${
                openIndex === idx ? "bg-white shadow-[0_8px_24px_rgba(10,101,217,0.12)] border-[#0a65d9]" : "bg-white hover:border-[#a8c8ff]"
              }`}
            >
              <button
                className="w-full text-left px-5 py-5 sm:px-6 sm:py-5 flex justify-between items-start gap-4 active:scale-[0.99] min-h-[64px]"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="text-[#12345b] font-semibold text-base sm:text-base md:text-lg leading-relaxed flex-1">
                  {faq.question}
                </span>

                <span className={`text-[#0a65d9] text-2xl sm:text-2xl font-bold shrink-0 transition-transform duration-200 min-w-[32px] flex items-center justify-center ${openIndex === idx ? 'rotate-0' : ''}`}>
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-5 text-base sm:text-base text-[#567189] leading-relaxed border-t border-[#e0e8f2] mt-0 pt-5">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
