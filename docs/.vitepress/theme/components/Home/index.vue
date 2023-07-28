<script setup lang="ts">
import NavList from "../NavList/inde.vue";
import BackToTop from "../BackToTop/index.vue";
</script>

<template>
  <section id="hero">
    <img src="/images/logo-300.png" class="vpImg" alt="" />
    <h1 class="tagline">
      <span class="accent">GG Bond</span>
      <br />学习总结记录
    </h1>
    <div class="actions">
      <div class="action">
        <a
          class="VPButton medium brand"
          href="/study/front-end/javascript/1-变量声明.html"
          >进入文章 ——></a
        >
      </div>
      <div class="action">
        <a
          class="VPButton medium alt"
          href="javascript:scrollTo({top: 530,behavior: 'smooth'});"
          >快捷导航
        </a>
      </div>
    </div>
  </section>
  <NavList />
  <BackToTop />
</template>

<style scoped>
#hero {
  padding: 32px 32px 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
}

.vpImg {
  max-width: 240px;
  max-height: 240px;
}

.tagline {
  font-size: 56px;
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}

.accent {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  margin: -6px;
}

.action {
  margin-top: 30px;
  flex-shrink: 0;
  padding: 6px;
}
.VPButton {
  display: inline-block;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color 0.25s, border-color 0.25s, background-color 0.25s;
}

.VPButton.medium {
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
}

.VPButton.brand {
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
}

.VPButton.alt {
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
}

@media (max-width: 960px) {
  .tagline {
    font-size: 32px;
    letter-spacing: -0.5px;
  }
  .vpImg {
    max-width: 256px;
    max-height: 256px;
  }
}

@media (max-width: 768px) {
  .tagline {
    font-size: 32px;
    letter-spacing: -0.5px;
  }

  .vpImg {
    max-width: 192px;
    max-height: 192px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 56px 32px;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}
</style>
