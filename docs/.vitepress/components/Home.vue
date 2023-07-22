<template>
  <section id="hero">
    <img src="/images/logo-300.png" class="vpImg" alt="">
    <h1 class="tagline">
      <span class="accent">GG Bond</span>
      <br />个人学习总结记录
    </h1>
    <div class="action"><a class="VPButton medium brand" href="/study/zh/javascript/1-变量声明.html">进入 ——></a></div>
  </section>
</template>

<style scoped>
section {
  padding: 42px 32px;
}

#hero {
  padding: 96px 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.vpImg {
  max-width: 320px;
  max-height: 320px;
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