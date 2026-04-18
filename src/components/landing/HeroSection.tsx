'use client'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 pb-40"
      style={{ paddingTop: 'calc(8rem - 75px)' }}
    >
      <div
        className="animate-fade-rise inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-8 px-4 py-2 rounded-full border"
        style={{
          color: '#6F6F6F',
          borderColor: 'rgba(0,0,0,0.1)',
          fontFamily: 'var(--font-body)',
          letterSpacing: '0.15em',
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
        AI-Powered Plant Intelligence
      </div>

      <h1
        className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl font-normal max-w-5xl mb-6"
        style={{
          fontFamily: 'var(--font-display)',
          lineHeight: 0.95,
          letterSpacing: '-2.46px',
          color: '#000000',
        }}
      >
        Know your plant,{' '}
        <em style={{ color: '#6F6F6F' }}>know your</em>
        {' '}world.
      </h1>

      <p
        className="animate-fade-rise-delay text-base sm:text-lg max-w-xl mt-4 leading-relaxed"
        style={{ fontFamily: 'var(--font-body)', color: '#6F6F6F' }}
      >
        Upload a leaf photo. Our model identifies the species and detects
        diseases instantly — built for botanists, farmers, and curious minds.
      </p>

      <div className="animate-fade-rise-delay-2 flex items-center gap-4 mt-12">
        <Link
          href="/classify"
          className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm bg-black text-white transition-transform duration-200 hover:scale-[1.03]"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Identify a Plant
          <ArrowRight size={14} />
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-sm transition-colors hover:text-black"
          style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
        >
          Learn more
        </Link>
      </div>
    </section>
  )
}