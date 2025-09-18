<template>
  <div class="counter-demo p-8 space-y-8">
    <h2 class="text-3xl font-bold text-center mb-8">
      Animation de Compteurs - Démonstration
    </h2>
    
    <!-- Section de test avec différents types de nombres -->
    <div class="test-section">
      <h3 class="text-xl font-semibold mb-4">Test automatique (au scroll)</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div
          v-for="(demo, index) in demoCounters"
          :key="demo.id"
          :ref="el => setDemoRef(el, index)"
          class="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow"
        >
          <div class="text-3xl font-bold text-blue-600 mb-2">
            {{ counterValues[index] || '0' }}
          </div>
          <div class="text-sm text-gray-600">{{ demo.label }}</div>
        </div>
      </div>
    </div>

    <!-- Section de contrôle manuel -->
    <div class="manual-section">
      <h3 class="text-xl font-semibold mb-4">Contrôle manuel</h3>
      <div class="flex flex-wrap gap-4 mb-6">
        <button
          @click="startAllManualAnimations"
          class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Démarrer toutes les animations
        </button>
        <button
          @click="resetAllManualAnimations"
          class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(manual, index) in manualCounters"
          :key="manual.id"
          class="bg-white shadow-lg rounded-lg p-6 text-center"
        >
          <div class="text-4xl font-bold text-green-600 mb-2">
            {{ manualValues[index] || '0' }}
          </div>
          <div class="text-sm text-gray-600 mb-4">{{ manual.label }}</div>
          <div class="flex gap-2 justify-center">
            <button
              @click="startManualAnimation(index)"
              class="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors"
            >
              Start
            </button>
            <button
              @click="resetManualAnimation(index)"
              class="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Spacer pour tester le scroll -->
    <div class="h-screen flex items-center justify-center bg-gray-100 rounded-lg">
      <p class="text-2xl text-gray-600">Scrollez vers le haut pour voir les animations !</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCounterAnimation, easingFunctions } from '@/composables/useCounterAnimation';
import { useViewportCounters } from '@/composables/useViewportCounters';

// Données de démonstration
const demoCounters = ref([
  { id: 1, value: '32', label: 'Nombre simple' },
  { id: 2, value: '6.6M', label: 'Avec suffixe M' },
  { id: 3, value: '14 900', label: 'Avec espaces' },
  { id: 4, value: '42%', label: 'Pourcentage' },
  { id: 5, value: '4.11', label: 'Décimal' },
  { id: 6, value: '345MMDH', label: 'Multi-suffixes' },
  { id: 7, value: '2 000', label: 'Milliers' },
  { id: 8, value: '3.2', label: 'Décimal simple' },
  { id: 9, value: '47%', label: 'Autre pourcentage' },
  { id: 10, value: '6 115', label: 'Grand nombre' }
]);

const manualCounters = ref([
  { id: 1, value: '1000000', label: 'Million' },
  { id: 2, value: '99.9%', label: 'Pourcentage élevé' },
  { id: 3, value: '123.456', label: 'Décimal précis' }
]);

// Refs et valeurs
const demoRefs = ref([]);
const counterValues = ref([]);
const manualValues = ref([]);
const manualAnimations = ref([]);

// Composables
const { observeMultipleElements } = useViewportCounters({
  threshold: 0.3,
  rootMargin: '0px 0px -50px 0px'
});

// Fonctions pour gérer les refs
function setDemoRef(el, index) {
  if (el) {
    demoRefs.value[index] = el;
  }
}

// Initialiser les animations automatiques
function initAutoAnimations() {
  const autoAnimations = demoCounters.value.map((demo, index) => {
    const animation = useCounterAnimation(
      demo.value,
      1500 + (index * 100),
      easingFunctions.easeOutCubic
    );
    
    counterValues.value[index] = animation.displayValue;
    return animation;
  });

  // Préparer les données pour l'observation
  setTimeout(() => {
    const elementsData = demoRefs.value.map((element, index) => ({
      element,
      counterAnimation: autoAnimations[index],
      delay: index * 100
    })).filter(data => data.element);

    observeMultipleElements(elementsData, 80);
  }, 100);
}

// Initialiser les animations manuelles
function initManualAnimations() {
  manualAnimations.value = manualCounters.value.map((manual, index) => {
    const animation = useCounterAnimation(
      manual.value,
      2000,
      easingFunctions.easeOutQuart
    );
    
    manualValues.value[index] = animation.displayValue;
    return animation;
  });
}

// Contrôles manuels
function startManualAnimation(index) {
  if (manualAnimations.value[index]) {
    manualAnimations.value[index].startAnimation();
  }
}

function resetManualAnimation(index) {
  if (manualAnimations.value[index]) {
    manualAnimations.value[index].resetAnimation();
  }
}

function startAllManualAnimations() {
  manualAnimations.value.forEach((animation, index) => {
    setTimeout(() => {
      animation.startAnimation();
    }, index * 200);
  });
}

function resetAllManualAnimations() {
  manualAnimations.value.forEach(animation => {
    animation.resetAnimation();
  });
}

// Initialisation
onMounted(() => {
  initAutoAnimations();
  initManualAnimations();
});
</script>

<style scoped>
.counter-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.test-section,
.manual-section {
  padding: 2rem;
  background: #f8fafc;
  border-radius: 1rem;
}

/* Animation de pulse pour les éléments en cours d'animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animating {
  animation: pulse 0.5s ease-in-out;
}
</style>
