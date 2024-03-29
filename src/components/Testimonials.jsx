import React from "react"
import Image from "next/image"
import Container from "@/components/Container"

import avatarImage1 from "@/images/avatars/avatar-1.png"
import avatarImage2 from "@/images/avatars/avatar-2.png"
import avatarImage3 from "@/images/avatars/avatar-3.png"
import avatarImage4 from "@/images/avatars/avatar-4.png"
import avatarImage5 from "@/images/avatars/avatar-5.png"

const testimonials = [
  [
    {
      content:
        "Since using this platform, managing my multiple online stores has become a breeze. The dashboard is intuitive and the scalability is just outstanding.",
      author: {
        name: "Jordan Smith",
        role: "CEO at Smith Retail Group",
        image: avatarImage1,
      },
    },
    {
      content:
        "I love the API integration! It allows for such flexibility in customizing each of my stores. Definitely a game changer for my business.",
      author: {
        name: "Alexa Martinez",
        role: "Tech Lead at Innovative Solutions",
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        "Product management used to be a nightmare. This platform has simplified it in ways I never thought possible. It's efficient and easy to use.",
      author: {
        name: "Liam Chen",
        role: "Operations Manager at Everyday Essentials",
        image: avatarImage3,
      },
    },
    {
      content:
        "The sales reporting feature is just what I needed. It helps me track and analyze my sales data effortlessly, making strategic decisions easier.",
      author: {
        name: "Sophia Johnson",
        role: "Director at Johnson & Co.",
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        "The user interface is so sleek and responsive, it makes every task feel smooth. My team and I are very impressed with the overall UX design.",
      author: {
        name: "Ethan Turner",
        role: "Founder of Turner Tech",
        image: avatarImage5,
      },
    },
    {
      content:
        "Handling multiple e-commerce stores has never been this straightforward. This platform's scalability and ease of use are top-notch.",
      author: {
        name: "Olivia Brown",
        role: "Managing Director at Brown's Boutiques",
        image: avatarImage2,
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-20 bg-slate-50 sm:py-32"
    >
      <Container>
        <div className="max-w-2xl mx-auto md:text-center">
          <h2 className="text-3xl tracking-tight font-display text-slate-900 sm:text-4xl">
            Loved by businesses worldwide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>

        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-16 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((testimonialGroup, testimonialGroupIndex) => (
            <li key={testimonialGroupIndex}>
              <ul role="list" className="flex flex-col gap-6 sm:gap-y-8">
                {testimonialGroup.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative p-6 overflow-hidden bg-white shadow-xl rounded-2xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                        <div>
                          <div className="text-base font-display text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <Image
                          className="object-cover overflow-hidden rounded-full h-14 w-14 bg-slate-50"
                          src={testimonial.author.image}
                          alt=""
                          width={56}
                          height={56}
                        />
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default Testimonials
