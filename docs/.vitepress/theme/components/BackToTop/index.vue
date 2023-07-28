<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';

const isShowTopBtn = ref(false);
const judgeShowTopBtn = () => {
  isShowTopBtn.value =  Math.abs(document.body.getBoundingClientRect()?.top) > 300;
}

onMounted(() => {
  window.addEventListener('scroll', judgeShowTopBtn)
})

onUnmounted(() => {
  window.removeEventListener('scroll', judgeShowTopBtn)
})

</script>

<template>
  <a :class="{'show-top-btn': isShowTopBtn }" class="container" href="javascript:scrollTo({top: 0,behavior: 'smooth'});">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.484 28.284"><g transform="translate(-229 -126.358)" fill="currentColor"><rect width="35" height="5" rx="2" transform="rotate(-45 296.902 -200.874)"/><rect width="35" height="5" rx="2" transform="rotate(-135 169.502 20.377)"/></g></svg>
  </a>
</template>

<style scoped>
.container {
  position: fixed;
  right: 150px;
  bottom: 100px;
  width: 50px;
  height: 50px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  cursor: pointer;
  opacity: 0;
  transition: all 0.7s;
}

.show-top-btn {
  opacity: 1 !important;
}

.container:hover {
  color: var(--vp-c-brand);
}

@media (max-width: 1500px) {
  .show-top-btn {
    display: none;
  }
}
</style>