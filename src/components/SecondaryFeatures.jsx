import React, { useId } from "react"
import Image from "next/image"
import { Tab } from "@headlessui/react"
import clsx from "clsx"

import Container from "@/components/Container"
import screenshotPayment from "@/images/screenshots/payment.png"
import screenshotInventory from "@/images/screenshots/variant.png"
import screenshotNewStore from "@/images/screenshots/newstore.png"

const features = [
  {
    name: "Payment Processing",
    summary:
      "Process and track all payment transactions for financial transparency.",
    description:
      "Build-in Stripe integration allows you to accept payments from all major credit cards and digital wallets.",
    image: screenshotPayment,
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    },
  },
  {
    name: "Inventory Tracking",
    summary:
      " Accurately track inventory status to maintain a healthy stock level.",
    description:
      "Our system simplifies inventory management. While it lacks complex automation, it ensures accuracy and ease of use.",
    image: screenshotInventory,
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      )
    },
  },
  {
    name: "Scalability",
    summary:
      "Effortlessly scale and manage multiple stores through a single dashboard.",
    description:
      "Our platform is designed for growth. Manage various stores, all from one central location. This feature is perfect for businesses looking to expand their reach without the complexity of handling multiple systems.",
    image: screenshotNewStore,
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      )
    },
  },
]

function FeaturesHeader({ feature, isActive, className, ...props }) {
  return (
    <section
      className={clsx(className, !isActive && "opacity-75 hover:opacity-100")}
      {...props}
    >
      {/* Icon */}
      <div
        className={clsx(
          "w-9 rounded-lg",
          isActive ? "bg-blue-600" : "bg-slate-500"
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      {/* Title */}
      <h3
        className={clsx(
          "mt-6 text-sm font-medium",
          isActive ? "text-blue-600" : "text-slate-600"
        )}
      >
        {feature.name}
      </h3>
      {/* Summary */}
      <p className="mt-2 text-xl font-display text-slate-900">
        {feature.summary}
      </p>
      {/* Description */}
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </section>
  )
}

function FeatureMobile() {
  return (
    <div className="flex flex-col px-4 mt-20 -mx-4 overflow-hidden gap-y-10 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature, featureIndex) => (
        <div key={featureIndex}>
          <FeaturesHeader
            feature={feature}
            className="max-w-2xl mx-auto"
            isActive={true}
          />
          <div className="relative pb-10 mt-10">
            <div className="absolute bottom-0 -inset-x-4 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeatureDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:block lg:mt-20">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <FeaturesHeader
                key={featureIndex}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={selectedIndex === featureIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative py-16 mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 xl:px-16">
            <div className="flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={featureIndex}
                  className={clsx(
                    "px-5 transition duration-500 ease-in-out focus:outline-none",
                    featureIndex !== selectedIndex && "opacity-60"
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      size="52.75rem"
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

function SecondaryFeatureHeader() {
  return (
    <div className="max-w-2xl mx-auto md:text-center">
      <h2 className="text-3xl tracking-tight font-display text-slate-900 sm:text-4xl">
        Simplify everyday business tasks.
      </h2>
      <p className="mt-4 text-lg tracking-tight text-slate-700">
        Because you’d probably be a little confused if we suggested you
        complicate your everyday business tasks instead.
      </p>
    </div>
  )
}

const SecondaryFeatures = () => {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <SecondaryFeatureHeader />
        <FeatureMobile />
        <FeatureDesktop />
      </Container>
    </section>
  )
}

export default SecondaryFeatures
