<template>
  <div class="management-carousel py-8">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
      :navigation="true"
      :effect="'fade'"
      :fade-effect="{
        crossFade: true,
      }"
      class="management-swiper"
    >
      <!-- Element 1 -->
      <swiper-slide class="h-auto px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              Comité présidentiel
            </h3>
            <h4 class="text-xl font-medium text-gray-600 mb-6">
              Leadership Stratégique
            </h4>
            <div class="space-y-4 text-gray-700 mb-6">
              <p class="text-base leading-relaxed">
                L'équipe de direction générale pilote la vision stratégique de
                Bank of Africa et assure l'exécution des orientations définies
                par le Conseil d'Administration.
              </p>
            </div>
            <button
              @click="openPDF()"
              class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              {{ t("common.read_more") }}
            </button>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 2 -->
      <swiper-slide class="h-auto px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h5
              class="text-white text-2xl font-semibold uppercase bg-accent inline-block px-4 py-2 mb-4"
            >
              Organes de dirigeance
            </h5>
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              Comité exécutif groupe
            </h3>
            <h4 class="text-xl font-medium text-gray-600 mb-6">
              Coordination Opérationnelle
            </h4>
            <div class="space-y-4 text-gray-700 mb-6">
              <p class="text-base leading-relaxed">
                Le Comité de Direction coordonne les activités opérationnelles
                et veille à la mise en œuvre efficace des stratégies à travers
                toutes les divisions de la banque.
              </p>
            </div>
            <button
              @click="openPDF()"
              class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              {{ t("common.read_more") }}
            </button>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 3 -->
      <swiper-slide class="h-auto px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              Comité exécutif Maroc & international
            </h3>
            <h4 class="text-xl font-medium text-gray-600 mb-6">
              Exécution Excellence
            </h4>
            <div class="space-y-4 text-gray-700 mb-6">
              <p class="text-base leading-relaxed">
                L'équipe de management opérationnel traduit les orientations
                stratégiques en actions concrètes et mesurables sur le terrain.
              </p>
            </div>
            <button
              @click="openPDF()"
              class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              {{ t("common.read_more") }}
            </button>
          </div>
        </div>
      </swiper-slide>
      <!-- Comité de coordination du contrôle interne groupe -->
      <!-- Comité technique ALM groupe -->
      <!-- Comité de pilotage & de gestion des risques groupe -->
      <!-- Comité de fonctionnement / comité PCA -->
      <!-- Comité environnemental, social et soutenabilité -->
      <!-- Strategy task force  -->
      <!-- Comité de gouvernance, nominations et rémunérations -->
      <!-- Comité des risques groupe -->
      <!-- Comité d'audit et de contrôle interne groupe -->
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useI18n } from "vue-i18n";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const { locale, t } = useI18n();
const modules = [Navigation, Pagination, Autoplay, EffectFade];

const openPDF = () => {
  const pdfUrl =
    locale.value === "en"
      ? "/assets/pdfs/Comite_UK.pdf"
      : "/assets/pdfs/Comites.pdf";
  window.open(pdfUrl, "_blank");
};
</script>

<style lang="scss" scoped>
.management-carousel {
  .management-swiper {
    :deep(.swiper-pagination) {
      bottom: 10px;

      .swiper-pagination-bullet {
        background-color: #cbd5e1;
        opacity: 1;
        width: 12px;
        height: 12px;

        &.swiper-pagination-bullet-active {
          background-color: var(--color-primary, #1e40af);
        }
      }
    }

    :deep(.swiper-button-next),
    :deep(.swiper-button-prev) {
      color: var(--color-primary, #1e40af);
      width: 22px;
      height: 22px;
      border-radius: 50%;

      &:after {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}
</style>
