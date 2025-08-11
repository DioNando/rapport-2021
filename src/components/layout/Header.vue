<template>
  <header>
    <div class="bg-header">
      <img src="/assets/images/backgrounds/bg_header.webp" />
    </div>
    <nav class="flex items-center justify-between p-24">
      <router-link to="/" class="logo">
        <img
          src="/assets/images/logos/Logo-BOA.webp"
          alt="Logo BOA"
          class="logo-image"
        />
      </router-link>
      <div class="flex items-center gap-4">
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
</style>
