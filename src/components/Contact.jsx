import { FaEnvelope, FaGithub, FaWhatsapp, FaMapMarkerAlt, FaDiscord, FaInstagram } from 'react-icons/fa'
import { config } from '../services/api'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
  const { personal, ui } = config
  const { t } = useLanguage()

  const waNumber = personal.whatsapp.replace(/\D/g, '')
  const waLink = `https://wa.me/62${waNumber.startsWith('0') ? waNumber.substring(1) : waNumber}`

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text font-display">
            {t(ui.titles.contact)}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t(ui.messages.cta_desc)}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Order CTA */}
          <div className="glass-card p-8 flex flex-col items-center text-center justify-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <FaWhatsapp className="text-5xl text-green-400" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">
              {t(ui.titles.contact)}
            </h3>
            <p className="text-gray-400 mb-8 max-w-md">
              {t({ 
                en: "Get a professional website for your business. Chat with me directly on WhatsApp to get started!", 
                id: "Dapatkan website profesional untuk bisnis Anda. Chat saya langsung di WhatsApp untuk memulai!" 
              })}
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-primary flex items-center justify-center gap-3 py-4 text-lg font-bold bg-green-600 hover:bg-green-500 border-none shadow-[0_0_20px_rgba(22,163,74,0.4)] hover:shadow-[0_0_30px_rgba(22,163,74,0.6)] transition-all duration-300"
            >
              <FaWhatsapp className="text-2xl" /> {t(ui.buttons.order_whatsapp)}
            </a>
            <p className="mt-6 text-emerald-400 font-mono text-xl">
              {personal.whatsapp}
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">{t(ui.titles.contact_info)}</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-emerald-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{t({ en: "Location", id: "Lokasi" })}</p>
                    <p className="text-white">
                      {t(personal.location)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-emerald-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href={`mailto:${personal.email}`} className="text-white hover:text-emerald-400 transition-colors">
                      {personal.email}
                    </a>
                  </div>
                </div>


                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <FaInstagram className="text-emerald-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Instagram</p>
                    <a href={personal.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 transition-colors">
                      {personal.instagram.split('/').pop()}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <FaDiscord className="text-emerald-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Discord</p>
                    <a href={personal.discord} target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 transition-colors">
                      {personal.discord.split('/').pop()}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">{t(ui.titles.follow_me)}</h3>
              <div className="flex gap-4">
                <a
                   href={personal.github}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-12 h-12 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaGithub className="text-xl text-gray-400 hover:text-emerald-400" />
                </a>
                <a
                  href={personal.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaInstagram className="text-xl text-gray-400 hover:text-emerald-400" />
                </a>
                <a
                  href={personal.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <FaDiscord className="text-xl text-gray-400 hover:text-emerald-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
