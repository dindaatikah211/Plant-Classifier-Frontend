'use client'
import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

const FADE_DURATION = 0.5 // seconds

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef   = useRef<number>(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const tick = () => {
      const { currentTime, duration, style } = video
      if (!duration) { rafRef.current = requestAnimationFrame(tick); return }

      if (currentTime < FADE_DURATION) {
        // Fade in
        style.opacity = String(currentTime / FADE_DURATION)
      } else if (currentTime > duration - FADE_DURATION) {
        // Fade out
        style.opacity = String((duration - currentTime) / FADE_DURATION)
      } else {
        style.opacity = '1'
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    const handleEnded = () => {
      const v = videoRef.current
      if (!v) return
      v.style.opacity = '0'
      setTimeout(() => {
        v.currentTime = 0
        v.play()
      }, 100)
    }

    video.addEventListener('ended', handleEnded)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      video.removeEventListener('ended', handleEnded)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        src={VIDEO_URL}
        autoPlay
        muted
        playsInline
        style={{
          opacity: 0,
          position: 'absolute',
          top: '300px',
          inset: 'auto 0 0 0',
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
    </div>
  )
}