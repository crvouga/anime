// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Link from "./components/Link.vue";
import BreadcrumbItem from "./components/BreadcrumbItem.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("Link", Link);
  Vue.component("BreadcrumbItem", BreadcrumbItem);
  Vue.use(BootstrapVue);
  Vue.use(IconsPlugin);
}
