'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Upload, Leaf, ArrowRight, ArrowLeft } from 'lucide-react'

export default function ClassifyContent() {
  const [image, setImage]     = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState<string | null>(null)
  const router = useRouter()

  const handleFile = (file: File) => {
    setImage(file)
    setPreview(URL.createObjectURL(file))
    setError(null)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) handleFile(file)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
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

      sessionStorage.setItem('result', JSON.stringify({ ...data, preview }))
      router.push('/classify/result')
    } catch {
      setError('Gagal terhubung ke server. Pastikan Flask sudah berjalan!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-white">
      <main className="flex flex-col items-center justify-center px-6 py-20">

        <div className="text-center mb-12 animate-fade-rise">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm mb-8 transition-colors hover:text-black"
            style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
          >
            <ArrowLeft size={13} />
            <span>Back to home</span>
          </Link>

          <div
            className="inline-flex items-center gap-2 text-sm mb-4"
            style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
          >
            <Leaf size={14} />
            <span>Plant Intelligence</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl font-normal mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              letterSpacing: '-1.5px',
              lineHeight: 1.0,
            }}
          >
            Identify your{' '}
            <em style={{ color: '#6F6F6F' }}>plant.</em>
          </h1>

          <p
            className="text-base max-w-md mx-auto"
            style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
          >
            Upload a leaf photo and our model will identify the species
            and detect any diseases.
          </p>
        </div>

        <div className="animate-fade-rise-delay w-full max-w-md">
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => document.getElementById('fileInput')?.click()}
            className="border border-black/10 rounded-2xl h-64 flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-200 hover:border-black/30 hover:bg-black/[0.02]"
          >
            {preview ? (
              <div className="relative w-full h-full">
                <Image
                  src={preview}
                  alt="preview"
                  fill
                  className="object-cover rounded-2xl"
                  unoptimized
                />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3 text-center px-6">
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center">
                  <Upload size={18} color="#6F6F6F" />
                </div>
                <p className="text-sm" style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}>
                  Click or drag & drop a leaf image
                </p>
                <p
                  className="text-xs"
                  style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)', opacity: 0.6 }}
                >
                  JPG, PNG, WEBP
                </p>
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

          {error && (
            <p
              className="text-red-500 text-sm mt-3 text-center"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {error}
            </p>
          )}

          <div className="flex gap-3 mt-4">
            {preview && (
              <button
                onClick={() => document.getElementById('fileInput')?.click()}
                className="flex-1 py-3 text-sm rounded-xl border border-black/10 transition-colors hover:border-black/30"
                style={{ color: '#6F6F6F', fontFamily: 'var(--font-body)' }}
              >
                Change image
              </button>
            )}
            <button
              onClick={handleSubmit}
              disabled={loading || !image}
              className="flex-1 py-3 text-sm rounded-xl bg-black text-white flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-[1.02] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {loading ? (
                <span>Analysing...</span>
              ) : (
                <>
                  <span>Identify Plant</span>
                  <ArrowRight size={14} />
                </>
              )}
            </button>
          </div>
        </div>

      </main>
    </div>
  )
}