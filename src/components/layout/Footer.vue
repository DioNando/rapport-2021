<template>
  <div class="avant-footer">
    <img src="/assets/images/backgrounds/avant_footer.webp" />
  </div>
  <footer class="footer bg-accent">
    <div class="footer-content">
      <img
        src="/assets/images/logos/Logo_BOA.png"
        alt="Logo BOA"
        class="logo-image"
      />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.avant-footer {
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
}

.footer {
  padding: 3rem 5rem;

  &-content {
    display: flex;
    align-items: center;

    .logo-image {
      max-width: 25rem;
    }
  }
}
</style>
