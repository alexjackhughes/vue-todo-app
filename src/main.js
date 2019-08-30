import Vue from "vue";
import App from "./App.vue";

// Setting up Bulma framework for styling
import "./../node_modules/bulma/css/bulma.css";

// Setting up Font Awesome for icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faStar, faPlusCircle);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
