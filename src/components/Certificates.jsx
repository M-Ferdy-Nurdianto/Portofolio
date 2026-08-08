import { useState } from 'react'
import { FaAward, FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { config } from '../services/api'
import { useLanguage } from '../context/LanguageContext'

const Certificates = () => {
  const { certificates, ui } = config
  const { t } = useLanguage()
  const [selectedCert, setSelectedCert] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  if (!certificates || certificates.length === 0) return null

  const openLightbox = (cert) => {
    setSelectedCert(cert)
    setCurrentSlide(0)
  }

  const nextSlide = (e) => {
    e.stopPropagation()
    if (selectedCert?.images) {
      setCurrentSlide((prev) => (prev + 1) % selectedCert.images.length)
    }
  }

  const prevSlide = (e) => {
    e.stopPropagation()
    if (selectedCert?.images) {
      setCurrentSlide((prev) => (prev - 1 + selectedCert.images.length) % selectedCert.images.length)
    }
  }

  return (
    <section id="certificates" className="py-20 relative bg-black/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text font-display">
            {t({ en: "Certifications", id: "Sertifikat" })}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             {t({ en: "Validating my skills and expertise.", id: "Bukti keahlian dan kompetensi saya." })}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            const displayImg = cert.image || (cert.images && cert.images[0])
            return (
              <div 
                key={index} 
                className="glass-card p-4 group cursor-pointer hover:-translate-y-2 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30 overflow-hidden"
                onClick={() => openLightbox(cert)}
              >
                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg bg-emerald-900/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all">
                   {displayImg && !displayImg.includes('example') ? (
                      <img 
                        src={displayImg} 
                        alt={cert.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                   ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-900/50 to-black">
                        <FaAward className="text-5xl text-emerald-500/50" />
                        <span className="absolute bottom-2 right-2 text-xs text-emerald-500/50">Placeholder Img</span>
                      </div>
                   )}
                   
                   {/* Overlay Actions - Zoom instead of Link */}
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 bg-emerald-500 rounded-full text-white transform scale-0 group-hover:scale-100 transition-all duration-300 delay-100">
                        <FaSearchPlus size={20} />
                      </div>
                   </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors line-clamp-2">
                    {cert.name}
                  </h3>
                  {cert.images && cert.images.length > 1 && (
                    <p className="text-xs text-emerald-400 mt-1">({cert.images.length} {t({ en: "Pages", id: "Halaman" })})</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 transition-all duration-300"
          onClick={() => setSelectedCert(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-[110]"
            onClick={() => setSelectedCert(null)}
          >
            <FaTimes size={32} />
          </button>
          
          <div className="relative w-full max-w-4xl h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedCert.image || selectedCert.images[currentSlide]} 
              alt="Certificate Zoom" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
            
            {/* Slider Controls */}
            {selectedCert.images && selectedCert.images.length > 1 && (
              <>
                <button 
                  onClick={prevSlide}
                  className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-emerald-500 text-white rounded-full transition-colors backdrop-blur-sm"
                >
                  <FaChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-emerald-500 text-white rounded-full transition-colors backdrop-blur-sm"
                >
                  <FaChevronRight size={24} />
                </button>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedCert.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        idx === currentSlide ? 'bg-emerald-500' : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificates
