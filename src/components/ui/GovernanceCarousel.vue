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
      <swiper-slide v-for="slide in slides" :key="slide.id" class="h-auto px-64">
        <div class="slide-card text-gray-600">
          <div class="flex gap-8">
            <img
              :src="slide.img"
              :alt="slide.title"
              class="w-72 h-full object-cover"
            />
            <div>
              <h3 class="text-2xl font-bold text-primary uppercase">{{ slide.title }}</h3>
              <h4 class="text-2xl font-bold text-accent">{{ slide.subtitle }}</h4>
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
    id: 1,
    img: "/assets/images/backgrounds/Biographies-01.png",
    title: "Conseil d'Administration",
    subtitle: "Gouvernance Stratégique",
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
    id: 2,
    img: "/assets/images/backgrounds/Biographies-02.png",
    title: "Comité d'Audit",
    subtitle: "Contrôle et Transparence",
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
    id: 3,
    img: "/assets/images/backgrounds/Biographies-03.png",
    title: "Comité des Risques",
    subtitle: "Gestion des Risques",
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
    id: 4,
    img: "/assets/images/backgrounds/Biographies-04.png",
    title: "Comité de Rémunération",
    subtitle: "Politique de Rémunération",
    content1Fr:
      "Le Comité de Rémunération établit les politiques de rémunération alignées sur les objectifs stratégiques de la banque.",
    content2Fr:
      "Il veille à l'équité et à la compétitivité des packages de rémunération pour attirer et retenir les talents.",
    content1En:
      "The Remuneration Committee establishes remuneration policies aligned with the bank's strategic objectives.",
    content2En:
      "It ensures the fairness and competitiveness of remuneration packages to attract and retain talent.",
  },
  {
    id: 5,
    img: "/assets/images/backgrounds/Biographies-05.png",
    title: "Comité de Nomination",
    subtitle: "Sélection et Gouvernance",
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
    id: 6,
    img: "/assets/images/backgrounds/Biographies-06.png",
    title: "Direction Générale",
    subtitle: "Exécution Stratégique",
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
    id: 7,
    img: "/assets/images/backgrounds/Biographies-07.png",
    title: "Contrôle Interne",
    subtitle: "Surveillance et Conformité",
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
    id: 8,
    img: "/assets/images/backgrounds/Biographies-08.png",
    title: "Audit Interne",
    subtitle: "Évaluation Indépendante",
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
    id: 9,
    img: "/assets/images/backgrounds/Biographies-09.png",
    title: "Développement Durable",
    subtitle: "Responsabilité Sociétale",
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
    id: 10,
    img: "/assets/images/backgrounds/Biographies-10.png",
    title: "Innovation et Transformation",
    subtitle: "Vision Future",
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
    id: 11,
    img: "/assets/images/backgrounds/Biographies-11.png",
    title: "Gestion des Talents",
    subtitle: "Capital Humain",
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
    id: 12,
    img: "/assets/images/backgrounds/Biographies-12.png",
    title: "Relation Client",
    subtitle: "Excellence Service",
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
    id: 13,
    img: "/assets/images/backgrounds/Biographies-13.png",
    title: "Partenariats Stratégiques",
    subtitle: "Collaboration Efficace",
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
    id: 14,
    img: "/assets/images/backgrounds/Biographies-14.png",
    title: "Régulation Bancaire",
    subtitle: "Conformité Réglementaire",
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
    id: 15,
    img: "/assets/images/backgrounds/Biographies-15.png",
    title: "Inclusion Financière",
    subtitle: "Accessibilité Services",
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
    id: 16,
    img: "/assets/images/backgrounds/Biographies-16.png",
    title: "Cybersécurité",
    subtitle: "Protection Numérique",
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
    id: 17,
    img: "/assets/images/backgrounds/Biographies-17.png",
    title: "Expansion Internationale",
    subtitle: "Croissance Stratégique",
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
    id: 18,
    img: "/assets/images/backgrounds/Biographies-18.png",
    title: "Performance Financière",
    subtitle: "Rentabilité Durable",
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
    id: 19,
    img: "/assets/images/backgrounds/Biographies-19.png",
    title: "Performance Financière",
    subtitle: "Rentabilité Durable",
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
