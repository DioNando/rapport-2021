import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable pour animer les compteurs avec support de différents formats
 * @param {string} targetValue - La valeur cible à atteindre (ex: "32", "6.6M", "42%", "14 900")
 * @param {number} duration - Durée de l'animation en millisecondes (défaut: 2000)
 * @param {Function} easingFunction - Fonction d'easing (défaut: easeOutCubic)
 * @returns {Object} - { displayValue, startAnimation, resetAnimation }
 */
export function useCounterAnimation(targetValue, duration = 2000, easingFunction = null) {
  const displayValue = ref('0')
  const isAnimating = ref(false)
  let animationId = null

  // Fonction d'easing par défaut (easeOutCubic)
  const defaultEasing = (t) => 1 - Math.pow(1 - t, 3)
  const easing = easingFunction || defaultEasing

  /**
   * Parse la valeur cible pour extraire le nombre, les suffixes et les préfixes
   */
  function parseTargetValue(value) {
    const stringValue = String(value).trim()
    
    // Gestion des pourcentages
    if (stringValue.includes('%')) {
      const number = parseFloat(stringValue.replace('%', ''))
      return {
        number,
        suffix: '%',
        prefix: '',
        hasSpaces: false,
        isDecimal: stringValue.includes('.'),
        originalFormat: stringValue
      }
    }
    
    // Gestion des suffixes comme M, K, etc.
    const suffixMatch = stringValue.match(/([0-9.,\s]+)([A-Z]+)(.*)/)
    if (suffixMatch) {
      const numberPart = suffixMatch[1].replace(/\s/g, '')
      const suffix = suffixMatch[2] + (suffixMatch[3] || '')
      const number = parseFloat(numberPart.replace(/,/g, '.'))
      return {
        number,
        suffix,
        prefix: '',
        hasSpaces: stringValue.includes(' '),
        isDecimal: numberPart.includes('.') || numberPart.includes(','),
        originalFormat: stringValue
      }
    }
    
    // Gestion des nombres avec espaces (comme "14 900")
    if (stringValue.includes(' ') && /^\d/.test(stringValue)) {
      const cleanNumber = stringValue.replace(/\s/g, '')
      const number = parseFloat(cleanNumber)
      return {
        number,
        suffix: '',
        prefix: '',
        hasSpaces: true,
        isDecimal: false,
        originalFormat: stringValue,
        spacePattern: stringValue
      }
    }
    
    // Nombres simples
    const number = parseFloat(stringValue.replace(/,/g, '.'))
    return {
      number: isNaN(number) ? 0 : number,
      suffix: '',
      prefix: '',
      hasSpaces: false,
      isDecimal: stringValue.includes('.') || stringValue.includes(','),
      originalFormat: stringValue
    }
  }

  /**
   * Formate un nombre selon le format original
   */
  function formatNumber(currentNumber, targetInfo) {
    let formatted = ''
    
    if (targetInfo.isDecimal) {
      // Déterminer le nombre de décimales depuis l'original
      const decimalPlaces = targetInfo.originalFormat.includes('.') 
        ? targetInfo.originalFormat.split('.')[1].replace(/[^0-9]/g, '').length
        : targetInfo.originalFormat.includes(',')
        ? targetInfo.originalFormat.split(',')[1].replace(/[^0-9]/g, '').length
        : 1
      
      formatted = currentNumber.toFixed(decimalPlaces)
    } else {
      formatted = Math.floor(currentNumber).toString()
    }
    
    // Ajouter les espaces pour les grands nombres
    if (targetInfo.hasSpaces && !targetInfo.suffix) {
      // Format français avec espaces tous les 3 chiffres
      formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }
    
    // Ajouter préfixe et suffixe
    return targetInfo.prefix + formatted + targetInfo.suffix
  }

  /**
   * Démarre l'animation du compteur
   */
  function startAnimation() {
    if (isAnimating.value) return
    
    const targetInfo = parseTargetValue(targetValue)
    if (targetInfo.number === 0) {
      displayValue.value = targetValue
      return
    }
    
    isAnimating.value = true
    const startTime = Date.now()
    const startValue = 0
    
    function animate() {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Appliquer la fonction d'easing
      const easedProgress = easing(progress)
      
      // Calculer la valeur actuelle
      const currentNumber = startValue + (targetInfo.number - startValue) * easedProgress
      
      // Formater et afficher
      displayValue.value = formatNumber(currentNumber, targetInfo)
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      } else {
        // S'assurer que la valeur finale est exactement celle attendue
        displayValue.value = targetValue
        isAnimating.value = false
      }
    }
    
    animate()
  }

  /**
   * Remet le compteur à zéro
   */
  function resetAnimation() {
    if (animationId) {
      cancelAnimationFrame(animationId)
      animationId = null
    }
    isAnimating.value = false
    displayValue.value = '0'
  }

  /**
   * Nettoie les animations en cours lors du démontage
   */
  onUnmounted(() => {
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
  })

  return {
    displayValue,
    isAnimating,
    startAnimation,
    resetAnimation
  }
}

/**
 * Fonctions d'easing prédéfinies
 */
export const easingFunctions = {
  linear: (t) => t,
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => t * (2 - t),
  easeInOutQuad: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInCubic: (t) => t * t * t,
  easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
  easeInOutCubic: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeInQuart: (t) => t * t * t * t,
  easeOutQuart: (t) => 1 - Math.pow(1 - t, 4),
  easeInOutQuart: (t) => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * Math.pow(1 - t, 4),
}
