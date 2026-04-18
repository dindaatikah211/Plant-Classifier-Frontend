'use client'
import Link from 'next/link'

const NAV_ITEMS = [
  { label: 'Home',      href: '/',         active: true  },
  { label: 'Studio',    href: '/studio',   active: false },
  { label: 'About',     href: '/about',    active: false },
  { label: 'Journal',   href: '/journal',  active: false },
  { label: 'Reach Us',  href: '/contact',  active: false },
]

export default function Navbar() {
  return (
    <nav className="relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-3xl tracking-tight text-black select-none"
          style={{ fontFamily: 'var(--font-display)' }}>
          Aethera<sup className="text-base align-super">®</sup>
        </Link>

        {/* Nav items */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(({ label, href, active }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm transition-colors duration-200 hover:text-black"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: active ? '#000000' : '#6F6F6F',
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className="text-sm rounded-full px-6 py-2.5 bg-black text-white transition-transform duration-200 hover:scale-[1.03] cursor-pointer"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Begin Journey
        </button>

      </div>
    </nav>
  )
}