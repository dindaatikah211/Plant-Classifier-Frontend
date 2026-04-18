import Link from 'next/link'

const LINKS = [
  { label: 'Home',     href: '/'        },
  { label: 'Studio',   href: '/studio'  },
  { label: 'About',    href: '/about'   },
  { label: 'Journal',  href: '/journal' },
  { label: 'Reach Us', href: '/contact' },
  { label: 'Classify', href: '/classify'},
]

export default function Footer() {
  return (
    <footer
      className="relative z-10 w-full px-8 py-12 border-t"
      style={{ borderColor: 'rgba(0,0,0,0.06)', background: '#FAFAF8' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        <Link
          href="/"
          className="text-xl tracking-tight text-black select-none"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Aethera<sup className="text-xs align-super">®</sup>
        </Link>

        <ul className="flex flex-wrap items-center justify-center gap-6">
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-xs transition-colors hover:text-black"
                style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <p
          className="text-xs"
          style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
        >
          © {new Date().getFullYear()} Aethera
        </p>

      </div>
    </footer>
  )
}