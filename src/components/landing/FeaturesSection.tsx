import { Leaf, Zap, ShieldCheck, FlaskConical } from 'lucide-react'

const FEATURES = [
  {
    icon: Leaf,
    title: 'Species Identification',
    desc: 'Recognize 38 plant species from a single leaf photo with high accuracy.',
  },
  {
    icon: ShieldCheck,
    title: 'Disease Detection',
    desc: 'Spot early signs of plant disease before they spread — protecting your crops.',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    desc: 'Get predictions in seconds, powered by MobileNetV2 transfer learning.',
  },
  {
    icon: FlaskConical,
    title: 'Research-Grade Model',
    desc: 'Trained on 87,000+ images from the PlantVillage dataset. Built for accuracy.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="relative z-10 w-full px-6 py-32"
      style={{ background: '#FAFAF8' }}>
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)', letterSpacing: '0.15em' }}
          >
            What we offer
          </p>
          <h2
            className="text-4xl sm:text-5xl font-normal max-w-lg"
            style={{
              fontFamily: 'var(--font-display)',
              letterSpacing: '-1.5px',
              lineHeight: 1.05,
            }}
          >
            Everything you need to{' '}
            <em style={{ color: '#6F6F6F' }}>understand plants.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: 'rgba(0,0,0,0.06)' }}>
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col gap-4 p-8"
              style={{ background: '#FAFAF8' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(0,0,0,0.05)' }}
              >
                <Icon size={16} color="#000" />
              </div>
              <h3
                className="text-base font-medium"
                style={{ fontFamily: 'var(--font-body)', color: '#000' }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', color: '#6F6F6F' }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}