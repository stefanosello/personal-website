import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

import it from '../locales/it.js';
import en from '../locales/en.js';

const messages = {
  en,
  it
}

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});

export default i18n;