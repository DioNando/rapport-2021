<template>
    <div class="default-layout">
        <!-- Header -->
        <Header />

        <!-- Main Content -->
        <main class="main-content">
            <router-view />
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup>
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<style scoped>
.default-layout {
    /* min-height: 100vh; */
    display: flex;
    flex-direction: column;
}

.main-content {
    flex: 1;
    /* padding: 2rem 1rem; */
    /* max-width: 1200px; */
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
}
</style>
