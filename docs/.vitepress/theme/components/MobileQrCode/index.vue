<script setup lang="ts">
import { ref, onMounted } from "vue";
import QRCode from "qrcode";
import iconQrcode from "../../../../public/images/icons/iconQrcode.svg?raw";
import iconClose from "../../../../public/images/icons/iconClose.svg?raw";

const codeUrl = ref(null);
const isShowCode = ref(false);

const createCodeUrl = async () => {
  try {
    const url = await QRCode.toDataURL(window.location.href, {
      width: 170,
      margin: 5,
    });
    codeUrl.value = url;
  } catch (error) {
    console.error(error);
  }
};

const showCode = (isShow: boolean) => {
  // document.body.style.overflow = isShow ? "hidden" : "auto";
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
    <div v-show="isShowCode" class="code-mask">
      <div class="code-modal">
        <div class="code-close" @click="showCode(false)">
          <div v-html="iconClose" class="close-icon"></div>
        </div>
        <div class="code-text">手机扫码浏览</div>
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
}

.code-modal {
  width: 240px;
  border-radius: 4px;
  background: var(--vp-c-bg);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 30px 0px;
  padding: 50px 30px 30px;
}

.code-text {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 30px;
}

.code-close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  cursor: pointer;
}

.code-close:hover {
  background: var(--vp-c-bg-soft-down);
}

@media (max-width: 800px) {
  .nav-box {
    display: none;
  }
}
</style>

<style>
.code-modal .code-close svg {
  fill: #000;
  width: 14px;
  height: 14px;
}
</style>
