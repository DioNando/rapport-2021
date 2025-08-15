<template>
  <header>
    <div class="bg-header">
      <img src="/assets/images/backgrounds/bg_header.webp" />
    </div>
    <nav
      class="flex flex-col lg:flex-row items-center justify-between p-4 md:p-24"
    >
      <router-link to="/" class="logo">
        <img
          src="/assets/images/logos/Logo-BOA.webp"
          alt="Logo BOA"
          class="logo-image"
        />
      </router-link>
      <!-- <div class="flex items-center gap-4">
        <div class="menu flex flex-col items-end">
          <div class="flex items-center gap-4 mb-3">
            <LanguageSelector />
            <div class="menu-icon">
              <img
                src="/assets/images/icons/icon_burger_menu.svg"
                alt="Menu"
                class="menu-icon"
              />
            </div>
          </div>
          <div class="menu-content">
            <NavMenu :items="navItems" />
          </div>
        </div>
      </div> -->
      <div>
        <div class="flex items-center gap-4 mb-3">
          <LanguageSelector />
          <div class="menu-icon">
            <img
              src="/assets/images/icons/icon_burger_menu.svg"
              alt="Menu"
              class="menu-icon"
            />
          </div>
        </div>
        <div class="menu-content bg-gray-100 shadow-2xl">
          <div class="close-icon absolute top-6 right-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="cursor-pointer"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <NavMenu :items="navItems" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import LanguageSelector from "@/components/ui/LanguageSelector.vue";
import NavMenu from "@/components/ui/NavMenu.vue";

const navItems = [
  // { path: '/', label: 'navigation.home' },
  { path: "/chairman-message", label: "navigation.chairman_message" },
  { path: "/value-model", label: "navigation.value_model" },
  {
    path: "/sustainable-responsible",
    label: "navigation.sustainable_responsible",
  },
  { path: "/foundation-csr", label: "navigation.foundation_csr" },
  { path: "/governance", label: "navigation.governance" },
  { path: "/management-team", label: "navigation.management_team" },
  { path: "/report-2021", label: "navigation.reports_2021" },
];
</script>

<style lang="scss" scoped>
header {
  position: relative;
  width: 100%;
}

.bg-header {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
}

.menu {
  &-icon {
    width: 3.5rem;
  }
}

.menu-content {
  position: fixed;
  width: 30%;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  // display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
</style>
