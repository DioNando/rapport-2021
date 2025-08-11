<script setup>
import { useLanguage } from './composables/useLanguage'
import { onMounted } from 'vue'

const { initLanguage } = useLanguage()

// Initialiser la langue au montage du composant
onMounted(() => {
  initLanguage()
})
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* Styles globaux pour l'application */
/* #app {
  min-height: 100vh;
} */

/* Animations globales pour les transitions de route */
/* .router-link-active {
  color: #1369b4 !important;
} */

/* Amélioration du scrollbar */
/* ::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #1369b4;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #0f5694;
} */

/* Animations pour AOS */
[data-aos] {
  pointer-events: none;
}

[data-aos].aos-animate {
  pointer-events: auto;
}
</style>
