<template>
  <ul
    class="flex flex-col items-center gap-6 uppercase font-bold text-xl text-primary text-center"
  >
    <li v-for="item in items" :key="item.label">
      <router-link :to="item.path" @click="$emit('item-clicked')">{{ t(item.label) }}</router-link>
    </li>
    <li>
      <LanguageSelector />
    </li>
  </ul>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import LanguageSelector from "@/components/ui/LanguageSelector.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
    // Expected shape: [{ path: string, label: string }]
  },
});

const emit = defineEmits(['item-clicked'])

const { t } = useI18n();
</script>

<style lang="scss" scoped>
/* Inherit container spacing from parent */
</style>
