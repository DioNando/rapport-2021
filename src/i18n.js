import { createI18n } from 'vue-i18n'
import fr from './locales/fr.json'
import en from './locales/en.json'

const messages = {
  fr,
  en
}

const i18n = createI18n({
  locale: 'fr', // langue par défaut
  fallbackLocale: 'en', // langue de secours
  messages,
  legacy: false, // utilise la Composition API
  globalInjection: true // permet d'utiliser $t dans les templates
})

export default i18n
