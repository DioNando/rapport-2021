import { createRouter, createWebHistory } from "vue-router";
import { useI18n } from "vue-i18n";

// Layouts
import DefaultLayout from "@/layouts/DefaultLayout.vue";
// import AuthLayout from '@/layouts/AuthLayout.vue'

// Pages
import HomePage from "@/pages/HomePage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import Report2021Page from "@/pages/Report2021Page.vue";
import ChairmanMessagePage from "@/pages/ChairmanMessagePage.vue";
import ValueModelPage from "@/pages/ValueModelPage.vue";
import SustainableResponsiblePage from "@/pages/SustainableResponsiblePage.vue";
import FoundationCsrPage from "@/pages/FoundationCsrPage.vue";
import GovernancePage from "@/pages/GovernancePage.vue";
import ManagementTeamPage from "@/pages/ManagementTeamPage.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: HomePage,
        meta: {
          title: {
            fr: "Accueil - Rapport Annuel 2020 BOA",
            en: "Home - Annual Report 2020 BOA",
          },
          description: {
            fr: "Rapport annuel 2020 - Bank of Africa",
            en: "Annual Report 2020 - Bank of Africa",
          },
        },
      },
      {
        path: "/report-2021",
        name: "Report-2021",
        component: Report2021Page,
        meta: {
          title: {
            fr: 'Rapport Annuel 2021 PDF - BOA',
            en: 'Annual Report 2021 PDF - BOA'
          },
          description: {
            fr: 'Téléchargez le rapport annuel 2021 en format PDF',
            en: 'Download the 2021 annual report in PDF format'
          }
        }
      }
      ,
      {
        path: "/chairman-message",
        name: "ChairmanMessage",
        component: ChairmanMessagePage,
        meta: {
          title: { fr: "Mot du président - BOA", en: "Chairman's message - BOA" },
          description: { fr: "Mot du président", en: "Chairman's message" }
        }
      },
      {
        path: "/value-model",
        name: "ValueModel",
        component: ValueModelPage,
        meta: {
          title: { fr: "Création et partage de valeur - BOA", en: "Creating and sharing value - BOA" },
          description: { fr: "Un modèle de création et de partage de valeur", en: "A model for creating and sharing value" }
        }
      },
      {
        path: "/sustainable-responsible",
        name: "SustainableResponsible",
        component: SustainableResponsiblePage,
        meta: {
          title: { fr: "Développement durable et responsable - BOA", en: "Sustainable and responsible development - BOA" },
          description: { fr: "Un développement durable et responsable", en: "Sustainable and responsible development" }
        }
      },
      {
        path: "/foundation-csr",
        name: "FoundationCsr",
        component: FoundationCsrPage,
        meta: {
          title: { fr: "Fondation BMCE Bank - BOA", en: "BMCE Bank Foundation - BOA" },
          description: { fr: "La Fondation BMCE Bank, pilier de la stratégie RSE du Groupe Bank Of Africa", en: "BMCE Bank Foundation, a pillar of Bank of Africa Group's CSR strategy" }
        }
      },
      {
        path: "/governance",
        name: "Governance",
        component: GovernancePage,
        meta: {
          title: { fr: "Gouvernance - BOA", en: "Governance - BOA" },
          description: { fr: "Une gouvernance soutenue par le développement durable", en: "Sustainable development underpinning governance system" }
        }
      },
      {
        path: "/management-team",
        name: "ManagementTeam",
        component: ManagementTeamPage,
        meta: {
          title: { fr: "Équipe dirigeante - BOA", en: "Management team - BOA" },
          description: { fr: "Un management engagé, au service des orientations stratégiques", en: "A committed management team, successfully enacting Group strategy" }
        }
      }
    ],
  },
//   {
//     path: "/auth",
//     component: AuthLayout,
//     children: [
//       // Routes d'authentification futures
//       // {
//       //   path: 'login',
//       //   name: 'Login',
//       //   component: () => import('@/pages/auth/LoginPage.vue')
//       // }
//     ],
//   },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundPage,
    meta: {
      title: {
        fr: "Page non trouvée - BOA",
        en: "Page not found - BOA",
      },
      layout: "minimal",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      // Si il y a un hash dans l'URL, défiler vers l'élément correspondant
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
});

// Navigation guards
router.beforeEach((to, from, next) => {
  // Fonction pour obtenir la locale actuelle
  const getCurrentLocale = () => {
    // Récupérer la locale depuis localStorage ou utiliser 'en' par défaut
    return localStorage.getItem("preferred-language") || "en";
  };

  const locale = getCurrentLocale();

  // Mettre à jour le titre de la page
  if (to.meta?.title) {
    const title =
      typeof to.meta.title === "object"
        ? to.meta.title[locale] || to.meta.title.fr
        : to.meta.title;
    document.title = title;
  } else {
    document.title =
      locale === "en" ? "BOA Annual Report 2020" : "Rapport Annuel BOA 2020";
  }

  // Mettre à jour la meta description
  if (to.meta?.description) {
    const description =
      typeof to.meta.description === "object"
        ? to.meta.description[locale] || to.meta.description.fr
        : to.meta.description;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.getElementsByTagName("head")[0].appendChild(metaDescription);
    }
    metaDescription.content = description;
  }

  next();
});

export default router;
