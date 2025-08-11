<template>
  <div class="language-selector">
    <button 
      v-for="lang in availableLanguages"
      :key="lang.code"
      @click="changeLanguage(lang.code)" 
      :class="{ active: currentLanguage === lang.code }"
      class="lang-btn"
      :title="lang.name"
    >
      <img :src="lang.flag" :alt="lang.name" class="flag-img" />
    </button>
  </div>
</template>

<script setup>
import { useLanguage } from '@/composables/useLanguage'

const { currentLanguage, availableLanguages, changeLanguage } = useLanguage()
</script>

<style scoped>
.language-selector {
  display: flex;
  gap: 0.5rem;
}

.lang-btn {
  padding: 0.5rem;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
}

.flag-img {
  width: 24px;
  height: 18px;
  border-radius: 2px;
  object-fit: cover;
}

.lang-btn:hover {
  /* background: #1369b4; */
  color: white;
}

.lang-btn.active {
  /* background: #1369b4; */
  color: white;
}
</style>
