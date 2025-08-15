<template>
  <section class="px-4 md:px-24">
    <img
      src="/assets/images/backgrounds/bg_header_page.webp"
      class="rounded-xl"
    />
    <h1 class="text-4xl text-primary font-bold uppercase my-12">
      {{ t("navigation.sustainable_responsible") }}
    </h1>
    <div class="flex items-center justify-center relative image-container">
      <img
        class="absolute top-0 right-0"
        src="/assets/images/backgrounds/bg_mp.webp"
      />
      <img
        class="absolute bottom-0 left-0 h-64"
        src="/assets/images/backgrounds/icons.png"
      />
      <div class="image-gif">
        <img
          :src="
            currentLanguage === 'en'
              ? '/assets/images/backgrounds/Un-developpement-durable-responsable-uk-1.gif'
              : '/assets/images/backgrounds/Un-developpement-durable-responsable.gif'
          "
          alt="Value Model"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useLanguage } from "@/composables/useLanguage";

const { currentLanguage } = useLanguage();
const { t } = useI18n();
</script>

<style lang="scss" scoped>
.image-gif {
  height: auto;

  img {
    height: 100%;
    width: 100%;
  }
}
</style>
