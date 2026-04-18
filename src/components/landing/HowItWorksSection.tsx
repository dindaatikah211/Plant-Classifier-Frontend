import { ImageUp, Cpu, ScanSearch } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: ImageUp,
    title: 'Upload a leaf photo',
    desc: 'Take a clear photo of any leaf and upload it directly from your device.',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'AI analysis',
    desc: 'Our MobileNetV2 model processes the image and extracts visual features.',
  },
  {
    number: '03',
    icon: ScanSearch,
    title: 'Get your results',
    desc: 'Receive species identification and disease status with confidence scores.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="relative z-10 w-full px-6 py-32 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-4"
              style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)', letterSpacing: '0.15em' }}
            >
              How it works
            </p>
            <h2
              className="text-4xl sm:text-5xl font-normal"
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-1.5px',
                lineHeight: 1.05,
              }}
            >
              Three steps to{' '}
              <em style={{ color: '#6F6F6F' }}>identification.</em>
            </h2>
          </div>
          <p
            className="text-sm max-w-xs"
            style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
          >
            No sign-up required. No complicated setup.
            Just a photo and our model does the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {STEPS.map(({ number, icon: Icon, title, desc }) => (
            <div key={number} className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-full border flex items-center justify-center"
                  style={{ borderColor: 'rgba(0,0,0,0.08)' }}
                >
                  <Icon size={16} color="#000" />
                </div>
                <span
                  className="text-5xl font-normal"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: 'rgba(0,0,0,0.06)',
                    letterSpacing: '-2px',
                  }}
                >
                  {number}
                </span>
              </div>
              <div
                className="h-px w-full"
                style={{ background: 'rgba(0,0,0,0.06)' }}
              />
              <div>
                <h3
                  className="text-base font-medium mb-2"
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
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}