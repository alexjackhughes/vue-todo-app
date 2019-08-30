import Vue from "vue";
import App from "./App.vue";

// Setup Lodash used in filtering todos
import VueLodash from "vue-lodash";
const options = { name: "lodash" };
Vue.use(VueLodash, options);

// Setup Bulma framework for styling
import "./../node_modules/bulma/css/bulma.css";

// Setup Font Awesome for icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faPlusCircle,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faStar, faPlusCircle, faTrashAlt);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
