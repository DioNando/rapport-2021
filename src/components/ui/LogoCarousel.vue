<template>
  <div class="logo-carousel pt-8">
    <swiper
      :modules="modules"
      :slides-per-view="10"
      :space-between="30"
      :loop="true"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
      :navigation="false"
      :breakpoints="{
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      }"
      class="logo-swiper"
    >
      <swiper-slide v-for="logo in logos" :key="logo.id" class="flex justify-center items-center">
        <img 
          :src="logo.src" 
          :alt="logo.alt" 
          class="h-24 w-auto object-contain cursor-grabbing"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Pagination, Autoplay];

const logos = [
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
  { id: 20, src: '/assets/images/logos/we4she.png', alt: 'WEP' },
  { id: 21, src: '/assets/images/logos/wep_1.png', alt: 'WEP 1' },
  { id: 22, src: '/assets/images/logos/wep.png', alt: 'WEP' }
];
</script>

<style lang="scss" scoped>
.logo-carousel {
  .logo-swiper {
    padding-bottom: 40px;
    
    :deep(.swiper-pagination) {
      bottom: 0;
      
      .swiper-pagination-bullet {
        background-color: #cbd5e1;
        opacity: 1;
        
        &.swiper-pagination-bullet-active {
          background-color: var(--color-primary, #1e40af);
        }
      }
    }
    
    :deep(.swiper-button-next),
    :deep(.swiper-button-prev) {
      color: var(--color-primary, #1e40af);
      
      &:after {
        font-size: 20px;
      }
    }
  }
}
</style>