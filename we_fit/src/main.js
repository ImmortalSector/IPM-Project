import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch} from "@fortawesome/free-solid-svg-icons";

//Adicionar icons: https://stackoverflow.com/questions/66389974/using-font-awesome-in-vue-3
library.add(faSearch);

createApp(App).use(store).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
