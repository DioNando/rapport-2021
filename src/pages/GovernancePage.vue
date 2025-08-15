<template>
  <section class="px-4 md:px-24">
    <img
      src="/assets/images/backgrounds/bg_header_gouvernance.webp"
      class="rounded-xl"
    />
    <h1 class="text-4xl text-primary font-bold uppercase my-12">
      {{ t("navigation.governance") }}
    </h1>
    <div class="text-lg mb-10">
      <p v-if="currentLanguage === 'en'">
        BANK OF AFRICA's Board of Directors has set up 4 specialised committees
        responsible for carrying out the various tasks assigned to the Board and
        for ensuring that the Bank's growth strategy is properly implemented.
        These committees draw on the expertise of the Directors who sit on them*
        to address the various issues related to BANK OF AFRICA's operations
        whilst ensuring that shareholders' interests are protected.
      </p>
      <p v-else-if="currentLanguage === 'fr'">
        Pour mener à bien les missions qui lui sont dévolues et assurer une
        exécution juste de la trajectoire de développement de BANK OF AFRICA,
        le Conseil d'Administration a mis en place 4 instances sous forme de
        comités spécialisés. Ces comités capitalisent sur l'expertise des
        administrateurs qui les composent, pour aborder les problématiques liées
        aux différentes activités de BANK OF AFRICA et veillent sur la
        protection de l'intérêt des actionnaires.
      </p>
    </div>
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
              ? '/assets/images/backgrounds/Une-gouvernance-soutenue-par-le-developpement-durable-UK.gif'
              : '/assets/images/backgrounds/Une-gouvernance-soutenue-par-le-developpement-durable.gif'
          "
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
  height: 75vh;

  img {
    height: 100%;
    width: 100%;
  }
}
</style>
