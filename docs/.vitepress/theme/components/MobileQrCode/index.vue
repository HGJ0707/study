<script setup lang="ts">
import { ref, onMounted } from "vue";
import QRCode from "qrcode";
import utils from '../../../../util/index';
import iconQrcode from "../../../../public/images/icons/iconQrcode.svg?raw";
import iconClose from "../../../../public/images/icons/IconClose.svg?raw";
import iconDownload from "../../../../public/images/icons/iconDownload.svg?raw";

const codeUrl = ref(null);
const isShowCode = ref(false);

const createCodeUrl = async () => {
  try {
    const url = await QRCode.toDataURL(window.location.href, {
      width: 220,
      margin: 3,
    });
    codeUrl.value = url;
  } catch (error) {
    console.error(error);
  }
};

const downloadQrcode = () => {
  const { base64ToBlob, downloadImg } = utils;
  const blob = base64ToBlob(codeUrl.value);
  downloadImg(blob, 'GGBond_site_code')
};

const showCode = (isShow: boolean) => {
  document.body.style.overflow = isShow ? "hidden" : "auto";
  document.body.style.paddingRight = isShow ? "18px" : "0px";
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
        <div class="code-img" @click="downloadQrcode">
          <div class="download-btn" v-html="iconDownload" ></div>
          <img :src="codeUrl" alt="" />
        </div>
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
  width: 300px;
  height: 400px;
  border-radius: 4px;
  background: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 30px 0px;
  padding: 60px 40px 40px;
}

.code-text {
  font-size: 22px;
  color: #000;
  margin-bottom: 30px;
}

.code-img {
  position: relative;
  cursor: pointer;
}

.code-close {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  cursor: pointer;
}

.code-close:hover {
  background: #e3e3e5;
}

@media (max-width: 800px) {
  .nav-box {
    display: none;
  }
}
</style>

<style>
.code-modal .code-close svg {
  fill: #fff !important;
  width: 20px;
  height: 20px;
}


.download-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32px;
  height: 32px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid green;
  cursor: pointer;
}

.download-btn svg {
  width: 16px;
}

</style>
