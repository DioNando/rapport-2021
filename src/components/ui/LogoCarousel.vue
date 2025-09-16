<template>
  <div class="carousel-container overflow-hidden py-8">
    <div class="carousel-track" :style="{ transform: `translateX(-${currentOffset}px)` }">
      <div 
        v-for="logo in logos" 
        :key="logo.id" 
        class="carousel-item flex-shrink-0 px-4"
      >
        <img 
          :src="logo.src" 
          :alt="logo.alt" 
          class="h-16 w-auto object-contain"
        />
      </div>
    </div>
    <!-- Navigation dots -->
    <div class="flex justify-center mt-6 space-x-2">
      <button
        v-for="(dot, index) in Math.ceil(logos.length / itemsPerView)"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'w-3 h-3 rounded-full transition-all duration-300',
          currentSlide === index ? 'bg-primary' : 'bg-gray-300'
        ]"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentSlide = ref(0);
const currentOffset = ref(0);
const itemsPerView = ref(6); // Number of logos visible at once
const itemWidth = ref(200); // Width of each logo item including padding

const logos = ref([
  { id: 1, src: '/assets/images/logos/africa_investments.png', alt: 'Africa Investments' },
  { id: 2, src: '/assets/images/logos/arabia_corporate_social.png', alt: 'Arabia Corporate Social' },
  { id: 3, src: '/assets/images/logos/bureau_veritas.png', alt: 'Bureau Veritas' },
  { id: 4, src: '/assets/images/logos/climate_action.png', alt: 'Climate Action' },
  { id: 5, src: '/assets/images/logos/elu_service_client.png', alt: 'Élu Service Client' },
  { id: 6, src: '/assets/images/logos/equator_principles.png', alt: 'Equator Principles' },
  { id: 7, src: '/assets/images/logos/european_bank.png', alt: 'European Bank' },
  { id: 8, src: '/assets/images/logos/gip.png', alt: 'GIP' },
  { id: 9, src: '/assets/images/logos/global_compact.png', alt: 'Global Compact' },
  { id: 10, src: '/assets/images/logos/global_finance.png', alt: 'Global Finance' },
  { id: 11, src: '/assets/images/logos/gtr.png', alt: 'GTR' },
  { id: 12, src: '/assets/images/logos/ifc.png', alt: 'IFC' },
  { id: 13, src: '/assets/images/logos/impact.png', alt: 'Impact' },
  { id: 14, src: '/assets/images/logos/private_equity.png', alt: 'Private Equity' },
  { id: 15, src: '/assets/images/logos/private_equity (1).png', alt: 'Private Equity Alternative' },
  { id: 16, src: '/assets/images/logos/top_employers_institue.png', alt: 'Top Employers Institute' },
  { id: 17, src: '/assets/images/logos/unep_FI_principles.png', alt: 'UNEP FI Principles' },
  { id: 18, src: '/assets/images/logos/unep_finance_initiative.png', alt: 'UNEP Finance Initiative' },
  { id: 19, src: '/assets/images/logos/ve.png', alt: 'VE' },
  { id: 20, src: '/assets/images/logos/we4she.png', alt: 'We4She' },
  { id: 21, src: '/assets/images/logos/wep_1.png', alt: 'WEP 1' },
  { id: 22, src: '/assets/images/logos/wep.png', alt: 'WEP' }
]);

let autoplayInterval = null;

const goToSlide = (slideIndex) => {
  currentSlide.value = slideIndex;
  currentOffset.value = slideIndex * itemWidth.value * itemsPerView.value;
};

const nextSlide = () => {
  const maxSlides = Math.ceil(logos.value.length / itemsPerView.value);
  currentSlide.value = (currentSlide.value + 1) % maxSlides;
  goToSlide(currentSlide.value);
};

const startAutoplay = () => {
  autoplayInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style lang="scss" scoped>
.carousel-container {
  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .carousel-item {
    min-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    .carousel-track {
      animation-play-state: paused;
    }
  }
}
</style>