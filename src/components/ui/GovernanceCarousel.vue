<template>
  <div class="content-carousel py-8">
    <!-- Loading state -->
    <div v-if="governanceSlides.length === 0" class="flex justify-center items-center h-32">
      <div class="text-gray-500">{{ currentLanguage === 'en' ? 'Loading...' : 'Chargement...' }}</div>
    </div>
    
    <!-- Carousel -->
    <swiper
      v-else
      :modules="modules"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :navigation="true"
      :effect="'fade'"
      :fade-effect="{
        crossFade: true,
      }"
      class="content-swiper"
    >
      <swiper-slide v-for="(slide, i) in governanceSlides" :key="i" class="h-auto px-2 lg:px-64">
        <div class="slide-card text-gray-600">
          <div class="flex flex-col lg:flex-row gap-8">
            <img
              :src="slide.img"
              :alt="slide.title"
              class="w-72 h-full object-cover"
            />
            <div>
              <h3 class="text-2xl font-bold text-primary uppercase">{{ slide.title }}</h3>
              <h4 class="text-2xl font-bold text-accent">
                <span v-if="currentLanguage === 'en'">{{ slide.subtitleEn }}</span>
                <span v-else-if="currentLanguage === 'fr'">{{ slide.subtitleFr }}</span>
              </h4>
              <div class="mt-4">
                <p v-if="currentLanguage === 'en'">{{ slide.content1En }}</p>
                <p v-else-if="currentLanguage === 'fr'">
                  {{ slide.content1Fr }}
                </p>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <p v-if="currentLanguage === 'en'">
              {{ slide.content2En }}
            </p>
            <p v-else-if="currentLanguage === 'fr'">
              {{ slide.content2Fr }}
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useLanguage } from "@/composables/useLanguage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const { currentLanguage } = useLanguage();
const modules = [Navigation, Pagination, Autoplay, EffectFade];

// Reactive data for governance slides
const governanceSlides = ref([]);

// Load governance slides data
onMounted(async () => {
  try {
    const response = await fetch('/assets/data/governanceSlides.json');
    const data = await response.json();
    governanceSlides.value = data;
  } catch (error) {
    console.error('Error loading governance slides:', error);
  }
});
</script>

<style lang="scss" scoped>
.content-carousel {
  .content-swiper {
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
