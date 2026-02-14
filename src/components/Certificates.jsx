import { useState } from 'react'
import { FaAward, FaSearchPlus, FaTimes } from 'react-icons/fa'
import { config } from '../services/api'
import { useLanguage } from '../context/LanguageContext'

const Certificates = () => {
  const { certificates, ui } = config
  const { t } = useLanguage()
  const [selectedImg, setSelectedImg] = useState(null)

  if (!certificates || certificates.length === 0) return null

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
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="glass-card p-4 group cursor-pointer hover:-translate-y-2 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30 overflow-hidden"
              onClick={() => setSelectedImg(cert.image)}
            >
              <div className="relative aspect-video mb-4 overflow-hidden rounded-lg bg-emerald-900/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all">
                 {cert.image && !cert.image.includes('example') ? (
                    <img 
                      src={cert.image} 
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 transition-all duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
            onClick={() => setSelectedImg(null)}
          >
            <FaTimes size={32} />
          </button>
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <img 
              src={selectedImg} 
              alt="Certificate Zoom" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificates
