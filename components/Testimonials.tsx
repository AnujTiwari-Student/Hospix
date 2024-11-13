'use client'

import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

function Testimonials() {

    const testimonials = [
        {
          name: "John Doe",
          title: "Healthcare Professional",
          quote: "Bharat Health has transformed the way we manage patient data. The platform is intuitive and helps streamline our workflow. Highly recommend it!",
          image: "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg",
        },
        {
          name: "Jane Smith",
          title: "Nurse Practitioner",
          quote: "As a nurse, I need quick and easy access to patient info. Bharat Health makes it seamless and efficient, saving me valuable time every day.",
          image: "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg",
        },
        {
          name: "Michael Brown",
          title: "Hospital Administrator",
          quote: "The integration of Bharat Health into our hospital systems has been a game-changer. Its user-friendly and allows our staff to focus on what truly matters.",
          image: "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg",
        },
        {
          name: "Samantha Lee",
          title: "Medical Researcher",
          quote: "I can access a wealth of patient data for my research at the click of a button. Bharat Health helps me uncover insights faster than ever before.",
          image: "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg",
        },
        {
          name: "David Wilson",
          title: "Clinic Owner",
          quote: "Our clinics operations have become more efficient and organized thanks to Bharat Health. It simplifies patient management and increases our productivity.",
          image: "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg",
        },
        {
          name: "Emily Clark",
          title: "Physician",
          quote: "Bharat Health allows me to provide better care by ensuring I have all the necessary information about my patients, right when I need it.",
          image: "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg",
        },
      ]

  return (
    <div className='w-full px-4 md:px-8 xl:px-16'>
       <h2 className="text-xl lg:text-xl mb-8">Testimoials</h2>
       <InfiniteMovingCards items={testimonials} direction='right' pauseOnHover={true} speed='slow' /> 
    </div>
  )
}

export default Testimonials
