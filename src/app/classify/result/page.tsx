'use client'
import dynamic from 'next/dynamic'

const ResultContent = dynamic(() => import('@/components/result/ResultContent'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <p style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}>
        Memuat hasil...
      </p>
    </div>
  ),
})

export default function ResultPage() {
  return <ResultContent />
}