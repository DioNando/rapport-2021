<template>
  <section class="p-24">
    <div class="flex items-start gap-6">
      <HighlightsVideo
        src-en="/assets/videos/BOA-VA-1.mp4"
        src-fr="/assets/videos/BOA-VF.mp4"
        poster="/assets/images/backgrounds/highlights.webp"
      />
      <router-link to="/chairman-message">
        <div class="chairman-message overflow-hidden rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <img
            src="/assets/images/backgrounds/Mot-du-President-Othman-BENJELLOUN.webp"
            alt=""
          />
          <h3
            class="w-full bg-primary pt-4 pb-6 text-3xl font-medium text-center text-white"
          >
            {{ t("home.chairman_message") }}
          </h3>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";

import HighlightsVideo from "@/components/ui/HighlightsVideo.vue";

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.chairman-message {
  width: 400px;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  h3 {
    position: absolute;
    bottom: 0;
  }
}
</style>
