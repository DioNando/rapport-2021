<template>
  <section class="p-4 md:p-24">
    <div class="flex flex-col md:flex-row items-start gap-6">
      <HighlightsVideo
        src-en="/assets/videos/BOA-VA-1.mp4"
        src-fr="/assets/videos/BOA-VF.mp4"
        poster="/assets/images/backgrounds/highlights.webp"
      />
      <router-link to="/chairman-message">
        <div
          class="chairman-message overflow-hidden rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
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
    <div
      class="flex flex-col md:flex-row items-center bg-gray-200 p-12 rounded-xl gap-6 mt-12 hover:shadow-xl transition-all"
    >
      <h3 class="flex-1 text-4xl text-primary font-bold uppercase mb-6">
        A model for creating and sharing value | Un modèle de création et de
        partage de valeur
      </h3>
      <div class="flex-2 space-y-6 text-lg">
        <p v-if="currentLanguage === 'en'">
          BANK OF AFRICA has developed a business model which focuses on
          creating and sharing value by leveraging its reputation as a socially
          responsible bank. The model is inspired by its vision of promoting
          sustainable development in Africa. BANK OF AFRICA's strategic
          priorities, endorsed by its various business lines, underpin its
          performance and bolster its financial solidity. BANK OF AFRICA's
          commitment and adherence to international standards in corporate
          social responsibility ensure that value is shared with its various
          stakeholders. Its governance system and organisational structure also
          provide a strategic lever for managing and measuring the impact from
          its various activities on its entire ecosystem.
        </p>
        <p v-else-if="currentLanguage === 'fr'">
          BANK OF AFRICA a développé un modèle économique orienté vers la
          création et le partage de valeur, en capitalisant sur son
          positionnement de banque responsable, inspiré par une vision orientée
          vers le développement durable du continent. Les axes stratégiques
          définis par BANK OF AFRICA, portés à travers ses différents métiers,
          contribuent à sa performance et au renforcement de sa solidité
          financière. A travers son engagement et son alignement aux standards
          internationaux en matière de responsabilité, BANK OF AFRICA assure un
          partage de la valeur auprès de ses différentes parties prenantes. Sa
          gouvernance et son organisation sont également un levier stratégique
          pour le pilotage et la mesure de l'impact de ses différentes activités
          sur l'ensemble de son écosystème.
        </p>
        <router-link
          to="/value-model"
          class="py-2 px-3 text-lg rounded-lg text-white bg-primary hover:bg-accent cursor-pointer transition-all"
        >
          {{ t("common.read_more") }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useLanguage } from "@/composables/useLanguage";

const { currentLanguage } = useLanguage();

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
