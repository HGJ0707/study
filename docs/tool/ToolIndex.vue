<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import toolsData from "./toolsData";

const data = ref(toolsData);

// 展开收起
const handleShow = (isFold: boolean): void => {
  data.value.forEach((menu: any) => (menu.show = isFold));
  window.scrollTo({top: 530,behavior: 'smooth'});

};

// 是否全部展开
const isAllShow = computed(() => {
  return (
    data.value.filter((menu: any) => menu.show)?.length === data.value.length
  );
});

const MENU_HEIGHT = 34;
const menus = ref(
  data.value.map((item: any) => {
    return {
      type: item.type,
      count: item?.tools?.length,
      top: 0,
      isSelected: false,
    };
  })
);
menus.value[0].isSelected = true;

const clearSelected = () => {
  menus.value.forEach((item: any) => {
    item.isSelected = false;
  });
};

const clickToMenu = (menu: any) => {
  clearSelected();
  handleShow(true);
  menu.isSelected = true;
};

const isShowSidebar = ref(false);
const judgeShowSideBar = () => {
  const toolWrapperDom = document.getElementsByClassName('wrapper')[0];
  if (toolWrapperDom?.getBoundingClientRect()?.top < 200) {
    isShowSidebar.value = true;
  } else {
    isShowSidebar.value = false;
  }
}

// 监听滚动事件，判断
const scrollEvent = () => {
  judgeShowSideBar();

  const currentPosition = window.scrollY + 200;
  for (let i = 0; i < menus.value.length; i++) {
    if (
      currentPosition > menus.value[i]?.top &&
      currentPosition < menus.value[i + 1]?.top
    ) {
      clearSelected();
      menus.value[i].isSelected = true;
    }
  }
};

onMounted(() => {
  // 拿到所有标题的滚动高度
  const menuEles = Array.from(document.getElementsByTagName("h2"));
  menuEles.forEach((menuEle) => {
    const menu = menus.value.filter((item: any) => {
      return item.type === menuEle.innerHTML;
    });
    menu[0].top = menuEle?.getBoundingClientRect()?.top;
  });

  document.addEventListener("scroll", scrollEvent);
});

onUnmounted(() => {
  document.removeEventListener("scroll", scrollEvent);
});
</script>

<template>
  <div class="wrapper user-select-none">
    <div class="header">
      <h1>导航</h1>
        <div class="header-show-btn cursor-pointer">
          <span v-if="isAllShow" @click="handleShow(false)">全部折叠</span>
          <span v-else @click="handleShow(true)">全部展开</span>
      </div>
    </div>
    <section class="content-section" v-for="section in data" :key="section">
      <div
        class="section-header cursor-pointer"
        @click.stop="section.show = !section.show"
      >
        <h2 :id="section?.type">
          {{ section?.type }}
        </h2>
        <div
          class="section-fold-btn cursor-pointer"
          @click.stop="section.show = !section.show"
        >
          <svg
            class="section-fold-show"
            v-if="section.show"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              d="M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"
            ></path>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path
              d="M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        v-show="section?.show"
        class="content-grid"
        :style="{ 'margin-bottom': !section?.show ? 0 : '48px' }"
      >
        <a
          class="content-grid-item cursor-pointer"
          v-for="tool in section?.tools"
          :key="tool"
          target="_blank"
          :href="tool.link"
          :title="tool.title"
        >
          <div class="item-icon">
            <img v-if="tool?.icon" :src="tool?.icon" alt="" />
            <div v-else>{{ tool?.title?.charAt(0) }}</div>
          </div>
          <div>
            <div class="item-name">{{ tool?.title }}</div>
          </div>
        </a>
      </div>
    </section>
  </div>

  <section
    class="fixed-menu user-select-none"
    :class="{'show-side-bar': isShowSidebar}"
    :style="{ height: `${(menus.length + 1) * (MENU_HEIGHT + 5)}px` }"
  >
    <div class="fix-title">所有菜单</div>
    <a
      v-for="menu in menus"
      :key="menu"
      class="fix-menu-item cursor-pointer"
      :href="`#${menu.type}`"
      :class="{
        'active-fix-menu': menu.isSelected,
      }"
      @click="clickToMenu(menu)"
    >
      {{ menu.type }}
      {{ ` [${menu.count}]` }}
    </a>
  </section>
</template>

<style scoped>
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  padding: 0px 32px 200px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background-color: var(--vp-c-bg);
  position: sticky;
  top: 64px;
  z-index: 1;
  border-bottom: 1px solid var(--vp-c-divider);
}

.header h1 {
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.header-show-btn {
  padding: 4px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  outline: 1px solid var(--vp-c-divider);
  font-size: 14px;
}

.header-show-btn:hover {
  outline: 2px solid var(--vp-c-bg-soft-down);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  padding: 20px;
  transition: color 0.5s;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.section-header:hover {
  outline: 2px solid var(--vp-c-bg-soft-down);
}

.section-header:hover h2 {
  color: var(--vp-c-brand);
}

.section-header:hover .section-fold-btn svg {
  color: var(--vp-c-brand);
}

.content-section h2 {
  font-size: 20px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.section-fold-btn svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
  transition: transform 0.25s;
  color: var(--vp-c-text-3);
}

.section-fold-show {
  transform: rotate(90deg);
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 306px);
  grid-column-gap: 20px;
  transition: transform 0.25s;
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1000px));
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    background-color: var(--vp-c-bg);
    position: sticky;
    top: 0px;
  }
}

.content-grid-item {
  break-inside: avoid;
  overflow: auto;
  margin-bottom: 20px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 15px;
  transition: background-color 0.5s;
  display: flex;
  align-items: center;
}

.content-grid-item:hover {
  outline: 2px solid var(--vp-c-bg-soft-down);
}

.item-icon {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  border-radius: 6px;
  background-color: var(--vp-c-bg-soft-down);
  width: 58px;
  height: 58px;
  font-size: 24px;
  transition: background-color 0.25s;
  padding: 10px;
}

.item-icon img {
  min-width: 30px;
  min-height: 30px;
}

.item-name {
  width: 188px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--vp-c-text-1);
  font-weight: 600;
}

@media (max-width: 1500px) {
  .fixed-menu {
    display: none;
  }
}

.show-side-bar {
  right: 40px !important;
}

.fixed-menu {
  position: fixed;
  top: 136px;
  right: -200px;
  width: 200px;
  height: 700px;
  background-color: var(--vp-c-bg);
  border-left: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  transition: all .7s; /* 过渡动画效果，持续1秒 */
}

.fix-title {
  padding: 5px 15px;
  display: block;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.fix-menu-item {
  padding: 5px 15px;
  display: block;
  position: relative;
  font-size: 14px;
  margin: 5px 0;
}

.fix-menu-item:hover {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-brand);
}

.fix-menu-item::after {
  content: "";
  width: 2px;
  height: 34px;
  background: var(--vp-c-brand);
  display: block;
  position: absolute;
  left: -1px;
  top: 0px;
  opacity: 0;
  transition: 0.25s;
}

.active-fix-menu {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-brand);
}

.active-fix-menu::after {
  opacity: 1;
}

.cursor-pointer {
  cursor: pointer;
}

.user-select-none {
  user-select: none !important;
}
</style>
