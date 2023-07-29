<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';
import iconRightArrow from '../../../../public/images/icons/iconRightArrow.svg?raw';

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
  <a :class="{'show-top-btn': isShowTopBtn }" class="container" href="javascript:scrollTo({top: 0,behavior: 'smooth'});" title="回到顶部">
    <div v-html="iconRightArrow" class="top-icon"></div>
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
  border-radius: 50%;
  border: 1px solid transparent;
  color: var(--vp-c-text-2);
  opacity: 0;
  z-index: 9998;
  cursor: pointer;
  transition: all 0.7s;
}

.container:hover {
  color: var(--vp-c-brand);
  border: 1px solid var(--vp-c-brand);
  transition: all 0.7s;
}

.show-top-btn {
  opacity: 1 !important;
}

@media (max-width: 1500px) {
  .show-top-btn {
    display: none;
  }
}
</style>

<style>
.top-icon svg {
  width: 32px;
  fill:var(--vp-c-brand);
  transform: rotate(-90deg);
}
</style>