import { useState, useEffect, useCallback } from 'react'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const ImageGallery = ({ images, currentIndex, onClose }) => {
  const [index, setIndex] = useState(currentIndex)

  const prev = useCallback(() => setIndex((i) => (i === 0 ? images.length - 1 : i - 1)), [images.length])
  const next = useCallback(() => setIndex((i) => (i === images.length - 1 ? 0 : i + 1)), [images.length])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-bg/50 text-white hover:bg-bg/80 transition-colors z-10">
        <FiX size={20} />
      </button>

      <button onClick={prev} className="absolute left-4 p-2 rounded-full bg-bg/50 text-white hover:bg-bg/80 transition-colors z-10">
        <FiChevronLeft size={24} />
      </button>

      <div className="flex items-center justify-center max-w-[90vw] max-h-[85vh]">
        <img
          src={images[index]}
          alt={`Captura ${index + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-lg"
        />
      </div>

      <button onClick={next} className="absolute right-4 p-2 rounded-full bg-bg/50 text-white hover:bg-bg/80 transition-colors z-10">
        <FiChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 text-white/60 text-xs font-medium">
        {index + 1} / {images.length}
      </div>
    </div>
  )
}

export default ImageGallery
