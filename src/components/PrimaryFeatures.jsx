import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Tab } from "@headlessui/react"
import clsx from "clsx"

import Container from "@/components/Container"
import backgroundImage from "@/images/background-features.jpg"

import screenshotStorefront from "@/images/screenshots/storefront.png"
import screenshotDashboard from "@/images/screenshots/dashboard.png"
import screenshotApi from "@/images/screenshots/api.png"
import screenshotVariant from "@/images/screenshots/variant.png"

const features = [
  {
    title: "Modern Responsive UI",
    description:
      "A sleek, modern interface that adapts seamlessly to all devices. Our UI ensures an engaging and consistent user experience.",
    image: screenshotStorefront,
  },
  {
    title: "Dashboard",
    description:
      "Comprehensive management of your online store with an at-a-glance data display. ",
    image: screenshotDashboard,
  },
  {
    title: "API Integration",
    description:
      "Generates independent API routes for each store, ensures flexibility and customization capability.",
    image: screenshotApi,
  },
  {
    title: "Product Management",
    description:
      "Effortlessly create, update, and delete products with multiple variants.",
    image: screenshotVariant,
  },
]

const PrimaryFeatures = () => {
  const [tabOrientation, setTabOrientation] = useState("horizontal")

  useEffect(() => {
    //
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)")
    function onMediaQueryChange(e) {
      setTabOrientation(e.matches ? "vertical" : "horizontal")
    }
    onMediaQueryChange(lgMediaQuery)

    lgMediaQuery.addEventListener("change", onMediaQueryChange)
    // Clean up
    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange)
    }
  }, [])
  return (
    <section
      id="features"
      className="relative pt-20 overflow-hidden bg-blue-600 pb-28 sm:py-32"
    >
      <Image
        src={backgroundImage}
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="text-3xl tracking-tight text-white font-display sm:text-4xl md:text-5xl">
            Everything you need to run your business.
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Well everything you need to setup your first online store.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="grid items-center grid-cols-1 pt-10 mt-16 gap-y-2 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === "vertical"}
        >
          {({ selectedIndex }) => (
            <>
              <div className="flex pb-4 -mx-4 overflow-x-auto sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex px-4 gap-x-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className={clsx(
                        "group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6",
                        selectedIndex === featureIndex
                          ? "bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10"
                          : "hover:bg-white/10 lg:hover:bg-white/5"
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            "font-display text-lg [&:not(:focus-visible)]:focus:outline-none",
                            selectedIndex === featureIndex
                              ? "text-blue-600 lg:text-white"
                              : "text-blue-100 hover:text-white lg:text-white"
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          "mt-2 hidden text-sm lg:block",
                          selectedIndex === featureIndex
                            ? "text-white"
                            : "text-blue-100 group-hover:text-white"
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature, featureIndex) => (
                  <Tab.Panel key={featureIndex} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative max-w-2xl mx-auto text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        property="true"
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}

export default PrimaryFeatures
