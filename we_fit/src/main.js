import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faExternalLinkAlt, faSearch, faArrowUp, faArrowDown, faPlus, faShare, faCommentAlt, faCamera , faAngleDown, faAngleUp, faThumbsUp, faMedal, faDumbbell, faUsers, faStar, faRunning} from "@fortawesome/free-solid-svg-icons";

//Adicionar icons: https://stackoverflow.com/questions/66389974/using-font-awesome-in-vue-3
library.add(faSearch);
library.add(faArrowUp);
library.add(faArrowDown);
library.add(faPlus);
library.add(faShare);
library.add(faCommentAlt);
library.add(faCamera);
library.add(faAngleDown);
library.add(faExternalLinkAlt);
library.add(faAngleUp);
library.add(faThumbsUp);
library.add(faMedal);
library.add(faDumbbell);
library.add(faUsers);
library.add(faStar);
library.add(faRunning);
createApp(App).use(store).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
