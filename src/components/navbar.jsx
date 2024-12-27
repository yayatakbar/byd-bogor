'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

const links = [{ href: '/blablba', label: 'Blablba' }]

function DesktopNav() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className={`flex items-center px-4 py-3 text-base font-medium bg-blend-multiply ${isHome ? 'text-white data-[hover]:bg-white/[2.5%]' : 'text-gray-950 data-[hover]:bg-black/[2.5%]'}`}
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
      <PlusGridItem className="relative flex">
        <Menu>
          <MenuButton
            className={`flex items-center px-4 py-3 text-base font-medium bg-blend-multiply ${isHome ? 'text-white data-[hover]:bg-white/[2.5%]' : 'text-gray-950 data-[hover]:bg-black/[2.5%]'}`}
          >
            Model
            <ChevronDownIcon
              className={`ml-1 size-4 fill-white/60 ${isHome ? 'fill-white' : 'fill-gray-950'}`}
            />
          </MenuButton>

          <MenuItems
            transition
            anchor="bottom end"
            className={`w-52 origin-top-right rounded-xl border p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 ${isHome ? 'border-white/5 bg-white/20 text-white' : 'data-[closed]:bg-black/[.2]'} `}
          >
            <MenuItem>
              <Link
                href="/byd-sealion-7"
                className={`group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 ${isHome ? 'data-[focus]:bg-white/10' : 'data-[focus]:bg-black/[.1]'}`}
              >
                BYD Sealion 7
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/byd-atto-3"
                className={`group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 ${isHome ? 'data-[focus]:bg-white/10' : 'data-[focus]:bg-black/[.1]'}`}
              >
                BYD Atto 3
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/byd-m6"
                className={`group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 ${isHome ? 'data-[focus]:bg-white/10' : 'data-[focus]:bg-black/[.1]'}`}
              >
                BYD M6
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/byd-seal"
                className={`group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 ${isHome ? 'data-[focus]:bg-white/10' : 'data-[focus]:bg-black/[.1]'}`}
              >
                BYD Seal
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/byd-dolphin"
                className={`group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 ${isHome ? 'data-[focus]:bg-white/10' : 'data-[focus]:bg-black/[.1]'}`}
              >
                BYD Dolphin
              </Link>
            </MenuItem>
          </MenuItems>
        </Menu>
      </PlusGridItem>
    </nav>
  )
}

function MobileNavButton() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <DisclosureButton
      className={`flex size-12 items-center justify-center self-center rounded-lg lg:hidden ${isHome ? 'bg-white data-[hover]:bg-white/90' : 'bg-black/[.2]'} `}
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        <Menu>
          <MenuButton
            className={`flex items-center text-base font-medium ${isHome ? 'text-white' : 'text-gray-950'}`}
          >
            Model
            <ChevronDownIcon
              className={`ml-1 size-4 ${isHome ? 'fill-white/60' : 'text-gray-950'} `}
            />
          </MenuButton>
          <MenuItems
            transition
            anchor="bottom start"
            className={`w-52 origin-top-right rounded-xl border p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 ${isHome ? 'border-white/5 bg-white/20 text-white' : 'data-[closed]:bg-black/[.2]'} `}
          >
            <MenuItem>
              <Link
                href="/byd-sealion-7"
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
              >
                BYD Sealion 7
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/byd-atto-3"
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
              >
                BYD Atto 3
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/byd-m6"
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
              >
                BYD M6
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/byd-m6"
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
              >
                BYD Seal
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="/byd-dolphin"
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
              >
                BYD Dolphin
              </Link>
            </MenuItem>
          </MenuItems>
        </Menu>
        {links.map(({ href, label }) => (
          <motion.div key={href}>
            <Link
              href={href}
              className={`text-base font-medium ${isHome ? 'text-white' : 'text-gray-950'}`}
            >
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div
          className={`absolute inset-x-0 top-0 border-t ${isHome ? 'border-white/5' : 'border-black/[.2]'} `}
        />
        <div
          className={`absolute inset-x-0 top-2 border-t ${isHome ? 'border-white/5' : 'border-black/[.2]'}`}
        />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }) {
  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link href="/" title="Home">
                <Logo className="h-9" />
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  )
}
