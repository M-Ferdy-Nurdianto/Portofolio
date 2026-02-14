import React from 'react'
import { 
  FaEnvelope, 
  FaGithub, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaDiscord, 
  FaInstagram, 
  FaRocket, 
  FaSync, 
  FaServer, 
  FaTools 
} from 'react-icons/fa'
import { config } from '../services/api'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
  const { personal, ui } = config
  const { t, lang } = useLanguage()

  // Ensure icons are defined (safety check)
  const RocketIcon = FaRocket || 'span'
  const WhatsappIcon = FaWhatsapp || 'span'
  const SyncIcon = FaSync || 'span'
  const ServerIcon = FaServer || 'span'
  const ToolsIcon = FaTools || 'span'

  const waNumber = (personal?.whatsapp || '').replace(/\D/g, '')
  const waLink = `https://wa.me/62${waNumber.startsWith('0') ? waNumber.substring(1) : waNumber}`

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="relative glass-card p-10 md:p-16 text-center overflow-hidden group max-w-5xl mx-auto border-2 border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.15)]">
            
            {/* Animated Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/20 via-transparent to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10 space-y-8 flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/20 rounded-full border border-emerald-500/30 animate-pulse">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    <span className="text-emerald-300 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
                        {lang === 'en' ? 'Limited Slot Available' : 'Slot Terbatas, Gercep!'}
                    </span>
                </div>

                <div className="space-y-4 max-w-3xl">
                    <h2 className="text-4xl md:text-6xl font-black text-white font-display leading-[1.1] tracking-tight">
                        {t({ 
                          en: "Want a Website that Actually Sells? 🔥", 
                          id: "Mau Web-mu Menyala Abangku? ⚡" 
                        })}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                       {t({ 
                        en: "Don't just go online. Build a brand that converts! Get free hosting & professional design. Consultation is 100% free.", 
                        id: "Gak cuma sekadar online, tapi bikin brand lo makin eksis & cuan! Konsultasi gratis, gass amankan slot mumpung promo hosting gratis masih ada." 
                       })}
                    </p>
                </div>

                <div className="pt-4">
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/wa relative inline-flex items-center gap-3 px-10 py-5 bg-emerald-500 text-white rounded-2xl font-black text-lg md:text-xl hover:bg-emerald-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]"
                    >
                        <WhatsappIcon className="text-2xl group-hover/wa:rotate-12 transition-transform" />
                        {t({ en: "Secure Your Slot now!", id: "Amankan Slot via WA" })}
                        
                        {/* Decorative glow on button */}
                        <div className="absolute inset-0 bg-white/20 rounded-2xl scale-0 group-hover/wa:scale-100 transition-transform duration-500"></div>
                    </a>
                </div>

                <div className="flex flex-wrap justify-center gap-8 pt-6 opacity-60">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                        <RocketIcon className="text-emerald-500" />
                        <span>Ready in 3-5 Days</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                        <SyncIcon className="text-emerald-500" />
                        <span>Unlimited Revisions</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                        <ServerIcon className="text-emerald-500" />
                        <span>Official Hosting Partner</span>
                    </div>
                </div>
            </div>
            
            {/* Floating Decorative Icons */}
            <div className="absolute -top-10 -right-10 opacity-5 group-hover:rotate-0 transition-transform duration-1000 -rotate-12">
               <RocketIcon size={120} />
            </div>
            <div className="absolute -bottom-10 -left-10 opacity-5 group-hover:rotate-0 transition-transform duration-1000 rotate-12">
               <ToolsIcon size={120} />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
