import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import './style.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faLaptopCode, faFileCode, faBlog, faAddressBook, faGem, faServer } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faVuejs, faJsSquare, faAngular, faNodeJs, faPython, faPhp, faHtml5, faCss3Alt, faSass } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import i18n from './modules/translations-module';
import router from './modules/router-module';

const skillIcons = [faVuejs, faJsSquare, faAngular, faNodeJs, faPython, faPhp, faHtml5, faCss3Alt, faSass, faGem, faServer]
library.add(faFacebook);
library.add(faGithub);
library.add(faInstagram);
library.add(faLinkedin);
library.add(faTwitter);
library.add(faUser);
library.add(faLaptopCode);
library.add(faFileCode);
library.add(faBlog);
library.add(faAddressBook);
library.add(skillIcons);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  i18n,
  router
}).$mount('#app')
