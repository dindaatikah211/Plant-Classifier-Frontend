'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { CheckCircle, AlertTriangle, ArrowLeft, Trophy } from 'lucide-react'

interface Prediction {
  class: string
  confidence: number
}

interface Result {
  predicted_class: string
  confidence: number
  top3: Prediction[]
  preview: string
}

function formatClassName(name: string): string {
  return name.replace(/___/g, ' — ').replace(/_/g, ' ')
}

function getInitialResult(): Result | null {
  const raw = sessionStorage.getItem('result')
  if (!raw) return null
  try { return JSON.parse(raw) as Result } catch { return null }
}

function ConfidenceBar({ value }: { value: number }) {
  return (
    <div className="w-full bg-black/5 rounded-full h-px mt-1.5">
      <div
        className="bg-black h-px rounded-full transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

const MEDAL_ICONS = [
  <Trophy key={0} size={13} />,
  <span key={1} className="text-xs">2</span>,
  <span key={2} className="text-xs">3</span>,
]

export default function ResultContent() {
  const [result] = useState<Result | null>(getInitialResult)
  const router   = useRouter()

  if (!result) {
    router.push('/classify')
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}>
          Mengalihkan...
        </p>
      </div>
    )
  }

  const isHealthy = result.predicted_class.toLowerCase().includes('healthy')

  return (
    <div className="relative min-h-screen w-full bg-white">

      <main className="flex flex-col items-center px-6 py-16">

        {/* Title */}
        <div className="text-center mb-10 animate-fade-rise">
          <h1
            className="text-4xl sm:text-5xl font-normal mb-3"
            style={{
              fontFamily: 'var(--font-display)',
              letterSpacing: '-1.5px',
              lineHeight: 1.0,
            }}
          >
            {isHealthy ? (
              <><em style={{ color: '#6F6F6F' }}>Healthy</em> plant found.</>
            ) : (
              <>Disease <em style={{ color: '#6F6F6F' }}>detected.</em></>
            )}
          </h1>
          <p className="text-sm" style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}>
            Here&apos;s what our model found
          </p>
        </div>

        <div className="w-full max-w-md space-y-4 animate-fade-rise-delay">

          {/* Image */}
          <div className="relative w-full h-52 rounded-2xl overflow-hidden border border-black/5">
            <Image
              src={result.preview}
              alt="uploaded"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Main result */}
          <div className="rounded-2xl p-5 border border-black/5 bg-black/[0.02]">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-black">
                {isHealthy
                  ? <CheckCircle size={16} />
                  : <AlertTriangle size={16} />
                }
              </div>
              <div className="flex-1">
                <p className="text-xs mb-1"
                  style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}>
                  {isHealthy ? 'Identified as' : 'Disease detected'}
                </p>
                <p className="text-base font-medium mb-3"
                  style={{
                    color: '#000000',
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                  }}>
                  {formatClassName(result.predicted_class)}
                </p>
                <div className="flex items-center gap-3">
                  <ConfidenceBar value={result.confidence} />
                  <span className="text-sm tabular-nums min-w-fit"
                    style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}>
                    {result.confidence}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Top 3 */}
          <div className="rounded-2xl p-5 border border-black/5">
            <p className="text-xs mb-4"
              style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}>
              Other possibilities
            </p>
            <div className="space-y-4">
              {result.top3.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span style={{ color: '#6F6F6F' }}>{MEDAL_ICONS[i]}</span>
                      <span className="text-sm"
                        style={{
                          color: i === 0 ? '#000000' : '#6F6F6F',
                          fontFamily: 'var(--font-body)',
                        }}>
                        {formatClassName(item.class)}
                      </span>
                    </div>
                    <span className="text-sm tabular-nums"
                      style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}>
                      {item.confidence}%
                    </span>
                  </div>
                  <ConfidenceBar value={item.confidence} />
                </div>
              ))}
            </div>
          </div>

          {/* Back */}
          <button
            onClick={() => router.push('/classify')}
            className="w-full flex items-center justify-center gap-2 py-3 text-sm rounded-xl border border-black/10 transition-all duration-200 hover:border-black/30 hover:bg-black/[0.02]"
            style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
          >
            <ArrowLeft size={14} />
            Try another image
          </button>

        </div>
      </main>
    </div>
  )
}