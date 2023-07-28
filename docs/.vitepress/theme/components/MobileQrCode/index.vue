<script setup lang="ts">
import { ref, onMounted } from "vue";
import QRCode from "qrcode";
import iconQrcode from '../../../../public/images/icons/iconQrcode.svg?raw';

const codeUrl = ref(null);
const isShowCode = ref(false);

const createCodeUrl = async() => {
  try {
    const url = await QRCode.toDataURL(window.location.href, {
      width: 150,
      margin: 0
    })
    codeUrl.value = url;
  } catch (error) {
    console.error(error);
  }
    
};

const showCode = (isShow: boolean) => {
  document.body.style.overflow = isShow ? "hidden" : "auto";
  isShowCode.value = isShow;
};

onMounted(() => {
  createCodeUrl();
});
</script>

<template>
  <div class="nav-box" @click="showCode(true)" title="手机扫码浏览">
    <div v-html="iconQrcode" class="code-icon"></div>
  </div>
  <teleport to="body">
    <div v-show="isShowCode" class="code-mask" @click="showCode(false)">
      <div class="code-modal">
        <img :src="codeUrl" class="code-img" alt="" />
      </div>
    </div>
  </teleport>
</template>

<style scoped>
.nav-box {
  margin-left: 20px;
}

.code-icon {
  width: 22px !important;
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: color 0.5s;
}

.code-icon:hover {
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.code-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  background: rgb(29 33 41 / 60%);
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

.code-modal {
  border-radius: 8px;
  background: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 30px;
}

@media (max-width: 800) {
  .nav-box {
    display: none;
  }
}
</style>
