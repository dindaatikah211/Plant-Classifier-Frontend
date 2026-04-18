import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'
import { Microscope, Database, BrainCircuit } from 'lucide-react'

const WORK = [
  {
    tag: 'Deep Learning',
    title: 'MobileNetV2 Transfer Learning',
    desc: 'We fine-tuned a pre-trained MobileNetV2 on the PlantVillage dataset, achieving over 95% validation accuracy across 38 plant classes.',
    icon: BrainCircuit,
  },
  {
    tag: 'Dataset',
    title: 'PlantVillage — 87K Images',
    desc: 'Training used the PlantVillage dataset with augmentation techniques including rotation, zoom, and horizontal flip for robust generalization.',
    icon: Database,
  },
  {
    tag: 'Research',
    title: 'Pengolahan Citra — Tubes',
    desc: 'This project was built as a final project for the Image Processing course, combining academic rigor with real-world applicability.',
    icon: Microscope,
  },
]

export default function StudioPage() {
  return (
    <div className="relative min-h-screen w-full bg-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-24">

        <div className="mb-20">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)', letterSpacing: '0.15em' }}
          >
            Studio
          </p>
          <h1
            className="text-5xl sm:text-7xl font-normal max-w-2xl"
            style={{
              fontFamily: 'var(--font-display)',
              letterSpacing: '-2px',
              lineHeight: 0.95,
            }}
          >
            How we{' '}
            <em style={{ color: '#6F6F6F' }}>built it.</em>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-px" style={{ background: 'rgba(0,0,0,0.06)' }}>
          {WORK.map(({ tag, title, desc, icon: Icon }) => (
            <div
              key={title}
              className="flex flex-col sm:flex-row gap-8 p-10 bg-white"
            >
              <div
                className="w-12 h-12 rounded-full border flex-shrink-0 flex items-center justify-center"
                style={{ borderColor: 'rgba(0,0,0,0.08)' }}
              >
                <Icon size={16} color="#000" />
              </div>
              <div className="flex-1">
                <span
                  className="text-xs tracking-widest uppercase mb-3 inline-block"
                  style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)', letterSpacing: '0.12em' }}
                >
                  {tag}
                </span>
                <h2
                  className="text-2xl font-normal mb-3"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.5px' }}
                >
                  {title}
                </h2>
                <p
                  className="text-sm leading-relaxed max-w-xl"
                  style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
                >
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  )
}