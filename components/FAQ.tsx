'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react' 

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "What is Hospix?",
      answer:
        "Hospix is an innovative healthcare management platform designed to streamline patient data, improve workflow efficiency, and enhance communication across medical facilities.",
    },
    {
      question: "How does Hospix improve patient care?",
      answer:
        "Hospix provides healthcare professionals with easy access to comprehensive patient information, enabling them to make more informed decisions, resulting in better patient care.",
    },
    {
      question: "Is Hospix secure for storing patient data?",
      answer:
        "Yes, Hospix employs state-of-the-art encryption and security protocols to ensure that all patient data is stored and transmitted securely, following healthcare industry standards.",
    },
    {
      question: "Can Hospix integrate with other healthcare systems?",
      answer:
        "Absolutely! Hospix is designed to integrate seamlessly with other healthcare systems, ensuring smooth data exchange and reducing manual data entry.",
    },
    {
      question: "How can I get started with Hospix?",
      answer:
        "Getting started with Hospix is easy. Simply sign up for a free demo on our website or contact our sales team for personalized onboarding support.",
    },
  ]

  const toggleFAQ = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index) // Toggle the active FAQ
  }

  return (
    <div className="w-full px-4 md:px-8 xl:px-24 py-12">
      <h2 className="text-3xl lg:text-4xl mb-12">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left py-4 px-6 text-lg font-semibold dark:bg-neutral-800 rounded-lg focus:outline-none flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {/* Arrow Icon */}
              {activeIndex === index ? (
                <ChevronUp className="text-teal-600 dark:text-teal-300" />
              ) : (
                <ChevronDown className="text-teal-600 dark:text-teal-300" />
              )}
            </button>
            {activeIndex === index && (
              <div className="py-4 px-6 text-sm text-neutral-600 dark:text-neutral-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
