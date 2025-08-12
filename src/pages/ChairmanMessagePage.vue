<template>
  <section class="relative px-4 md:px-48 flex flex-col md:flex-row items-start gap-12">
    <img class="absolute right-32 top-0 -z-1" src="/assets/images/backgrounds/bg_mp.webp" />
    <div class="chairman-message">
      <div class="overflow-hidden rounded-2xl shadow-xl">
        <img
          src="/assets/images/backgrounds/Mot-du-President-Othman-BENJELLOUN.webp"
          alt=""
        />
      </div>
      <h3 class="text-3xl text-primary font-medium mt-4">
        {{ t("chairman_message.title") }}
      </h3>
      <p class="text-xl mt-3 text-wrap">
        {{ t("chairman_message.subtitle") }}
      </p>
    </div>
    <article class="text-xl">
      <h1 class="text-4xl text-primary font-bold uppercase mb-12">
        {{ t("navigation.chairman_message") }}
      </h1>
      <!-- VERSION ANGLAIS -->
      <div v-if="currentLanguage === 'en'" class="space-y-6">
        <p>
          BANK OF AFRICA Group represents a Morocco which is resolutely
          committed to economic and social development. The Group has forged a
          reputation as an innovative and credible partner to stakeholders from
          both the public and private sectors in supporting several of the
          Kingdom's strategic transformation projects.
        </p>
        <p>
          BANK OF AFRICA is fully committed to the new growth model established
          by His Majesty King Mohammed VI. Alongside other sponsors, it is
          striving to ensure that the Mohammed VI Tangier Tech Industrial City,
          one of the Kingdom's flagship projects, becomes a bridgehead between
          Africa, Asia and Europe. BANK OF AFRICA Group is similarly involved in
          other projects such as the construction of the Mohammed VI Tower,
          which is set to become one of the famous landmarks of Rabat, City of
          Light, as well as helping to establish the SENSYO Pharma Tech vaccine
          production platform in Benslimane.
        </p>
        <p>
          Thanks to the collective efforts made, BANK OF AFRICA registered an
          exceptional performance in 2021, underlining its solid business model
          which combines operational excellence, financial solidity and
          sustainable development. BANK OF AFRICA's consolidated net banking
          income for the year rose by 4% to MAD 14.6 billion whilst net income
          attributable to shareholders of the parent company stood at MAD 2
          billion versus MAD 738 million 2020.
        </p>
        <p>
          As well as performing exceptionally well, the Group's digital
          transformation gathered pace in both retail banking and corporate and
          investment banking so as to deliver a unique user experience to the
          entire customer base.
        </p>
        <p>
          As equally important as its financial performance, in 2021, BANK OF
          AFRICA consolidated its position as a major player in impact finance
          in Morocco and Africa by providing the finance needed for ecological
          transition.
        </p>
        <p>
          A new more robust governance system was adopted in 2021 in support of
          these various initiatives.
        </p>
        <p>
          This reorganisation primarily aims to accelerate implementation of
          action programmes in Morocco and in those countries in which BANK OF
          AFRICA Group has operations. The Group is relentless in its pursuit of
          more profitable and sustainable growth as well as balanced and
          sustainable development, consistent with its 2030 corporate strategy.
        </p>
      </div>
      <!-- VERSION FRANCAIS -->
      <div v-else-if="currentLanguage === 'fr'" class="space-y-3">
        <p>
          Représentatif d'un Maroc résolument engagé dans la voie de
          l'émergence, le Groupe BANK OF AFRICA se positionne comme un
          partenaire innovateur et crédible auprès de ses parties prenantes tant
          publiques que privées, accompagnant plusieurs chantiers stratégiques
          de transformation du Royaume.
        </p>
        <p>
          Conformément aux orientations royales contenues dans le Nouveau Modèle
          de Développement, nous œuvrons à positionner, aux côtés des autres
          promoteurs de ce chantier majeur, la Cité Mohammed VI Tanger Tech en
          tant que pont entre l'Afrique, l'Asie et l'Europe. C'est à cette même
          aune que doivent être interprétés l'implication du Groupe BANK OF
          AFRICA dans la construction de la Tour Mohammed VI qui sera l'un des
          emblèmes de Rabat, ville Lumière, de même que l'accompagnement de la
          création, à Benslimane, de la plateforme de production de vaccins,
          SENSYO Pharma Tech.
        </p>
        <p>
          C'est dans ce contexte de mobilisation collective que BANK OF AFRICA a
          réalisé en 2021, une performance exceptionnelle, illustrant la
          solidité de son Business Model, alliant la quête d'excellence
          opérationnelle, la solidité financière et le développement durable.
          Ainsi, le Produit Net Bancaire consolidé de l'exercice 2021 s'est
          établi à 14,6 Milliards de dirhams, en progression de 4%, le Résultat
          Net Part du Groupe s'élevant à 2 Milliards de dirhams contre 738
          Millions de dirhams en 2020.
        </p>
        <p>
          Cette performance s'est accompagnée de l'accélération de la
          transformation digitale du Groupe tant au niveau des métiers de la
          banque de détail, des activités de banque de financement que
          d'investissement afin d'offrir une expérience diversifiée à l'ensemble
          de la clientèle.
        </p>
        <p>
          Tout aussi essentielle que la performance économique, le Groupe BANK
          OF AFRICA a consolidé, en 2021, son positionnement d'acteur majeur de
          la finance à impact au Maroc et en Afrique, appuyant notamment les
          investissements nécessaires à la transition écologique. Afin
          d'accompagner ces initiatives, une gouvernance renouvelée et resserrée
          a été mise en place en 2021.
        </p>
        <p>
          L'objectif majeur de cette réorganisation est d'accélérer la mise en
          œuvre de programmes d'actions au Maroc et dans les différentes
          géographies d'implantation du Groupe BANK OF AFRICA, dans une quête
          incessante de croissance plus rentable et soutenable ainsi que d'un
          développement équilibré et durable, conformément à la vision
          stratégique établie à l'horizon 2030.
        </p>
      </div>
    </article>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useLanguage } from "@/composables/useLanguage";

const { currentLanguage } = useLanguage();
const { t } = useI18n();
</script>

<style lang="scss" scoped>
.chairman-message {
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

article {
  flex: 3;
}
</style>
