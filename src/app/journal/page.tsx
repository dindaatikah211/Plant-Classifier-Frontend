import Navbar from '@/components/landing/Navbar'
import Footer from '@/components/landing/Footer'

const POSTS = [
  {
    date: 'Apr 2026',
    tag: 'Research',
    title: 'Why Transfer Learning Works So Well for Plant Classification',
    desc: 'MobileNetV2 was pre-trained on ImageNet — 14 million images. That head start means our model already understands edges, textures, and shapes before seeing a single leaf.',
    readTime: '4 min read',
  },
  {
    date: 'Apr 2026',
    tag: 'Dataset',
    title: 'Inside the PlantVillage Dataset: 87,000 Leaves and What We Learned',
    desc: 'PlantVillage is the backbone of our model. We explore the 38 classes, the augmentation strategy, and how class imbalance affects model confidence.',
    readTime: '6 min read',
  },
  {
    date: 'Mar 2026',
    tag: 'Technical',
    title: 'From Colab to Flask: Deploying a Keras Model as a REST API',
    desc: 'Training in the cloud, serving locally. A practical walkthrough of exporting .h5 models and wrapping them in a Flask API that Next.js can call.',
    readTime: '5 min read',
  },
]

export default function JournalPage() {
  return (
    <div className="relative min-h-screen w-full bg-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-24">

        <div className="mb-20">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)', letterSpacing: '0.15em' }}
          >
            Journal
          </p>
          <h1
            className="text-5xl sm:text-6xl font-normal max-w-xl"
            style={{
              fontFamily: 'var(--font-display)',
              letterSpacing: '-2px',
              lineHeight: 0.95,
            }}
          >
            Notes on building{' '}
            <em style={{ color: '#6F6F6F' }}>plant AI.</em>
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-px" style={{ background: 'rgba(0,0,0,0.06)' }}>
          {POSTS.map(({ date, tag, title, desc, readTime }) => (
            <div
              key={title}
              className="group flex flex-col sm:flex-row gap-8 p-10 bg-white transition-colors cursor-pointer hover:bg-stone-50"
            >
              <div className="flex-shrink-0 w-24">
                <span
                  className="text-xs"
                  style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
                >
                  {date}
                </span>
              </div>
              <div className="flex-1">
                <span
                  className="text-xs tracking-widest uppercase mb-3 inline-block"
                  style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)', letterSpacing: '0.12em' }}
                >
                  {tag}
                </span>
                <h2
                  className="text-2xl font-normal mb-3 transition-colors group-hover:text-stone-700"
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.5px' }}
                >
                  {title}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-4 max-w-xl"
                  style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
                >
                  {desc}
                </p>
                <span
                  className="text-xs"
                  style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)', opacity: 0.6 }}
                >
                  {readTime}
                </span>
              </div>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  )
}