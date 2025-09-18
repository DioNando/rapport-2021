import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable pour détecter quand des éléments entrent dans le viewport
 * et déclencher les animations de compteurs
 * @param {Object} options - Options pour l'Intersection Observer
 * @returns {Object} - { observeElement, unobserveElement, isVisible }
 */
export function useViewportCounters(options = {}) {
  const defaultOptions = {
    threshold: 0.3, // 30% de l'élément doit être visible
    rootMargin: '0px 0px -50px 0px', // Déclencher un peu avant que l'élément soit complètement visible
    ...options
  }

  const observedElements = ref(new Map())
  const visibleElements = ref(new Set())
  let observer = null

  /**
   * Callback appelé quand l'intersection change
   */
  function handleIntersection(entries) {
    entries.forEach(entry => {
      const elementId = entry.target.dataset.counterId
      
      if (entry.isIntersecting && !visibleElements.value.has(elementId)) {
        // L'élément devient visible pour la première fois
        visibleElements.value.add(elementId)
        
        // Déclencher l'animation du compteur
        const counterData = observedElements.value.get(elementId)
        if (counterData && counterData.startAnimation) {
          // Petit délai pour un effet plus naturel
          setTimeout(() => {
            counterData.startAnimation()
          }, counterData.delay || 0)
        }
      }
    })
  }

  /**
   * Initialise l'Intersection Observer
   */
  function initObserver() {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(handleIntersection, defaultOptions)
    }
  }

  /**
   * Observe un élément pour déclencher l'animation du compteur
   * @param {HTMLElement} element - L'élément à observer
   * @param {Object} counterAnimation - L'objet retourné par useCounterAnimation
   * @param {number} delay - Délai avant de démarrer l'animation (en ms)
   */
  function observeElement(element, counterAnimation, delay = 0) {
    if (!observer || !element) return

    // Générer un ID unique pour l'élément
    const elementId = `counter-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    element.dataset.counterId = elementId

    // Stocker les données du compteur
    observedElements.value.set(elementId, {
      ...counterAnimation,
      delay
    })

    // Commencer à observer l'élément
    observer.observe(element)
  }

  /**
   * Arrête d'observer un élément
   * @param {HTMLElement} element - L'élément à ne plus observer
   */
  function unobserveElement(element) {
    if (!observer || !element) return

    const elementId = element.dataset.counterId
    if (elementId) {
      observer.unobserve(element)
      observedElements.value.delete(elementId)
      visibleElements.value.delete(elementId)
    }
  }

  /**
   * Vérifie si un élément est visible
   * @param {HTMLElement} element - L'élément à vérifier
   * @returns {boolean} - True si l'élément est visible
   */
  function isElementVisible(element) {
    if (!element) return false
    const elementId = element.dataset.counterId
    return visibleElements.value.has(elementId)
  }

  /**
   * Démarre manuellement l'animation pour un élément spécifique
   * @param {HTMLElement} element - L'élément dont démarrer l'animation
   */
  function triggerAnimation(element) {
    if (!element) return

    const elementId = element.dataset.counterId
    const counterData = observedElements.value.get(elementId)
    
    if (counterData && counterData.startAnimation && !visibleElements.value.has(elementId)) {
      visibleElements.value.add(elementId)
      counterData.startAnimation()
    }
  }

  /**
   * Remet à zéro toutes les animations observées
   */
  function resetAllAnimations() {
    observedElements.value.forEach((counterData, elementId) => {
      if (counterData.resetAnimation) {
        counterData.resetAnimation()
      }
    })
    visibleElements.value.clear()
  }

  /**
   * Observe plusieurs éléments en une fois avec des délais échelonnés
   * @param {Array} elementsData - Array d'objets {element, counterAnimation, delay}
   * @param {number} baseDelay - Délai de base entre chaque animation
   */
  function observeMultipleElements(elementsData, baseDelay = 200) {
    elementsData.forEach((data, index) => {
      const totalDelay = (data.delay || 0) + (index * baseDelay)
      observeElement(data.element, data.counterAnimation, totalDelay)
    })
  }

  // Initialiser l'observer au montage
  onMounted(() => {
    initObserver()
  })

  // Nettoyer au démontage
  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
    observedElements.value.clear()
    visibleElements.value.clear()
  })

  return {
    observeElement,
    unobserveElement,
    observeMultipleElements,
    isElementVisible,
    triggerAnimation,
    resetAllAnimations,
    visibleElements: visibleElements.value
  }
}
