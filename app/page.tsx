'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Home() {
  const [image, setImage]   = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState<string | null>(null)
  const router = useRouter()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setImage(file)
    setPreview(URL.createObjectURL(file))
    setError(null)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (!file) return
    setImage(file)
    setPreview(URL.createObjectURL(file))
    setError(null)
  }

  const handleSubmit = async () => {
    if (!image) return setError('Pilih gambar dulu!')
    setLoading(true)
    setError(null)

    const formData = new FormData()
    formData.append('image', image)

    try {
      const res  = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()

      if (data.error) throw new Error(data.error)

      sessionStorage.setItem('result', JSON.stringify({
        ...data,
        preview
      }))
      router.push('/result')
    } catch {
      setError('Gagal terhubung ke server. Pastikan Flask sudah berjalan!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-green-800">
            🌿 Plant Classifier
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Upload foto daun untuk mengidentifikasi jenis tumbuhan
          </p>
        </div>

        {/* Drop zone */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => document.getElementById('fileInput')?.click()}
          className="border-2 border-dashed border-green-300 rounded-2xl h-56 flex items-center justify-center mb-4 overflow-hidden cursor-pointer hover:border-green-500 hover:bg-green-50 transition-all"
        >
          {preview ? (
            <div className="relative h-full w-full">
              <Image
                src={preview}
                alt="preview"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          ) : (
            <div className="text-center">
              <p className="text-4xl mb-2">🍃</p>
              <p className="text-gray-400 text-sm">Klik atau drag & drop gambar di sini</p>
              <p className="text-gray-300 text-xs mt-1">JPG, PNG, WEBP</p>
            </div>
          )}
        </div>

        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />

        {/* Error */}
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}

        {/* Tombol */}
        <button
          onClick={handleSubmit}
          disabled={loading || !image}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-200 disabled:text-gray-400 text-white font-medium py-3 rounded-xl transition-all"
        >
          {loading ? '⏳ Menganalisis...' : '🔍 Identifikasi Tanaman'}
        </button>

        {preview && !loading && (
          <button
            onClick={() => { setImage(null); setPreview(null) }}
            className="w-full mt-2 text-sm text-gray-400 hover:text-gray-600 py-2"
          >
            Ganti gambar
          </button>
        )}
      </div>
    </main>
  )
}