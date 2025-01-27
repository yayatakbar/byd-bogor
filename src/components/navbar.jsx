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
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      <PlusGridItem className="relative flex">
        <div className="relative group">
          <div
            className="flex items-center px-4 py-3 text-base font-medium bg-blend-multiply text-white group-hover:bg-white/[2.5%]"
          >
            Model
            <ChevronDownIcon className="ml-1 size-4 fill-white/60" />
          </div>

          <div
            className="absolute z-50 hidden w-52 origin-top-right rounded-xl border border-white/5 bg-white/20 p-1 text-sm/6 text-white focus:outline-none group-hover:block"
          >
            <div className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
              <Link href="/byd-m6">BYD M6</Link>
            </div>
            <div className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
              <Link href="/byd-atto-3">BYD ATTO 3</Link>
            </div>
            <div className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
              <Link href="/byd-seal">BYD SEAL</Link>
            </div>
            <div className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
              <Link href="/byd-dolphin">BYD DOLPHIN</Link>
            </div>
          </div>
        </div>
      </PlusGridItem>
    </nav>
  );
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex items-center px-4 py-3 text-base font-medium bg-blend-multiply text-white data-[hover]:bg-white/[2.5%] lg:hidden"
      aria-label="Open main menu"
    >
      <span>Model</span>
      <ChevronDownIcon className="ml-1 size-4 fill-white" />
    </DisclosureButton>
  );
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden relative">
      <div className="absolute top-full mt-1 w-52 bg-white/10 rounded-lg border border-white/10 p-2 right-0">
        <Link
          href="/byd-m6"
          className="block px-3 py-2 text-sm text-white rounded-md hover:bg-white/20"
        >
          BYD M6
        </Link>
        <Link
          href="/byd-atto-3"
          className="block px-3 py-2 text-sm text-white rounded-md hover:bg-white/20"
        >
          BYD Atto 3
        </Link>
        <Link
          href="/byd-seal"
          className="block px-3 py-2 text-sm text-white rounded-md hover:bg-white/20"
        >
          BYD Seal
        </Link>
        <Link
          href="/byd-dolphin"
          className="block px-3 py-2 text-sm text-white rounded-md hover:bg-white/20"
        >
          BYD Dolphin
        </Link>
      </div>
    </DisclosurePanel>
  );
}


export function Navbar({ banner }) {
  return (
    <Disclosure as="header" className="relative z-50 pt-6 sm:pt-8">
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
  );
}
