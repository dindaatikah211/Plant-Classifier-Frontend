'use client'
import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
// import { Github, Mail, Instagram } from 'lucide-react'

// const SOCIALS = [
//   { icon: Github,    label: 'GitHub',    href: 'https://github.com', sub: '@username'        },
//   { icon: Mail,      label: 'Email',     href: 'mailto:hello@aethera.com', sub: 'hello@aethera.com' },
//   { icon: Instagram, label: 'Instagram', href: 'https://instagram.com', sub: '@aethera'       },
// ]

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full bg-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)', letterSpacing: '0.15em' }}
            >
              Reach Us
            </p>
            <h1
              className="text-5xl sm:text-6xl font-normal"
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-2px',
                lineHeight: 0.95,
              }}
            >
              Let&apos;s talk{' '}
              <em style={{ color: '#6F6F6F' }}>plants.</em>
            </h1>
            <p
              className="text-base leading-relaxed mt-8 max-w-sm"
              style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
            >
              Have questions about the model, want to collaborate,
              or just curious about plant AI? We&apos;d love to hear from you.
            </p>

            {/* <div className="flex flex-col gap-4 mt-12">
              {SOCIALS.map(({ icon: Icon, label, href, sub }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors group-hover:border-black"
                    style={{ borderColor: 'rgba(0,0,0,0.08)' }}
                  >
                    <Icon size={14} color="#000" />
                  </div>
                  <div>
                    <p
                      className="text-sm font-medium"
                      style={{ fontFamily: 'var(--font-body)', color: '#000' }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-xs"
                      style={{ fontFamily: 'var(--font-body)', color: '#6F6F6F' }}
                    >
                      {sub}
                    </p>
                  </div>
                </a>
              ))}
            </div> */}
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label
                  className="text-xs"
                  style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
                >
                  First name
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="w-full px-4 py-3 text-sm rounded-xl border outline-none transition-colors focus:border-black/30"
                  style={{
                    borderColor: 'rgba(0,0,0,0.1)',
                    fontFamily: 'var(--font-body)',
                    color: '#000',
                    background: 'transparent',
                  }}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  className="text-xs"
                  style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
                >
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-4 py-3 text-sm rounded-xl border outline-none transition-colors focus:border-black/30"
                  style={{
                    borderColor: 'rgba(0,0,0,0.1)',
                    fontFamily: 'var(--font-body)',
                    color: '#000',
                    background: 'transparent',
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                className="text-xs"
                style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full px-4 py-3 text-sm rounded-xl border outline-none transition-colors focus:border-black/30"
                style={{
                  borderColor: 'rgba(0,0,0,0.1)',
                  fontFamily: 'var(--font-body)',
                  color: '#000',
                  background: 'transparent',
                }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                className="text-xs"
                style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
              >
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your project or question..."
                className="w-full px-4 py-3 text-sm rounded-xl border outline-none transition-colors focus:border-black/30 resize-none"
                style={{
                  borderColor: 'rgba(0,0,0,0.1)',
                  fontFamily: 'var(--font-body)',
                  color: '#000',
                  background: 'transparent',
                }}
              />
            </div>

            <button
              className="w-full py-3 text-sm rounded-xl bg-black text-white transition-transform duration-200 hover:scale-[1.01]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Send message
            </button>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}