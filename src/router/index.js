import { createRouter, createWebHistory } from "vue-router";
import { useI18n } from "vue-i18n";

// Layouts
import DefaultLayout from "@/layouts/DefaultLayout.vue";
// import AuthLayout from '@/layouts/AuthLayout.vue'

// Pages
import HomePage from "@/pages/HomePage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

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
