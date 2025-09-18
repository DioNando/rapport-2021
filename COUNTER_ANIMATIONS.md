# 🎯 Animation de Compteurs - Documentation

## 📝 Vue d'ensemble

Le système d'animation de compteurs permet d'animer des nombres de différents formats (entiers, décimaux, pourcentages, avec suffixes) avec détection automatique de visibilité et effets d'easing personnalisables.

## 🛠️ Composables

### `useCounterAnimation(targetValue, duration, easingFunction)`

**Paramètres :**
- `targetValue` (string): La valeur cible à atteindre
- `duration` (number, optionnel): Durée en millisecondes (défaut: 2000ms)
- `easingFunction` (function, optionnel): Fonction d'easing (défaut: easeOutCubic)

**Retourne :**
- `displayValue` (ref): La valeur actuellement affichée
- `isAnimating` (ref): État d'animation
- `startAnimation()`: Démarre l'animation
- `resetAnimation()`: Remet à zéro

### `useViewportCounters(options)`

**Paramètres :**
- `options` (object, optionnel): Configuration de l'Intersection Observer

**Retourne :**
- `observeElement()`: Observer un élément unique
- `observeMultipleElements()`: Observer plusieurs éléments
- `triggerAnimation()`: Déclencher manuellement
- `resetAllAnimations()`: Reset global

## 🎨 Formats supportés

### Nombres simples
```javascript
"32"        → Animation de 0 à 32
"1000"      → Animation de 0 à 1000
```

### Nombres avec espaces
```javascript
"14 900"    → Animation de 0 à 14 900
"2 000"     → Animation de 0 à 2 000
```

### Décimaux
```javascript
"4.11"      → Animation de 0.00 à 4.11
"6.6"       → Animation de 0.0 à 6.6
```

### Pourcentages
```javascript
"42%"       → Animation de 0% à 42%
"99.9%"     → Animation de 0.0% à 99.9%
```

### Avec suffixes
```javascript
"6.6M"      → Animation de 0.0M à 6.6M
"345MMDH"   → Animation de 0MMDH à 345MMDH
```

## 🚀 Utilisation simple

```vue
<template>
  <div>
    <div ref="counterElement" class="counter">
      {{ displayValue }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCounterAnimation } from '@/composables/useCounterAnimation'
import { useViewportCounters } from '@/composables/useViewportCounters'

const counterElement = ref()

// Créer l'animation
const { displayValue, startAnimation } = useCounterAnimation('1000', 2000)

// Détecter la visibilité
const { observeElement } = useViewportCounters()

onMounted(() => {
  observeElement(counterElement.value, { startAnimation })
})
</script>
```

## 🎛️ Utilisation avancée (multiple compteurs)

```vue
<template>
  <div class="counters-grid">
    <div
      v-for="(item, index) in counters"
      :key="item.id"
      :ref="el => setCounterRef(el, index)"
      class="counter-item"
    >
      {{ counterValues[index] || '0' }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCounterAnimation, easingFunctions } from '@/composables/useCounterAnimation'
import { useViewportCounters } from '@/composables/useViewportCounters'

const counters = ref([
  { id: 1, value: '32' },
  { id: 2, value: '6.6M' },
  { id: 3, value: '42%' }
])

const counterRefs = ref([])
const counterValues = ref([])
const animations = ref([])

const { observeMultipleElements } = useViewportCounters()

function setCounterRef(el, index) {
  if (el) counterRefs.value[index] = el
}

onMounted(() => {
  // Initialiser les animations
  animations.value = counters.value.map((counter, index) => {
    const animation = useCounterAnimation(
      counter.value,
      1500 + (index * 200),
      easingFunctions.easeOutCubic
    )
    counterValues.value[index] = animation.displayValue
    return animation
  })

  // Observer les éléments
  setTimeout(() => {
    const elementsData = counterRefs.value.map((element, index) => ({
      element,
      counterAnimation: animations.value[index],
      delay: index * 150
    })).filter(data => data.element)

    observeMultipleElements(elementsData, 100)
  }, 100)
})
</script>
```

## ⚡ Fonctions d'easing disponibles

```javascript
import { easingFunctions } from '@/composables/useCounterAnimation'

// Disponibles :
easingFunctions.linear
easingFunctions.easeInQuad
easingFunctions.easeOutQuad
easingFunctions.easeInOutQuad
easingFunctions.easeInCubic
easingFunctions.easeOutCubic      // Recommandé pour les compteurs
easingFunctions.easeInOutCubic
easingFunctions.easeInQuart
easingFunctions.easeOutQuart
easingFunctions.easeInOutQuart
```

## 🎯 Options de configuration

### Intersection Observer
```javascript
const { observeElement } = useViewportCounters({
  threshold: 0.3,                    // 30% visible pour déclencher
  rootMargin: '0px 0px -50px 0px'   // Marge avant déclenchement
})
```

### Animation personnalisée
```javascript
const animation = useCounterAnimation(
  '1000',
  3000,                             // 3 secondes
  (t) => t * t * t                  // Fonction d'easing personnalisée
)
```

## 🔧 Intégration dans HomePage.vue

Le système est déjà intégré dans `HomePage.vue` pour animer les KPIs :

- ✅ Animation automatique au scroll
- ✅ Délais échelonnés entre les compteurs
- ✅ Support de tous les formats de nombres
- ✅ Gestion des erreurs et nettoyage automatique

## 🧪 Test et débogage

Utilisez le composant `CounterAnimationDemo.vue` pour :
- Tester différents formats de nombres
- Ajuster les timings et effets
- Vérifier la détection de visibilité
- Contrôler manuellement les animations

## 💡 Bonnes pratiques

1. **Performance** : Les animations utilisent `requestAnimationFrame` pour des performances optimales
2. **Accessibilité** : Respectent les préférences de mouvement de l'utilisateur
3. **Responsive** : Fonctionnent sur tous les appareils
4. **Nettoyage** : Gestion automatique de la mémoire avec `onUnmounted`

## 🐛 Dépannage

### Les animations ne se déclenchent pas
- Vérifiez que les refs sont correctement assignées
- Assurez-vous que `setTimeout` est utilisé pour l'initialisation
- Vérifiez la console pour les erreurs JavaScript

### Problèmes de format
- Testez avec `CounterAnimationDemo.vue`
- Vérifiez le parsing dans `parseTargetValue()`
- Assurez-vous que les suffixes sont correctement formatés

### Performance
- Réduisez le nombre d'animations simultanées
- Augmentez les délais entre les déclenchements
- Utilisez des fonctions d'easing plus légères

## 📚 Exemples d'utilisation

Voir `src/components/ui/CounterAnimationDemo.vue` pour des exemples complets et interactifs.
