const STATS = [
  { value: '87K+',  label: 'Training images' },
  { value: '38',    label: 'Plant classes'    },
  { value: '95%+',  label: 'Val accuracy'     },
  { value: '<2s',   label: 'Prediction time'  },
]

export default function StatsSection() {
  return (
    <section
      className="relative z-10 w-full px-6 py-24"
      style={{ background: '#0D0D0B' }}
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: 'rgba(255,255,255,0.06)' }}>
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-16 px-8 text-center gap-3"
              style={{ background: '#0D0D0B' }}
            >
              <span
                className="text-5xl sm:text-6xl font-normal"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: '#F5F0E8',
                  letterSpacing: '-2px',
                  lineHeight: 1,
                }}
              >
                {value}
              </span>
              <span
                className="text-xs tracking-widest uppercase"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'rgba(255,255,255,0.35)',
                  letterSpacing: '0.15em',
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}