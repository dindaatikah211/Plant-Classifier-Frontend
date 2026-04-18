import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative z-10 w-full px-6 py-40 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">

        <p
          className="text-xs tracking-widest uppercase mb-6"
          style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)', letterSpacing: '0.15em' }}
        >
          Ready?
        </p>

        <h2
          className="text-5xl sm:text-7xl font-normal mb-8"
          style={{
            fontFamily: 'var(--font-display)',
            letterSpacing: '-2px',
            lineHeight: 0.95,
            color: '#000',
          }}
        >
          Start identifying
          <br />
          <em style={{ color: '#6F6F6F' }}>your plants today.</em>
        </h2>

        <p
          className="text-base max-w-md mx-auto mb-12 leading-relaxed"
          style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
        >
          No account needed. Just a photo of a leaf and our AI takes care of the rest.
        </p>

        <Link
          href="/classify"
          className="inline-flex items-center gap-2 rounded-full px-10 py-4 text-sm bg-black text-white transition-transform duration-200 hover:scale-[1.03]"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Identify a Plant
          <ArrowRight size={14} />
        </Link>

      </div>

      {/* Decorative botanical text */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-center select-none pointer-events-none whitespace-nowrap"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(80px, 15vw, 180px)',
          color: 'rgba(0,0,0,0.03)',
          letterSpacing: '-4px',
          lineHeight: 1,
        }}
      >
        Botanica
      </div>
    </section>
  )
}