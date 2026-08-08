import React from 'react'
import { 
  FaEnvelope, 
  FaGithub, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaDiscord, 
  FaInstagram, 
  FaSync, 
  FaServer, 
  FaSearchDollar 
} from 'react-icons/fa'
import { config } from '../services/api'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
  const { personal, ui } = config
  const { t, lang } = useLanguage()

  // Ensure icons are defined (safety check)
  const WhatsappIcon = FaWhatsapp || 'span'
  const SyncIcon = FaSync || 'span'
  const ServerIcon = FaServer || 'span'
  const SearchDollarIcon = FaSearchDollar || 'span'

  const waNumber = (personal?.whatsapp || '').replace(/\D/g, '')
  const waLink = `https://wa.me/62${waNumber.startsWith('0') ? waNumber.substring(1) : waNumber}`

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="relative glass-card p-6 md:p-16 text-center overflow-hidden group max-w-5xl mx-auto border-2 border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.15)]">
            
            {/* Animated Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10 space-y-8 flex flex-col items-center">

                <div className="space-y-4 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display leading-[1.1] tracking-tight">
                        {t({ 
                          en: "Let's Discuss Your Website Project", 
                          id: "Mari Diskusikan Project Website Anda" 
                        })}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light mt-4">
                       {t({ 
                        en: "Tell me about your project needs, and I'll help you from planning to getting your website live.", 
                        id: "Ceritakan kebutuhan project Anda, saya bantu dari tahap perencanaan sampai website Anda benar-benar live." 
                       })}
                    </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center w-full">
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/wa relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-green-500 text-white rounded-2xl font-bold text-lg hover:bg-green-400 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)]"
                    >
                        <WhatsappIcon className="text-2xl group-hover/wa:rotate-12 transition-transform" />
                        {t({ en: "Order via WhatsApp", id: "Order via WhatsApp" })}
                        
                        {/* Decorative glow on button */}
                        <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover/wa:scale-100 transition-transform duration-500"></div>
                    </a>

                    <a
                        href={`mailto:${personal.email}`}
                        className="group/email relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
                    >
                        <FaEnvelope className="text-2xl group-hover/email:-translate-y-1 transition-transform" />
                        {t({ en: "Contact via Email", id: "Hubungi via Email" })}
                    </a>
                </div>

                <div className="flex flex-wrap justify-center gap-8 pt-6 opacity-60">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                        <SearchDollarIcon className="text-blue-500" />
                        <span>{t(config.benefits[3].title)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                        <SyncIcon className="text-blue-500" />
                        <span>{t(config.benefits[4].title)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                        <ServerIcon className="text-blue-500" />
                        <span>{t(config.benefits[5].title)}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
