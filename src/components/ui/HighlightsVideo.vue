<template>
  <div class="highlights-video" @click="openVideoModal">
    <video ref="previewVideo" muted preload="metadata" :poster="poster">
      <source :src="activeSrc" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="video-overlay">
      <button
        class="play-button"
        aria-label="Play video"
        @click.stop="openVideoModal"
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
        </svg>
      </button>
    </div>
  </div>

  <!-- Modal -->
  <div v-if="showVideoModal" class="video-modal" @click="closeVideoModal">
    <div class="video-modal-content" @click.stop>
      <button
        class="close-btn"
        @click="closeVideoModal"
        aria-label="Close video"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <video ref="modalVideo" controls autoplay class="modal-video">
        <source :src="activeSrc" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps({
  // Backward compat: if `src` is provided, it takes precedence
  src: {
    type: String,
    default: "",
  },
  srcEn: {
    type: String,
    default: "",
  },
  srcFr: {
    type: String,
    default: "",
  },
  poster: {
    type: String,
    default: "/assets/images/backgrounds/highlights.webp",
  },
});

const { locale } = useI18n();

const showVideoModal = ref(false);
const modalVideo = ref(null);
const previewVideo = ref(null);

const activeSrc = computed(() => {
  if (props.src) return props.src;
  const isFr = String(locale?.value || "")
    .toLowerCase()
    .startsWith("fr");
  if (isFr && props.srcFr) return props.srcFr;
  if (!isFr && props.srcEn) return props.srcEn;
  return props.srcEn || props.srcFr || "/assets/videos/BOA-VA-1.mp4";
});

const openVideoModal = () => {
  showVideoModal.value = true;
};

const closeVideoModal = () => {
  showVideoModal.value = false;
  if (modalVideo.value) {
    modalVideo.value.pause();
    modalVideo.value.currentTime = 0;
  }
};

watch(activeSrc, () => {
  if (previewVideo.value) {
    try {
      previewVideo.value.pause();
      previewVideo.value.load();
    } catch {}
  }
  if (modalVideo.value) {
    try {
      const wasPlaying = !modalVideo.value.paused;
      modalVideo.value.pause();
      modalVideo.value.load();
      if (wasPlaying) modalVideo.value.play();
    } catch {}
  }
});
</script>

<style scoped lang="scss">
.highlights-video {
  position: relative;
  // flex: 1;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);

    .video-overlay {
      background: rgba(0, 0, 0, 0.35);
    }

    .play-button {
      transform: scale(1.05);
      background: rgba(255, 255, 255, 0.9);
      cursor: pointer;
    }
  }

  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  .video-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    transition: background 0.3s ease;
  }

  .play-button {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.85);
    color: #111;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
    transition: transform 0.3s ease, background 0.3s ease;

    svg {
      color: currentColor;
    }
  }
}

.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;

  .video-modal-content {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    width: 100%;

    @media (min-width: 768px) {
      width: 80vw;
    }
  }

  .close-btn {
    position: absolute;
    top: -50px;
    right: 0;
    background: transparent;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    z-index: 1001;
    padding: 0.5rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      top: -40px;
      right: -10px;
    }
  }

  .modal-video {
    width: 100%;
    height: auto;
    max-height: 90vh;
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }
}
</style>
