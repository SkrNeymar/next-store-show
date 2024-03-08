import React from "react"
import { Popover } from "@headlessui/react"
import Link from "next/link"

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button
      as={Link}
      href={href}
      className="block w-full p-2 rounded-lg hover:bg-slate-700 hover:text-white"
    >
      {children}
    </Popover.Button>
  )
}

export default MobileNavLink
