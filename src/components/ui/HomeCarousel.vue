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
            <h3 class="text-2xl font-bold text-primary mb-3">
              Un groupe bancaire d'envergure mondiale au service du
              développement de l'Afrique
            </h3>
            <p class="text-base leading-relaxed">
              L'équipe de direction générale pilote la vision stratégique de
              Bank of Africa et assure l'exécution des orientations définies par
              le Conseil d'Administration.
            </p>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 2 -->
      <swiper-slide class="h-auto px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h3 class="text-2xl font-bold text-primary mb-3">
              Répartition du capital de BANK OF AFRICA au 31 décembre 2021
            </h3>
            <p class="text-base leading-relaxed">
              Le Comité de Direction coordonne les activités opérationnelles et
              veille à la mise en œuvre efficace des stratégies à travers toutes
              les divisions de la banque.
            </p>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 3 -->
      <swiper-slide class="h-auto px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h3 class="text-2xl font-bold text-primary mb-3">
              La Fondation BMCE BANK, pilier majeur de la stratégie RSE de BANK
              OF AFRICA
            </h3>
            <p class="text-base leading-relaxed">
              L'équipe de management opérationnel traduit les orientations
              stratégiques en actions concrètes et mesurables sur le terrain.
            </p>
          </div>
        </div>
      </swiper-slide>
      <!-- Element 4 -->
      <swiper-slide class="h-auto px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h3 class="text-2xl font-bold text-primary mb-3">
              Une Gouvernance soutenue par le développement durable
            </h3>
            <p class="text-base leading-relaxed">
              La gouvernance de BANK OF AFRICA repose sur des principes de
              transparence, d'éthique et de responsabilité sociale, garantissant
              un développement durable et inclusif.
            </p>
          </div>
        </div>
      </swiper-slide>
      <!-- Element 5 -->
      <swiper-slide class="h-auto px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h3 class="text-2xl font-bold text-primary mb-3">
              O Capital Group, appartenance à un Groupe engagé
            </h3>
            <p class="text-base leading-relaxed">
              En tant que membre du O Capital Group, BANK OF AFRICA bénéficie du
              soutien et de l'expertise d'un groupe financier international
              engagé dans le développement économique et social de l'Afrique.
            </p>
          </div>
        </div>
      </swiper-slide>
      <!-- Element 6 -->
      <swiper-slide class="h-auto px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h3 class="text-2xl font-bold text-primary mb-3">
              Un positionnement solide et une performance reconnue
            </h3>
            <p class="text-base leading-relaxed">
              BANK OF AFRICA se distingue par un positionnement stratégique
              solide et une performance reconnue sur le marché bancaire
              africain, soutenue par des valeurs de responsabilité et de
              durabilité.
            </p>
          </div>
        </div>
      </swiper-slide>
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

const { t } = useI18n();
const modules = [Navigation, Pagination, Autoplay, EffectFade];
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
