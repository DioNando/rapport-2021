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
      <swiper-slide class="h-auto p-4 lg:px-32">
        <div class="slide-card overflow-hidden h-full flex items-center gap-8">
          <div class="flex-2 flex items-center justify-center">
            <img
              :src="
                currentLanguage === 'en'
                  ? '/assets/images/backgrounds/map-01.png'
                  : '/assets/images/backgrounds/Map.gif'
              "
            />
          </div>
          <div class="flex-1">
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              <span v-if="currentLanguage === 'en'"
                >A banking group with a global footprint, contributing to
                Africa's development</span
              >
              <span v-else-if="currentLanguage === 'fr'"
                >Un groupe bancaire d'envergure mondiale au service du
                développement de l'Afrique</span
              >
            </h3>
            <p
              v-if="currentLanguage === 'en'"
              class="font-bold text-xl leading-relaxed"
            >
              BANK OF AFRICA, a multi-business pan-african Banking Group with a
              global outlook
            </p>
            <p
              v-else-if="currentLanguage === 'fr'"
              class="font-bold text-xl leading-relaxed"
            >
              BANK OF AFRICA, un Groupe bancaire panafricain multi-métiers
              tourné vers le Monde
            </p>
            <p
              v-if="currentLanguage === 'en'"
              class="text-base leading-relaxed"
            >
              With operations in 32 countries, including 20 in Africa and with
              nearly 2,000 points of sale, BANK OF AFRICA is a pan-African
              banking group, providing multi-disciplinary expertise in a number
              of countries in Africa and around the world. The Group has
              fostered strong ties with the African continent, enabling it to
              play a major role in some of the continent’s most important
              investment projects. BANK OF AFRICA was also the first Moroccan
              bank to open a representative office in China in 2000. It has
              bolstered its presence still further by becoming the first African
              bank to open a branch office in Shanghai.
            </p>
            <p
              v-else-if="currentLanguage === 'fr'"
              class="text-base leading-relaxed"
            >
              Implanté dans 32 pays, dont 20 en Afrique, et avec un réseau de
              près de 2 000 points de vente, BANK  OF  AFRICA est un groupe
              panafricain, offrant son expertise multi-métiers dans les
              différents pays du continent et à travers le Monde. Le Groupe a
              consolidé des liens forts avec le continent, lui permettant
              d’accompagner les plus importants projets d’investissement du
              continent. BANK  OF  AFRICA est également la première Banque
              marocaine à avoir ouvert un bureau de représentation en Chine en
              2000, une présence renforcée par l’ouverture de la première
              succursale d’une banque africaine à Shanghai.
            </p>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 2 -->
      <swiper-slide class="h-auto p-4 lg:px-32">
        <div class="slide-card overflow-hidden h-full flex items-center gap-8">
          <div class="flex-2 flex items-center justify-center">
            <img
              :src="
                currentLanguage === 'en'
                  ? '/assets/images/backgrounds/RA-BOA-2021-28062022-22.png'
                  : '/assets/images/backgrounds/Un-actionnariat-solide-porteur-de-valeur-.gif'
              "
            />
          </div>
          <div class="flex-1 p-8">
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              <span v-if="currentLanguage === 'en'"
                >Bank Of Africa’s ownership structure at 31 December 2021</span
              >
              <span v-else-if="currentLanguage === 'fr'"
                >Répartition du capital de BANK OF AFRICA au 31 décembre
                2021</span
              >
            </h3>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 3 -->
      <swiper-slide class="h-auto p-4 lg:px-32">
        <div class="slide-card overflow-hidden h-full flex items-center gap-8">
          <div class="flex-1 p-8">
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              <span v-if="currentLanguage === 'en'"
                >BMCE Bank foundation, a pillar of Bank Of Africa Group’s CSR
                strategy</span
              >
              <span v-else-if="currentLanguage === 'fr'"
                >La Fondation BMCE BANK, pilier majeur de la stratégie RSE de
                BANK OF AFRICA</span
              >
            </h3>
            <p
              v-if="currentLanguage === 'en'"
              class="text-base leading-relaxed"
            >
              BMCE Bank Foundation has played a pioneering role in promoting
              education and protecting the environment by educational means.
              Since it was founded in 1995, BMCE Bank Foundation has embodied
              the Group’s attitude to human development and social impact.
              Through its Medersat.com network, BMCE Bank Foundation has striven
              to improve access to education in rural communities and raise
              awareness among African children about environmental issues.
            </p>
            <p
              v-else-if="currentLanguage === 'fr'"
              class="text-base leading-relaxed"
            >
              La Fondation BMCE Bank a été pionnière dans sa mission de
              promotion de l’enseignement et de préservation de l’environnement
              par le biais de l’éducation. Depuis sa création en 1995, la
              Fondation BMCE Bank éclaire les choix du Groupe en matière de
              développement humain et d’impact sur la Société. A travers le
              Réseau Medersat.com, la Fondation BMCE  Bank agit pour
              l’amélioration de l’accès à l’éducation dans les communautés
              rurales et pour l’éveil des consciences des enfants sur les
              problématiques environnementales.
            </p>
          </div>
          <div
            class="flex-2 grid grid-cols-2 gap-12 items-center justify-center"
          >
            <div class="flex items-start gap-4">
              <img src="/assets/images/backgrounds/320.png" class="h-48" />
              <p>
                <span v-if="currentLanguage === 'en'"
                  >Schools in Morocco and 6 schools in Senegal, Congo
                  Brazzaville, Mali, Rwanda and Djibouti</span
                >
                <span v-else-if="currentLanguage === 'fr'"
                  >Écoles au Maroc et 6 écoles au Sénégal, Congo Brazzaville,
                  Mali, Rwanda et Djibouti</span
                >
              </p>
            </div>
            <div class="flex items-start gap-4">
              <img src="/assets/images/backgrounds/32-000.png" class="h-48" />
              <p>
                <span v-if="currentLanguage === 'en'"
                  >Pupils schooled within the Medersat.com network, 50% of whom
                  are girls, with more than 2,000 obtaining a high school
                  diploma</span
                >
                <span v-else-if="currentLanguage === 'fr'"
                  >Élèves ont suivi leur scolarisation dans le réseau
                  Medersat.com dont 50% de filles et plus de 2 000 ont obtenu
                  leur baccalauréat</span
                >
              </p>
            </div>
            <div class="flex items-start gap-4">
              <img src="/assets/images/backgrounds/63.png" class="h-48" />
              <p>
                <span v-if="currentLanguage === 'en'"
                  >Schools providing a pre-school and primary education to more
                  than 12,000 students from socially disadvantaged
                  backgrounds</span
                >
                <span v-else-if="currentLanguage === 'fr'"
                  >Écoles dispensant un enseignement préscolaire et primaire à
                  plus de 12 000 élèves issus de milieux socialement
                  défavorisés</span
                >
              </p>
            </div>
            <div class="flex items-start gap-4">
              <img src="/assets/images/backgrounds/36.png" class="h-48" />
              <p>
                <span v-if="currentLanguage === 'en'"
                  >Schools awarded the « Eco-School » label by the Mohammed VI
                  Foundation</span
                >
                <span v-else-if="currentLanguage === 'fr'"
                  >Écoles labellisées « Éco-École » par la Fondation Mohammed
                  VI</span
                >
              </p>
            </div>
            <div class="flex items-start gap-4">
              <img src="/assets/images/backgrounds/578.png" class="h-48" />
              <div class="space-y-4">
                <p>
                <span v-if="currentLanguage === 'en'"
                  >Schools providing a pre-school and primary education to more
                  than 12,000 students from socially disadvantaged
                  backgrounds</span
                >
                <span v-else-if="currentLanguage === 'fr'"
                  >Écoles dispensant un enseignement préscolaire et primaire à
                  plus de 12 000 élèves issus de milieux socialement
                  défavorisés</span
                >
              </p>
              <p>
                <span v-if="currentLanguage === 'en'"
                  >Community-based development benefiting more than 2,000
                  persons, 53% of whom are women, with 12,000 attending literacy
                  programmes</span
                >
                <span v-else-if="currentLanguage === 'fr'"
                  >Développement communautaire bénéficiant à plus de 2 000
                  personnes dont 53% de femmes et 12 000 bénéficiaires de
                  programmes d'alphabétisation</span
                >
              </p>
              <p>
                <span v-if="currentLanguage === 'en'"
                  >BANK OF AFRICA allocates 4% of its gross operating income to
                  BMCE Bank Foundation</span
                >
                <span v-else-if="currentLanguage === 'fr'"
                  >BANK OF AFRICA alloue 4% de son Résultat Brut d'Exploitation
                  à la Fondation BMCE Bank</span
                >
              </p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 4 -->
      <swiper-slide class="h-auto p-4 lg:px-32">
        <div class="slide-card overflow-hidden h-full flex gap-8">
          <div class="flex-1 p-8">
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              <span v-if="currentLanguage === 'en'"
                >Sustainable development underpinning governance system</span
              >
              <span v-else-if="currentLanguage === 'fr'"
                >Une Gouvernance soutenue par le développement durable</span
              >
            </h3>
            <p
              v-if="currentLanguage === 'en'"
              class="text-base leading-relaxed"
            >
              BANK OF AFRICA’s governance system takes into consideration
              sustainable development issues as well as offering a basis for
              strategic thinking in support of the Bank’s business development.
              To meet the challenges of growing its business and complying with
              regulatory and statutory requirements in risk management, control
              and compliance, BANK OF AFRICA has established a solid governance
              system which draws on the vast expertise of its Board of
              Directors. As required by Bank Al-Maghrib, BANK OF AFRICA has
              adopted a Governance Charter which defines the powers of each body
              and organises the functioning and the decision-making processes of
              its most important bodies
            </p>
            <p
              v-else-if="currentLanguage === 'fr'"
              class="text-base leading-relaxed"
            >
              BANK OF AFRICA a mis en place une Gouvernance qui tient compte de
              ses enjeux de développement durable et qui offre un socle de
              réflexion stratégique pour accompagner l’évolution de ses
              différentes activités. La Gouvernance de BANK OF AFRICA s’appuie
              sur un Conseil d’Administration multi-expertise ainsi qu’une
              charte de Gouvernance, telle que définie dans les dispositions
              réglementaires de Bank Al-Maghrib, qui définit les pouvoirs de
              chaque instance et organise le fonctionnement et la prise de
              décision des instances centrales.
            </p>
          </div>
          <div class="flex-2 flex items-center justify-center">
            <!-- governance -->
          </div>
        </div>
      </swiper-slide>

      <!-- Element 5 -->
      <swiper-slide class="h-auto p-4 lg:px-32">
        <div class="slide-card overflow-hidden h-full flex items-center gap-8">
          <div class="flex-1 p-8">
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              <span v-if="currentLanguage === 'en'"
                >O capital group, a shareholder committed to social and economic
                development</span
              >
              <span v-else-if="currentLanguage === 'fr'"
                >O Capital Group, appartenance à un Groupe engagé</span
              >
            </h3>
            <p
              v-if="currentLanguage === 'en'"
              class="text-base leading-relaxed"
            >
              O Capital Group, which plays a prominent role in the domestic
              economy, also enjoys a strong reputation in a number of regions
              around the world. In Morocco and across the African continent, O
              Capital Group is known for being involved in and committed to a
              large number of cornerstone projects in a variety of different
              sectors of the economy.
            </p>
            <p
              v-else-if="currentLanguage === 'fr'"
              class="text-base leading-relaxed"
            >
              O Capital Group occupe une place prédominante dans le paysage
              économique national et dispose d’une notoriété avérée dans
              plusieurs régions à travers le Monde. Essentiellement orienté vers
              les métiers de la Banque et de l’Assurance, O Capital Group a
              évolué en tant qu’investisseur pour le long terme et s’est
              diversifié dans de nouveaux secteurs à forte valeur ajoutée
              porteurs de synergies avec ses activités Core Business.
            </p>
          </div>
          <div class="flex-2 flex items-center justify-center">
            <img
              :src="
                currentLanguage === 'en'
                  ? '/assets/images/backgrounds/O-capital-Group-desktop.png'
                  : '/assets/images/backgrounds/O-CAPITAL-GROUP.gif'
              "
            />
          </div>
        </div>
      </swiper-slide>
      <!-- Element 6 -->
      <swiper-slide class="h-auto p-4 lg:px-32">
        <div class="slide-card overflow-hidden h-full flex items-center gap-8">
          <div class="flex-1 flex items-center justify-center">
            <img
              :src="
                currentLanguage === 'en'
                  ? '/assets/images/backgrounds/Un-positionnement-solide-et-une-performance-reconnue-uk.gif'
                  : '/assets/images/backgrounds/Un-positionnement-solide-et-une-performance-reconnue-uk.gif'
              "
            />
          </div>
          <div class="flex-1 p-8">
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              <span v-if="currentLanguage === 'en'"
                >Solidly positioned with a reputation for performance</span
              >
              <span v-else-if="currentLanguage === 'fr'"
                >Un positionnement solide et une performance reconnue</span
              >
            </h3>
            <p
              v-if="currentLanguage === 'en'"
              class="text-base leading-relaxed"
            >
              Over time, BANK OF AFRICA has built a portfolio of complementary
              banking and financial business lines centred around financing and
              supporting businesses around the world. Today, BANK OF AFRICA is
              one of Africa’s main banking and financial groups with multiple
              business lines and brands.
            </p>
            <p
              v-else-if="currentLanguage === 'fr'"
              class="text-base leading-relaxed"
            >
              BANK  OF  AFRICA s’est développé à travers le temps en constituant
              un portefeuille d’activités complémentaires autour des métiers de
              financement de l’économie et d’accompagnement des acteurs
              économiques à travers le Monde. Aujourd’hui, BANK  OF  AFRICA est
              un groupe multi-métiers et multi-enseignes qui compte parmi les
              principaux groupes bancaires et financiers en Afrique. ​
            </p>
            <div
              class="flex items-center justify-between font-bold text-gray-600"
            >
              <div class="flex flex-col items-center mt-8">
                <img
                  :src="
                    currentLanguage === 'en'
                      ? '/assets/images/backgrounds/3rd.png'
                      : '/assets/images/backgrounds/3e.png'
                  "
                  class="h-24 mb-2"
                />
                <p v-if="currentLanguage === 'en'">Bank by total assets</p>
                <p v-else-if="currentLanguage === 'fr'">
                  Banque par total des actifs
                </p>
              </div>
              <div class="flex flex-col items-center">
                <img
                  :src="
                    currentLanguage === 'en'
                      ? '/assets/images/backgrounds/2nd.png'
                      : '/assets/images/backgrounds/2e.png'
                  "
                  class="h-24 mb-2"
                />
                <p v-if="currentLanguage === 'en'">Bank-insurer</p>
                <p v-else-if="currentLanguage === 'fr'">Bancassureur</p>
              </div>
              <div class="flex flex-col items-center">
                <img
                  :src="
                    currentLanguage === 'en'
                      ? '/assets/images/backgrounds/3rd.png'
                      : '/assets/images/backgrounds/3e.png'
                  "
                  class="h-24 mb-2"
                />
                <p v-if="currentLanguage === 'en'">Asset manager</p>
                <p v-else-if="currentLanguage === 'fr'">
                  Gestionnaire d'actifs
                </p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
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
