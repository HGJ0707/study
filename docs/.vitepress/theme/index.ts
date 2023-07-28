import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import BackToTop from "./components/BackToTop/index.vue";
import MobileQrCode from "./components/MobileQrCode/index.vue";

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "aside-outline-before": () => h(BackToTop),
      "nav-bar-content-after": () => h(MobileQrCode),
    });
  },
};
