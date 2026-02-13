import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    // Try to get saved language from localStorage or default to Indonesian ('id')
    return localStorage.getItem('portfolio-lang') || 'id'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang)
  }, [lang])

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'id' : 'en'))
  }

  const t = (obj) => {
    if (!obj) return ''
    if (typeof obj === 'string') return obj
    return obj[lang] || obj['en'] || ''
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
