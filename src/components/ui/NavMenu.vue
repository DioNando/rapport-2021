<template>
  <ul class="flex flex-col items-end gap-4 uppercase font-bold text-xl text-primary text-right">
    <li v-for="item in items" :key="item.label" data-aos="fade-up" data-aos-delay="400">
      <router-link :to="item.path">{{ t(item.label) }}</router-link>
    </li>
  </ul>
  
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    // Expected shape: [{ path: string, label: string }]
  },
})

const { t } = useI18n()
</script>

<style scoped>
/* Inherit container spacing from parent */
</style>
