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
    <section className="py-16 md:py-20 bg-[#f5faff] px-5 md:px-[5%]">
      <div className="max-w-[1280px] mx-auto">
        <p className="text-[#0f5fcc] text-sm font-medium mb-2">FAQ</p>

        <h2 className="text-4xl font-bold text-[#0f5fcc] leading-tight mb-10">
          Orthopedic Services We Provide
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-xl border border-[#0f5fcc] transition-all ${
                openIndex === idx ? "bg-white shadow-md" : "bg-transparent"
              }`}
            >
              <button
                className="w-full text-left px-6 py-5 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-[#12345b] font-semibold text-lg">
                  {faq.question}
                </span>

                <span className="text-[#0f5fcc] text-2xl font-bold">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-5 text-[#567189] leading-relaxed">
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
