<template>
  <div class="content-carousel py-8">
    <swiper
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
      <swiper-slide v-for="(slide, i) in slides" :key="i" class="h-auto px-64">
        <div class="slide-card text-gray-600">
          <div class="flex gap-8">
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

const slides = [
  {
    img: "/assets/images/backgrounds/Biographies-01.png",
    title: "M. Othman Benjelloun",
    subtitleFr: "PRÉSIDENT DIRECTEUR GÉNÉRAL DE BANK OF AFRICA",
    subtitleEn: "CHAIRMAN & CHIEF EXECUTIVE OFFICER",
    content1Fr:
      "Le Conseil d'Administration de Bank of Africa définit les orientations stratégiques et supervise la mise en œuvre des politiques de développement durable.",
    content2Fr:
      "Il s'assure du respect des normes de gouvernance et de la protection des intérêts des parties prenantes.",
    content1En:
      "Bank of Africa's Board of Directors defines strategic orientations and supervises the implementation of sustainable development policies.",
    content2En:
      "It ensures compliance with governance standards and protection of stakeholders' interests.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-02.png",
    title: "M. Zouheir Bensaid",
    subtitleFr: "Représentant de RMA",
    subtitleEn: "RMA's Representative",
    content1Fr:
      "Le Comité d'Audit veille à la fiabilité des informations financières et à l'efficacité des systèmes de contrôle interne.",
    content2Fr:
      "Il supervise les audits externes et internes pour garantir la transparence et la conformité réglementaire.",
    content1En:
      "The Audit Committee ensures the reliability of financial information and the effectiveness of internal control systems.",
    content2En:
      "It supervises external and internal audits to guarantee transparency and regulatory compliance.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-03.png",
    title: "M. Lucien Miara",
    subtitleFr: "Représentant Permanent de la Banque Fédérale du Crédit Mutuel",
    subtitleEn: "Permanent Representative of the Federal Bank of Mutual Credit",
    content1Fr:
      "Le Comité des Risques identifie, évalue et surveille tous les types de risques auxquels la banque est exposée.",
    content2Fr:
      "Il définit les politiques de gestion des risques et s'assure de leur mise en application effective.",
    content1En:
      "The Risk Committee identifies, evaluates and monitors all types of risks to which the bank is exposed.",
    content2En:
      "It defines risk management policies and ensures their effective implementation.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-04.png",
    title: "M. Abdellatif Zaghnoun",
    subtitleFr: "Représentant Permanent de la Caisse de Dépot et de Gestion",
    subtitleEn: "Permanent Representative of the Deposit and Management Fund",
    content1Fr:
      "Le Comité de Nomination supervise la sélection et la nomination des membres du conseil et des dirigeants clés.",
    content2Fr:
      "Il s'assure de la diversité, des compétences et de l'indépendance nécessaires au bon fonctionnement des organes de gouvernance.",
    content1En:
      "The Nomination Committee supervises the selection and appointment of board members and key executives.",
    content2En:
      "It ensures the diversity, skills and independence necessary for the proper functioning of governance bodies.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-05.png",
    title: "M. Hicham El Amrani",
    subtitleFr: "Représentant Permanent de O Capital Group",
    subtitleEn: "O Capital Group's Permanent Representative",
    content1Fr:
      "La Direction Générale assure l'exécution de la stratégie définie par le Conseil d'Administration.",
    content2Fr:
      "Elle coordonne les activités opérationnelles et veille à l'atteinte des objectifs de performance et de développement durable.",
    content1En:
      "General Management ensures the execution of the strategy defined by the Board of Directors.",
    content2En:
      "It coordinates operational activities and ensures the achievement of performance and sustainable development objectives.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-06.png",
    title: "M. Azeddine Guessous",
    subtitleFr: "Administrateur Intuitu Personae",
    subtitleEn: "Intuitu Personae Director",
    content1Fr:
      "Le département de Contrôle Interne surveille en permanence les processus et procédures pour assurer leur conformité.",
    content2Fr:
      "Il identifie les lacunes potentielles et recommande des améliorations pour renforcer l'efficacité opérationnelle.",
    content1En:
      "The Internal Control department continuously monitors processes and procedures to ensure their compliance.",
    content2En:
      "It identifies potential gaps and recommends improvements to strengthen operational efficiency.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-07.png",
    title: "M. Marc Beaujean",
    subtitleFr: "Représentant Permanent de British International Investment (CDC Ltd)",
    subtitleEn: "British International Investment (CDC Ltd) Permanent Representative",
    content1Fr:
      "L'Audit Interne fournit une évaluation indépendante de l'efficacité des systèmes de gouvernance et de contrôle.",
    content2Fr:
      "Il contribue à l'amélioration continue des processus et à la maîtrise des risques opérationnels.",
    content1En:
      "Internal Audit provides an independent assessment of the effectiveness of governance and control systems.",
    content2En:
      "It contributes to the continuous improvement of processes and operational risk management.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-08.png",
    title: "M. Mohamed Kabbaj",
    subtitleFr: "Administrateur Indépendant",
    subtitleEn: "Independent Director",
    content1Fr:
      "L'intégration du développement durable dans la gouvernance guide toutes les décisions stratégiques de la banque.",
    content2Fr:
      "Cette approche garantit un impact positif sur l'environnement, la société et l'économie africaine.",
    content1En:
      "The integration of sustainable development into governance guides all strategic decisions of the bank.",
    content2En:
      "This approach ensures a positive impact on the environment, society and the African economy.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-09.png",
    title: "Mme Nezha Lahrichi",
    subtitleFr: "Administratrice Indépendante",
    subtitleEn: "Independent Director",
    content1Fr:
      "La gouvernance encourage l'innovation et la transformation digitale pour maintenir la compétitivité de la banque.",
    content2Fr:
      "Elle favorise l'adoption de nouvelles technologies tout en préservant les valeurs fondamentales de l'institution.",
    content1En:
      "Governance encourages innovation and digital transformation to maintain the bank's competitiveness.",
    content2En:
      "It promotes the adoption of new technologies while preserving the fundamental values of the institution.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-10.png",
    title: "M. Abdou Bensouda",
    subtitleFr: "Administrateur Intuitu Personae",
    subtitleEn: "Intuitu Personae Director",
    content1Fr:
      "La gouvernance met l'accent sur le développement et la rétention des talents pour assurer la pérennité de l'institution.",
    content2Fr:
      "Elle favorise un environnement de travail inclusif et stimulant pour tous les collaborateurs.",
    content1En:
      "Governance emphasizes talent development and retention to ensure the institution's sustainability.",
    content2En:
      "It promotes an inclusive and stimulating work environment for all employees.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-11.png",
    title: "M. Brahim Benjelloun-Touimi",
    subtitleFr: "Administrateur Directeur Général Délégué",
    subtitleEn: "Director and General Manager",
    content1Fr:
      "La gouvernance place la satisfaction client au cœur de ses préoccupations stratégiques.",
    content2Fr:
      "Elle veille à maintenir les plus hauts standards de qualité de service et d'expérience client.",
    content1En:
      "Governance places customer satisfaction at the heart of its strategic concerns.",
    content2En:
      "It ensures the highest standards of service quality and customer experience are maintained.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-12.png",
    title: "Mme Myryem Bouazzaoui",
    subtitleFr: "Administratrice Intuitu Personae",
    subtitleEn: "Intuitu Personae Director",
    content1Fr:
      "La gouvernance supervise le développement de partenariats stratégiques pour renforcer la position de la banque.",
    content2Fr:
      "Elle veille à ce que ces alliances créent de la valeur pour toutes les parties prenantes.",
    content1En:
      "Governance oversees the development of strategic partnerships to strengthen the bank's position.",
    content2En:
      "It ensures these alliances create value for all stakeholders.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-13.png",
    title: "M. Brian C. Mck Henderson",
    subtitleFr: "Conseiller auprès de la Présidence",
    subtitleEn: "Advisor to the Chairman",
    content1Fr:
      "La gouvernance assure le respect strict de toutes les réglementations bancaires nationales et internationales.",
    content2Fr:
      "Elle anticipe les évolutions réglementaires pour maintenir la conformité en permanence.",
    content1En:
      "Governance ensures strict compliance with all national and international banking regulations.",
    content2En:
      "It anticipates regulatory changes to maintain permanent compliance.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-14.png",
    title: "Mounir Chraibi",
    subtitleFr: "Directeur Général Exécutif en charge des Fonctions et Opérations Groupe",
    subtitleEn: "Executive General Manager Responsible for Group Functions and Operations",
    content1Fr:
      "La gouvernance promeut l'inclusion financière pour démocratiser l'accès aux services bancaires.",
    content2Fr:
      "Elle développe des solutions adaptées aux besoins des populations non bancarisées.",
    content1En:
      "Governance promotes financial inclusion to democratize access to banking services.",
    content2En:
      "It develops solutions adapted to the needs of unbanked populations.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-15.png",
    title: "M. Khalid Nasr",
    subtitleFr: "Directeur Général Exécutif en charge de CIB & Maroc",
    subtitleEn: "Executive General Manager Responsible for CIB & Morocco",
    content1Fr:
      "La gouvernance renforce continuellement les mesures de cybersécurité pour protéger les actifs numériques.",
    content2Fr:
      "Elle investit dans les technologies de pointe pour anticiper et contrer les menaces cyber.",
    content1En:
      "Governance continuously strengthens cybersecurity measures to protect digital assets.",
    content2En:
      "It invests in cutting-edge technologies to anticipate and counter cyber threats.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-16.png",
    title: "M. Amine Bouabid",
    subtitleFr: "Directeur Général Exécutif en charge de l'Afrique",
    subtitleEn: "Executive General Manager Responsible for Africa",
    content1Fr:
      "La gouvernance guide l'expansion internationale de la banque vers de nouveaux marchés prometteurs.",
    content2Fr:
      "Elle évalue les opportunités tout en gérant les risques liés à l'internationalisation.",
    content1En:
      "Governance guides the bank's international expansion into promising new markets.",
    content2En:
      "It evaluates opportunities while managing risks related to internationalization.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-17.png",
    title: "M. M'Fadel El Halaissi",
    subtitleFr: "Directeur Général Délégué en charge de l'Ingénierie, Recouvrement & Missions Spécifiques",
    subtitleEn: "Delegate General Manager Responsible for Financial Engineering, Recovery & Special Assignments",
    content1Fr:
      "La gouvernance veille à maintenir une performance financière solide et durable pour tous les actionnaires.",
    content2Fr:
      "Elle équilibre croissance et prudence pour assurer la stabilité à long terme de l'institution.",
    content1En:
      "Governance ensures solid and sustainable financial performance for all shareholders.",
    content2En:
      "It balances growth and prudence to ensure the institution's long-term stability.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-18.png",
    title: "M. Omar Tazi",
    subtitleFr: "Directeur Général Délégué en charge de la Banque au Maroc",
    subtitleEn: "Delegate General Manager Responsible for Banking in Morocco",
    content1Fr:
      "La gouvernance veille à maintenir une performance financière solide et durable pour tous les actionnaires.",
    content2Fr:
      "Elle équilibre croissance et prudence pour assurer la stabilité à long terme de l'institution.",
    content1En:
      "Governance ensures solid and sustainable financial performance for all shareholders.",
    content2En:
      "It balances growth and prudence to ensure the institution's long-term stability.",
  },
  {
    img: "/assets/images/backgrounds/Biographies-19.png",
    title: "M. Khalid Laabi",
    subtitleFr: "Directeur Général Délégué en charge des Risques Groupe",
    subtitleEn: "Delegate General Manager Responsible for Group Risks",
    content1Fr:
      "La gouvernance veille à maintenir une performance financière solide et durable pour tous les actionnaires.",
    content2Fr:
      "Elle équilibre croissance et prudence pour assurer la stabilité à long terme de l'institution.",
    content1En:
      "Governance ensures solid and sustainable financial performance for all shareholders.",
    content2En:
      "It balances growth and prudence to ensure the institution's long-term stability.",
  },
];
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
