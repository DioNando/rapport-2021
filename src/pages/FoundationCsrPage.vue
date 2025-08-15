<template>
  <section class="px-4 md:px-24">
    <img
      src="/assets/images/backgrounds/bg_header_Fondation_BMCE.webp"
      class="rounded-xl"
    />
    <h1 class="text-4xl text-primary font-bold uppercase my-12">
      {{ t("navigation.foundation_csr") }}
    </h1>
    <div class="text-lg mb-10">
      <p v-if="currentLanguage === 'en'">
        BMCE Bank Foundation has played a pioneering role in promoting education
        and protecting the environment by educational means. Since it was
        founded in 1995, BMCE Bank Foundation has embodied the Group's attitude
        to human development and social impact. Through its Medersat.com
        network, BMCE Bank Foundation has striven to improve access to education
        in rural communities and raise awareness among African children about
        environmental issues. Each year, Medersat.com provides an education to
        more than 12,000 children from disadvantaged backgrounds in Morocco as
        well as hundreds of children in sub-Saharan Africa. BMCE Bank
        Foundation's commitment to environmental causes is further highlighted
        through the Eco-Schools programme, run in partnership with the Mohammed
        VI Foundation for Environmental Protection. As well as integrating
        environmental aspects into the construction of schools, this programme
        is an educational project that raises pupils' awareness about
        sustainable development issues and invites them to adopt eco-friendly
        behaviour.
      </p>
      <p v-else-if="currentLanguage === 'fr'">
        La Fondation BMCE Bank a été pionnière dans sa mission de promotion de
        l'enseignement et de préservation de l'environnement par le biais de
        l'éducation. Depuis sa création en 1995, la Fondation BMCE Bank éclaire
        les choix du Groupe en matière de développement humain et d'impact sur
        la Société. A travers le Réseau Medersat.com, la Fondation BMCE Bank
        agit pour l'amélioration de l'accès à l'éducation dans les communautés
        rurales et pour l'éveil des consciences des enfants sur les
        problématiques environnementales. Medersat.com permet de scolariser
        chaque année plus de 12 000 élèves issus de milieux défavorisés au
        Maroc, sans compter le nombre d'enfants scolarisés dans les écoles en
        Afrique subsaharienne. Quant à la vocation environnementale de la
        Fondation BMCE Bank, elle s'exprime à travers le programme Éco–Écoles,
        mené en partenariat avec la Fondation Mohammed VI pour la Protection de
        l'Environnement. Ce programme prend en considération la construction des
        écoles en intégrant des composantes environnementales et constitue
        également un outil pédagogique pour sensibiliser les élèves à des
        notions de développement durable et les invite à adopter des
        comportements respectueux de l'environnement.
      </p>
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
              ? '/assets/images/backgrounds/axes-Strategiques-uk.gif'
              : '/assets/images/backgrounds/axes-Strategiques-1.gif'
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
  height: 90vh;

  img {
    height: 100%;
    width: 100%;
  }
}
</style>
