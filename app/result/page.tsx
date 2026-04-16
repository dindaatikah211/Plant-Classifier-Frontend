'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

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

function ConfidenceBar({ value }: { value: number }) {
  return (
    <div className="w-full bg-gray-100 rounded-full h-1.5">
      <div
        className="bg-green-500 h-1.5 rounded-full transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}

export default function Result() {
  const [result, setResult] = useState<Result | null>(null)
  const [ready, setReady]   = useState(false)
  const router = useRouter()

  useEffect(() => {
    const raw = sessionStorage.getItem('result')
    if (!raw) {
      router.push('/')
      return
    }
    const parsed: Result = JSON.parse(raw)
    setResult(parsed)
    setReady(true)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!ready || !result) return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
      <p className="text-gray-400">Memuat hasil...</p>
    </main>
  )

  const isHealthy = result.predicted_class.toLowerCase().includes('healthy')

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">

        {/* Header */}
        <h1 className="text-2xl font-semibold text-green-800 mb-6">
          🔬 Hasil Identifikasi
        </h1>

        {/* Gambar */}
        <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden">
          <Image
            src={result.preview}
            alt="uploaded"
            fill
            className="object-cover"
            unoptimized // perlu ini karena src dari blob URL (lokal)
          />
        </div>

        {/* Hasil utama */}
        <div className={`rounded-2xl p-4 mb-4 ${isHealthy ? 'bg-green-50' : 'bg-red-50'}`}>
          <p className="text-xs text-gray-400 mb-1">Terdeteksi sebagai</p>
          <p className={`text-lg font-semibold ${isHealthy ? 'text-green-800' : 'text-red-700'}`}>
            {formatClassName(result.predicted_class)}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <ConfidenceBar value={result.confidence} />
            <span className="text-sm text-gray-500 min-w-fit">
              {result.confidence}%
            </span>
          </div>
          <p className="text-xs mt-2">
            {isHealthy
              ? '✅ Tanaman terlihat sehat'
              : '⚠️ Terdeteksi kemungkinan penyakit'}
          </p>
        </div>

        {/* Top 3 */}
        <div className="mb-6">
          <p className="text-xs text-gray-400 mb-3">Kemungkinan lainnya</p>
          <div className="flex flex-col gap-3">
            {result.top3.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">
                    {i === 0 && '🥇 '}
                    {i === 1 && '🥈 '}
                    {i === 2 && '🥉 '}
                    {formatClassName(item.class)}
                  </span>
                  <span className="text-gray-400">{item.confidence}%</span>
                </div>
                <ConfidenceBar value={item.confidence} />
              </div>
            ))}
          </div>
        </div>

        {/* Tombol kembali */}
        <button
          onClick={() => router.push('/')}
          className="w-full border border-green-500 text-green-700 font-medium py-3 rounded-xl hover:bg-green-50 transition-all"
        >
          ← Coba gambar lain
        </button>
      </div>
    </main>
  )
}