<template>
  <section class="p-24">
    <h1 class="text-4xl text-primary font-bold uppercase mb-12">
      {{ t("navigation.value_model") }}
    </h1>
    <article class="text-xl">
      <div v-if="currentLanguage === 'en'">
        <p>
          BANK OF AFRICA has developed a business model which focuses on
          creating and sharing value by leveraging its reputation as a socially
          responsible bank.The model is inspired by its vision of promoting
          sustainable development in Africa. BANK OF AFRICA's strategic
          priorities, endorsed by its various business lines, underpin its
          performance and bolster its financial solidity. BANK OF AFRICA's
          commitment and adherence to international standards in corporate
          social responsibility ensure that value is shared with its various
          stakeholders. Its governance system and organisational structure also
          provide a strategic lever for managing and measuring the impact from
          its various activities on its entire ecosystem.
        </p>
      </div>
      <div v-else-if="currentLanguage === 'fr'">
        <p>
          BANK OF AFRICA a développé un modèle économique orienté vers la
          création et le partage de valeur, en capitalisant sur son
          positionnement de banque responsable, inspiré par une vision orientée
          vers le développement durable du continent. Les axes stratégiques
          définis par BANK OF AFRICA, portés à travers ses différents métiers,
          contribuent à sa performance et au renforcement de sa solidité
          financière. A travers son engagement et son alignement aux standards
          internationaux en matière de responsabilité, BANK OF AFRICA assure un
          partage de la valeur auprès de ses différentes parties prenantes. Sa
          gouvernance et son organisation sont également un levier stratégique
          pour le pilotage et la mesure de l'impact de ses différentes activités
          sur l'ensemble de son écosystème.
        </p>
      </div>
    </article>
    <img :src="currentLanguage === 'en' ? '/assets/images/backgrounds/A-MODEL-FOR-CREATING-AND-SHARING-VALUE.png' : '/assets/images/backgrounds/Un-modele-de-creation-et-de-partage-de-valeur.webp'" alt="Value Model" class="mt-12" />
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useLanguage } from "@/composables/useLanguage";

const { currentLanguage } = useLanguage();
const { t } = useI18n();
</script>

<style scoped></style>
