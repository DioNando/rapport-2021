<template>
  <section class="p-24">
    <div class="mb-12">
      <h1 class="text-4xl text-primary font-bold uppercase mb-6">
        2021 Reports | Rapports 2021
      </h1>
      <div>
        <ul>
          <li class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3 text-xl font-bold">
              <img src="/assets/images/icons/pdf.svg" />
              <p v-if="currentLanguage === 'fr'">
                {{ reportSections[0].titleFr }}
              </p>
              <p v-else-if="currentLanguage === 'en'">
                {{ reportSections[0].titleEn }}
              </p>
            </div>
            <button @click="openPDF(reportSections[0].pdfUrl)" class="py-2 px-3 text-lg rounded-lg text-white bg-primary hover:bg-accent cursor-pointer transition-all">
              {{ t("common.download") }}
            </button>
          </li>
          <li class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3 text-xl font-bold">
              <img src="/assets/images/icons/pdf.svg" />
              <p v-if="currentLanguage === 'fr'">
                {{ reportSections[1].titleFr }}
              </p>
              <p v-else-if="currentLanguage === 'en'">
                {{ reportSections[1].titleEn }}
              </p>
            </div>
            <button @click="openPDF(reportSections[1].pdfUrl)" class="py-2 px-3 text-lg rounded-lg text-white bg-primary hover:bg-accent cursor-pointer transition-all">
              {{ t("common.download") }}
            </button>
          </li>
          <li class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3 text-xl font-bold">
              <img src="/assets/images/icons/pdf.svg" />
              <p v-if="currentLanguage === 'fr'">
                {{ reportSections[2].titleFr }}
              </p>
              <p v-else-if="currentLanguage === 'en'">
                {{ reportSections[2].titleEn }}
              </p>
            </div>
            <button @click="openPDF(reportSections[2].pdfUrl)" class="py-2 px-3 text-lg rounded-lg text-white bg-primary hover:bg-accent cursor-pointer transition-all">
              {{ t("common.download") }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="mb-12">
      <h1 class="text-4xl text-primary font-bold uppercase mb-6">
        Sustainable Development Reports 2021 | Rapports Développement Durable
        2021
      </h1>
      <div>
        <ul>
          <li class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3 text-xl font-bold">
              <img src="/assets/images/icons/pdf.svg" />
              <p v-if="currentLanguage === 'fr'">
                {{ reportSections[3].titleFr }}
              </p>
              <p v-else-if="currentLanguage === 'en'">
                {{ reportSections[3].titleEn }}
              </p>
            </div>
            <button @click="openPDF(reportSections[3].pdfUrl)" class="py-2 px-3 text-lg rounded-lg text-white bg-primary hover:bg-accent cursor-pointer transition-all">
              {{ t("common.download") }}
            </button>
          </li>
          <li class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3 text-xl font-bold">
              <img src="/assets/images/icons/pdf.svg" />
              <p v-if="currentLanguage === 'fr'">
                {{ reportSections[4].titleFr }}
              </p>
              <p v-else-if="currentLanguage === 'en'">
                {{ reportSections[4].titleEn }}
              </p>
            </div>
            <button @click="openPDF(reportSections[4].pdfUrl)" class="py-2 px-3 text-lg rounded-lg text-white bg-primary hover:bg-accent cursor-pointer transition-all">
              {{ t("common.download") }}
            </button>
          </li>
          <li class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3 text-xl font-bold">
              <img src="/assets/images/icons/pdf.svg" />
              <p v-if="currentLanguage === 'fr'">
                {{ reportSections[5].titleFr }}
              </p>
              <p v-else-if="currentLanguage === 'en'">
                {{ reportSections[5].titleEn }}
              </p>
            </div>
            <button @click="openPDF(reportSections[5].pdfUrl)" class="py-2 px-3 text-lg rounded-lg text-white bg-primary hover:bg-accent cursor-pointer transition-all">
              {{ t("common.download") }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <h1 class="text-4xl text-primary font-bold uppercase mb-6">
        Abridged Reports 2021 in six languages | Rapports Abrégés 2021 en six
        langues
      </h1>
      <div>
        <ul>
          <li class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3 text-xl font-bold">
              <img src="/assets/images/icons/pdf.svg" />
              <p v-if="currentLanguage === 'fr'">
                {{ reportSections[6].titleFr }}
              </p>
              <p v-else-if="currentLanguage === 'en'">
                {{ reportSections[6].titleEn }}
              </p>
            </div>
            <button @click="openPDF(reportSections[6].pdfUrl)" class="py-2 px-3 text-lg rounded-lg text-white bg-primary hover:bg-accent cursor-pointer transition-all">
              {{ t("common.download") }}
            </button>
          </li>
          <li class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3 text-xl font-bold">
              <img src="/assets/images/icons/pdf.svg" />
              <p v-if="currentLanguage === 'fr'">
                {{ reportSections[7].titleFr }}
              </p>
              <p v-else-if="currentLanguage === 'en'">
                {{ reportSections[7].titleEn }}
              </p>
            </div>
            <button @click="openPDF(reportSections[7].pdfUrl)" class="py-2 px-3 text-lg rounded-lg text-white bg-primary hover:bg-accent cursor-pointer transition-all">
              {{ t("common.download") }}
            </button>
          </li>
          <li class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3 text-xl font-bold">
              <img src="/assets/images/icons/pdf.svg" />
              <p v-if="currentLanguage === 'fr'">
                {{ reportSections[8].titleFr }}
              </p>
              <p v-else-if="currentLanguage === 'en'">
                {{ reportSections[8].titleEn }}
              </p>
            </div>
            <button @click="openPDF(reportSections[8].pdfUrl)" class="py-2 px-3 text-lg rounded-lg text-white bg-primary hover:bg-accent cursor-pointer transition-all">
              {{ t("common.download") }}
            </button>
          </li>
          <li class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3 text-xl font-bold">
              <img src="/assets/images/icons/pdf.svg" />
              <p v-if="currentLanguage === 'fr'">
                {{ reportSections[9].titleFr }}
              </p>
              <p v-else-if="currentLanguage === 'en'">
                {{ reportSections[9].titleEn }}
              </p>
            </div>
            <button @click="openPDF(reportSections[9].pdfUrl)" class="py-2 px-3 text-lg rounded-lg text-white bg-primary hover:bg-accent cursor-pointer transition-all">
              {{ t("common.download") }}
            </button>
          </li>
          <li class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3 text-xl font-bold">
              <img src="/assets/images/icons/pdf.svg" />
              <p v-if="currentLanguage === 'fr'">
                {{ reportSections[10].titleFr }}
              </p>
              <p v-else-if="currentLanguage === 'en'">
                {{ reportSections[10].titleEn }}
              </p>
            </div>
            <button @click="openPDF(reportSections[10].pdfUrl)" class="py-2 px-3 text-lg rounded-lg text-white bg-primary hover:bg-accent cursor-pointer transition-all">
              {{ t("common.download") }}
            </button>
          </li>
          <li class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3 text-xl font-bold">
              <img src="/assets/images/icons/pdf.svg" />
              <p v-if="currentLanguage === 'fr'">
                {{ reportSections[11].titleFr }}
              </p>
              <p v-else-if="currentLanguage === 'en'">
                {{ reportSections[11].titleEn }}
              </p>
            </div>
            <button @click="openPDF(reportSections[11].pdfUrl)" class="py-2 px-3 text-lg rounded-lg text-white bg-primary hover:bg-accent cursor-pointer transition-all">
              {{ t("common.download") }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import { useLanguage } from "@/composables/useLanguage";

const { currentLanguage } = useLanguage();

const { locale, t } = useI18n();

const openPDF = (pdfUrl) => {
  // const pdfUrl = locale.value === "en" ? section.pdfUrlEn : section.pdfUrlFr;
  window.open(pdfUrl, "_blank");
};

const reportSections = ref([
  {
    titleFr: "Rapport Annuel Intégré 2021 FR",
    titleEn: "Integrated Annual Report 2021 FR",
    pdfUrl: "/assets/pdfs/RAPPORT-RAI-2021-VF-1.pdf",
  },
  {
    titleFr: "Rapport Annuel Intégré 2021 ANG",
    titleEn: "Integrated Annual Report 2021 ENG",
    pdfUrl: "/assets/pdfs/RAPPORT-RAI-DEF-NA-XGM-ANG-8_9.pdf",
  },
  {
    titleFr: "Rapport Annuel Intégré 2021 AR",
    titleEn: "Integrated Annual Report 2021 AR",
    pdfUrl: "/assets/pdfs/RAPPORT-RAI-XGM-ARABE-28_11.pdf",
  },
  {
    titleFr: "Rapport Développement Durable 2021 FR",
    titleEn: "Sustainable Development Report 2021 FR",
    pdfUrl: "/assets/pdfs/RAPPORT-DD-2021-VF.pdf",
  },
  {
    titleFr: "Rapport Développement Durable 2021 ANG",
    titleEn: "Sustainable Report 2021 ENG",
    pdfUrl: "/assets/pdfs/RAPPORT-DD-ANG-8_9_2022-DEF.pdf",
  },
  {
    titleFr: "Rapport Développement Durable 2021 AR",
    titleEn: "Sustainability Report 2021 AR",
    pdfUrl: "/assets/pdfs/RAPPORT-DD-VA-2022-29_11.pdf",
  },
  {
    titleFr: "Rapport Abrégé 2021 Français",
    titleEn: "Abridged Report 2021 French",
    pdfUrl: "/assets/pdfs/ABREGE-2021-XG-VF-6_9.pdf",
  },
  {
    titleFr: "Rapport Abrégé 2021 Anglais",
    titleEn: "Abridged Report 2021 English",
    pdfUrl: "/assets/pdfs/ABREGE-2021-XG-VANG-6_9.pdf",
  },
  {
    titleFr: "Rapport Abrégé 2021 Espagnol",
    titleEn: "Abridged Report 2021 Spanish",
    pdfUrl: "/assets/pdfs/ABREGE-2021-XG-ESP-6_9.pdf",
  },
  {
    titleFr: "Rapport Abrégé 2021 Mandarin",
    titleEn: "Abridged Report 2021 Mandarin",
    pdfUrl: "/assets/pdfs/ABREGE-2021-XG-MANDARIN-NA-9_9.pdf",
  },
  {
    titleFr: "Rapport Abrégé 2021 Arabe",
    titleEn: "Abridged Report 2021 Arabic",
    pdfUrl: "/assets/pdfs/ABREGE-2021-XG-ARABE-6_9.pdf",
  },
  {
    titleFr: "Rapport Abrégé 2021 Tifinagh",
    titleEn: "Abridged Report 2021 Tifinagh",
    pdfUrl: "/assets/pdfs/ABREGE-2021-XG-TIFINAGH-6_9.pdf",
  },
]);
</script>

<style lang="scss" scoped>
img {
  height: 3rem;
}
</style>
