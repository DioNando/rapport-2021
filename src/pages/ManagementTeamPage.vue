<template>
  <section class="px-4 md:px-24">
    <img
      src="/assets/images/backgrounds/bg_header_page_management.webp"
      class="rounded-xl"
    />
    <h1 class="text-4xl text-primary font-bold uppercase my-12">
      {{ t("navigation.management_team") }}
    </h1>
    <div class="text-lg mb-10">
      <div v-if="currentLanguage === 'en'">
        <p>
          In 2021, BANK OF AFRICA introduced a new organisational structure to
          more closely integrate core functions across the Group. These include
          steering the Group(s subsidiaries, managing risk, generating
          synergies, pooling skills and making efficiency gains to boost sales
          and create value. The new governance system has seen the managerial
          structure tightened with three "Executive General Manager" posts
          created:
        </p>
        <ul class="list-disc pl-5">
          <li>
            The department reporting to the Executive General Manager
            responsible for CIB and Banking in Morocco encompasses Banking in
            Morocco, Loan Recovery, Corporate and Commercial Banking, Investment
            Banking and International Banking, with each serving the needs of
            different customer segments.
          </li>
          <li>
            The department reporting to the Executive General Manager
            responsible for Africa encompasses all business carried out on the
            African continent, excluding Morocco, and operates under the BANK OF
            AFRICA, LCB and Banque de Développement du Mali brands.
          </li>
          <li>
            The department reporting to the Executive General Manager
            responsible for Group Functions and Operations encompasses both
            Finance and transversal functions relating to Technology, Processes
            and Organisation, Quality, Logistics and Legal, as well as
            overseeing those subsidiaries which are an extension of these
            businesses.
          </li>
        </ul>
        <p>
          To ensure that operations are monitored regularly, the Chairman's
          Committee is responsible for steering Group strategy alongside 7 other
          committees with more specific responsibilities.
        </p>
      </div>
      <div v-else-if="currentLanguage === 'fr'">
        <p>
          En 2021, BANK OF AFRICA a introduit une nouvelle organisation visant à
          renforcer davantage son intégration en termes de pilotage de ses
          différentes entités constitutives, de maîtrise des risques, de
          synergies, de mutualisation de compétences et d'efficience au service
          de la dynamisation de l'action commerciale et de la création de
          valeur. La nouvelle organisation de BANK OF AFRICA a défini une
          structure managériale resserrée autour de trois Directions Générales
          Exécutives :
        </p>
        <ul class="list-disc pl-5">
          <li>
            La direction Générale Exécutive «CIB et Banque au Maroc» regroupe
            les activités de Banque au Maroc, le Recouvrement, Banque Corporate
            et Commerciale, Banque d'affaires et Banque de l'International,
            mises au service des différents segments de clientèle.
          </li>
          <li>
            La Direction Générale Exécutive «Afrique» intègre l'ensemble des
            activités menées sur le continent Africain, hormis le Maroc, sous
            l'enseigne Bank of Africa, LCB et la Banque de développement du
            Mali, fait savoir la même source.
          </li>
          <li>
            La Direction Générale Exécutive «Fonctions Groupe et Opérations»
            regroupe les fonctions régaliennes des risques et finances et les
            fonctions transverses, liées à la technologie, process et
            organisation, à la qualité, la logistique ou au juridique, avec
            supervision des filiales qui s'inscrivent dans le prolongement de
            ces métiers.
          </li>
        </ul>
        <p>
          Afin d'assurer un suivi régulier sur le plan opérationnel, un Comité
          Présidentiel et deux Comités Exécutifs assurent le pilotage
          stratégique du Groupe, en parallèle à 7 autres Comités plus
          spécifiques.
        </p>
      </div>
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
              ? '/assets/images/backgrounds/Un-management-engage-au-service-des-orientations-strategiques-UK.gif'
              : '/assets/images/backgrounds/Un-management-engage-au-service-des-orientations-strategiques.gif'
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
