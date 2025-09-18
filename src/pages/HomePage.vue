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
      <h3 class="flex-1 text-4xl text-primary font-bold mb-6">
        <span v-if="currentLanguage === 'en'">
          # A model for creating and sharing value</span
        >
        <span v-else-if="currentLanguage === 'fr'">
          # Un modèle de création et de partage de valeur</span
        >
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
  <section class="kpis-section px-24">
    <div
      class="kpis-1 flex items-start justify-around gap-12 py-24 font-bold text-gray-500 text-center"
    >
      <div class="flex flex-col gap-4 items-center">
        <img
          :src="
            currentLanguage === 'en'
              ? '/assets/images/backgrounds/1st.png'
              : '/assets/images/backgrounds/1er.png'
          "
          alt=""
        />
        <p>
          {{ t("kpis.first_kpi") }}
        </p>
      </div>
      <div class="flex flex-col gap-4 items-center">
        <img
          :src="
            currentLanguage === 'en'
              ? '/assets/images/backgrounds/2nd.png'
              : '/assets/images/backgrounds/2e.png'
          "
          alt=""
        />
        <p>
          {{ t("kpis.second_kpi") }}
        </p>
      </div>
      <div class="flex flex-col gap-4 items-center">
        <img
          :src="
            currentLanguage === 'en'
              ? '/assets/images/backgrounds/3rd.png'
              : '/assets/images/backgrounds/3e.png'
          "
          alt=""
        />
        <p>
          {{ t("kpis.third_kpi") }}
        </p>
      </div>
    </div>
    <div class="kpis-2">
      <!-- 10 elements -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 p-12">
        <div
          v-for="(item, index) in kpisElements"
          :key="item.id"
          :ref="el => setKpiRef(el, index)"
          class="flex flex-col items-center text-center space-y-4"
        >
          <img :src="item.src" :alt="item.title" class="object-contain" />
          <h4 class="text-5xl font-extrabold text-secondary">{{ counterValues[index] || '0' }}</h4>
          <p class="text-xl font-bold text-secondary">
            {{ currentLanguage === "en" ? item.subtitleEn : item.subtitleFr }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="p-4 md:p-32 relative">
    <img
      class="absolute top-2 left-2 -z-10"
      src="/assets/images/backgrounds/Plan-de-travail-–-6.webp"
      alt=""
    />
    <!-- v-for de 4 cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div
        v-for="card in cardsData"
        :key="card.id"
        class="bg-primary shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 relative"
      >
        <img
          :src="card.src"
          :alt="card.titleEn"
          class="w-full h-64 object-cover"
        />
        <div class="p-6 flex flex-col">
          <h3 class="text-xl font-bold text-white mb-4">
            # {{ currentLanguage === "en" ? card.titleEn : card.titleFr }}
          </h3>
          <router-link
            :to="card.url"
            class="self-end inline-block py-2 px-4 text-sm text-white bg-accent hover:bg-secondary cursor-pointer transition-all absolute bottom-0 right-0"
          >
            {{ t("common.read_more") }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <section class="slides-container p-4 py-24">
    <HomeCarousel />
  </section>
  <section class="text-center">
    <h3 class="text-4xl text-primary font-semibold mt-4">
      {{ t("home.commitments_distinctions") }}
    </h3>
    <div class="px-24 mt-4">
      <!-- Carousel components -->
      <LogoCarousel />
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useLanguage } from "@/composables/useLanguage";
import { useCounterAnimation, easingFunctions } from "@/composables/useCounterAnimation";
import { useViewportCounters } from "@/composables/useViewportCounters";
import { ref, onMounted, computed } from "vue";

const { currentLanguage } = useLanguage();

import HighlightsVideo from "@/components/ui/HighlightsVideo.vue";
import LogoCarousel from "@/components/ui/LogoCarousel.vue";
import HomeCarousel from "../components/ui/HomeCarousel.vue";

const { t } = useI18n();

// Refs pour les éléments KPI
const kpiRefs = ref([]);
const counterAnimations = ref([]);
const counterValues = ref([]);

// Composable pour la détection de visibilité
const { observeMultipleElements } = useViewportCounters({
  threshold: 0.4,
  rootMargin: '0px 0px -100px 0px'
});

// Fonction pour définir les refs des éléments KPI
function setKpiRef(el, index) {
  if (el) {
    kpiRefs.value[index] = el;
  }
}

const kpisElements = ref([
  {
    id: 1,
    src: "/assets/images/backgrounds/Icons-1.svg",
    title: "32",
    subtitleEn: "Countries",
    subtitleFr: "Pays",
  },
  {
    id: 2,
    src: "/assets/images/backgrounds/Icons-2.svg",
    title: "6.6M",
    subtitleEn: "Customers",
    subtitleFr: "Clients",
  },
  {
    id: 3,
    src: "/assets/images/backgrounds/Icons-3.svg",
    title: "14 900",
    subtitleEn: "Employers",
    subtitleFr: "Collaborateurs",
  },
  {
    id: 4,
    src: "/assets/images/backgrounds/Icons-4.svg",
    title: "345MMDH",
    subtitleEn: "Total assets",
    subtitleFr: "Total bilan",
  },
  {
    id: 5,
    src: "/assets/images/backgrounds/Icons-5.svg",
    title: "2 000",
    subtitleEn: "Points of sale",
    subtitleFr: "Points de vente",
  },
  {
    id: 6,
    src: "/assets/images/backgrounds/Icons-–-3.svg",
    title: "4.11",
    subtitleEn: "CO2 footprint per employee",
    subtitleFr: "Empreinte CO2 par employé",
  },
  {
    id: 7,
    src: "/assets/images/backgrounds/Icons-–-4.svg",
    title: "42%",
    subtitleEn: "Gender parity -women/men- in 2021 -vs. 40% in 2020",
    subtitleFr: "Pourcentage des femmes dans la banque",
  },
  {
    id: 8,
    src: "/assets/images/backgrounds/Icons.svg",
    title: "3.2",
    subtitleEn: "Billion dirhams Credits for the environment",
    subtitleFr: "Milliards DH Crédits en faveur de l'environnement",
  },
  {
    id: 9,
    src: "/assets/images/backgrounds/Icons-–-5.svg",
    title: "47%",
    subtitleEn: "Of staff benefiting from training vs. 39% in 2020",
    subtitleFr: "Effectif bénéficiant d'une formation vs. 39% en 2020",
  },
  {
    id: 10,
    src: "/assets/images/backgrounds/Icons-–-6.svg",
    title: "6 115",
    subtitleEn: "Days / men of training Vs. 2,392 in 2020",
    subtitleFr: "Jours / hommes de formation Vs. 2 392 en 2020",
  },
]);

// Initialiser les animations de compteurs
function initCounterAnimations() {
  counterAnimations.value = kpisElements.value.map((item, index) => {
    const animation = useCounterAnimation(
      item.title, 
      2000 + (index * 200), // Durée variable pour un effet échelonné
      easingFunctions.easeOutCubic
    );
    
    // Stocker la valeur affichée
    counterValues.value[index] = animation.displayValue;
    
    return animation;
  });
}

// Fonction pour démarrer toutes les animations
function startAllAnimations() {
  if (kpiRefs.value.length === 0 || counterAnimations.value.length === 0) return;

  const elementsData = kpiRefs.value.map((element, index) => ({
    element,
    counterAnimation: counterAnimations.value[index],
    delay: 0 // Pas de délai - toutes les animations se déclenchent simultanément
  })).filter(data => data.element); // Filtrer les éléments null/undefined

  observeMultipleElements(elementsData, 100);
}

// Initialiser au montage
onMounted(() => {
  initCounterAnimations();
  
  // Attendre le prochain tick pour que les refs soient disponibles
  setTimeout(() => {
    startAllAnimations();
  }, 100);
});

const cardsData = ref([
  {
    id: 1,
    src: "/assets/images/backgrounds/bg_header_page.webp",
    titleEn: "Sustainable and responsible development",
    titleFr: "Un développement durable et responsable",
    url: "/sustainable-responsible",
  },
  {
    id: 2,
    src: "/assets/images/backgrounds/bg_header_Fondation_BMCE.webp",
    titleEn: "BMCE Bank foundation, a pillar of Bank of Africa's CSR strategy",
    titleFr:
      "La fondation BMCE Bank, pilier de la stratégie RSE de Bank of Africa",
    url: "/foundation-csr",
  },
  {
    id: 3,
    src: "/assets/images/backgrounds/bg_header_gouvernance.webp",
    titleEn: "Sustainable development underpinning governance system",
    titleFr: "Une gouvernance soutenue par le développement durable",
    url: "/governance",
  },
  {
    id: 4,
    src: "/assets/images/backgrounds/bg_header_page_management.webp",
    titleEn:
      "A committed management team, successfully enacting group strategy",
    titleFr: "Un management engagé au service des orientations stratégiques",
    url: "/management-team",
  },
]);
</script>

<style lang="scss" scoped>
.chairman-message {
  // width: 400px;
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

.kpis-section {
  // height: 100vh;
  background: url("/assets/images/backgrounds/Plan-de-travail-–-1.png");
  background-repeat: no-repeat;
  background-size: cover;

  .kpis-1 img {
    height: 5rem;
    aspect-ratio: 1/1;
  }

  .kpis-2 img {
    height: 6rem;
    aspect-ratio: 1/1;
  }
}

.slides-container {
  // height: 100vh;
  background: url("/assets/images/backgrounds/slide_bg.webp");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
