import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'

const VALUES = [
  { title: 'Accuracy first',   desc: 'Every prediction matters. We optimized relentlessly for the highest possible validation accuracy.' },
  { title: 'Built for real use', desc: 'Not just a research demo — this tool is designed to be fast, accessible, and genuinely useful.' },
  { title: 'Open learning',    desc: 'This project is part of an academic journey. We believe knowledge should be shared openly.' },
]

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full bg-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)', letterSpacing: '0.15em' }}
            >
              About
            </p>
            <h1
              className="text-5xl sm:text-6xl font-normal"
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-2px',
                lineHeight: 0.95,
              }}
            >
              We believe plants
              <br />
              <em style={{ color: '#6F6F6F' }}>deserve to be known.</em>
            </h1>
          </div>
          <div className="flex flex-col justify-end">
            <p
              className="text-base leading-relaxed"
              style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
            >
              Aethera is a plant intelligence platform built as part of an Image Processing
              (Pengolahan Citra) final project. Our goal is to make plant identification
              accessible to everyone — from botanists to farmers to curious minds.
            </p>
            <p
              className="text-base leading-relaxed mt-4"
              style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
            >
              Using deep learning and transfer learning on the PlantVillage dataset,
              we trained a model capable of identifying 38 plant classes and detecting
              common diseases with over 95% accuracy.
            </p>
          </div>
        </div>

        <div
          className="h-px w-full mb-24"
          style={{ background: 'rgba(0,0,0,0.06)' }}
        />

        <div>
          <p
            className="text-xs tracking-widest uppercase mb-12"
            style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)', letterSpacing: '0.15em' }}
          >
            Our values
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {VALUES.map(({ title, desc }) => (
              <div key={title}>
                <h3
                  className="text-xl font-normal mb-3"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.5px' }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}