<template>
  <header class="header sticky-top w-100" header-component>
    <nav class="navbar navbar-expand-md bg-deep-koamaru flex-md-column h-100">
      <a class="navbar-brand py-3 py-md-4" href="#">
        <h1 class="text-light mb-0">Stefano Sello</h1>
      </a>

      <NavbarToggler @toggle-body-scroll="toggleBodyScroll()" collapsibleNavbarId="collapsibleNavbar"/>
      
      <div class="collapse navbar-collapse flex-column w-100 align-items-start" id="collapsibleNavbar">
        <div class="w-100 profile-image pt-3">
          <img src="/profile.jpg" class="rounded-circle d-block mx-auto mb-4" />
        </div>
        <p class="profile-description text-light text-center">
          {{$t("header.description")}}
        </p>

        <div class="d-flex justify-content-center w-100 mb-3">
          <a href="https://www.facebook.com/stefano.sello.7" target="_blank" class="social-icons text-prussian-blue mx-2">
            <font-awesome-icon :icon="['fab','facebook']" />
          </a>
          <a href="https://github.com/Mr5he11" target="_blank" class="social-icons text-prussian-blue mx-2">
            <font-awesome-icon :icon="['fab','github']" />
          </a>
          <a href="https://www.instagram.com/stefanosello.py/" target="_blank" class="social-icons text-prussian-blue mx-2">
            <font-awesome-icon :icon="['fab','instagram']" />
          </a>
          <a href="https://www.linkedin.com/in/stefano-sello/" target="_blank" class="social-icons text-prussian-blue mx-2">
            <font-awesome-icon :icon="['fab','linkedin']" />
          </a>
          <a href="https://twitter.com/Mr5he11" target="_blank" class="social-icons text-prussian-blue mx-2">
            <font-awesome-icon :icon="['fab','twitter']" />
          </a>
        </div>

        <div class="w-100 divider"></div>

        <ul class="navbar-nav flex-column text-left p-3 flex-grow-1 w-100">
          <li class="nav-item">
            <router-link to="/" class="nav-link font-weight-bold text-vivid-sky-blue d-flex align-items-center">
              <font-awesome-icon :icon="['fas','user']" class="mr-3"/>
              {{$t('header.navbar.about')}}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/portfolio" class="nav-link font-weight-bold text-vivid-sky-blue d-flex align-items-center">
              <font-awesome-icon :icon="['fas','laptop-code']" class="mr-3"/>
              {{$t('header.navbar.portfolio')}}
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link font-weight-bold text-vivid-sky-blue d-flex align-items-center" :href="`/cv.${$i18n.locale}.pdf`" target="_blank">
              <font-awesome-icon :icon="['fas','file-code']" class="mr-3"/>
              {{$t('header.navbar.resume')}}
            </a>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link font-weight-bold text-vivid-sky-blue d-flex align-items-center">
              <font-awesome-icon :icon="['fas','blog']" class="mr-3"/>
              {{$t('header.navbar.blog')}}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contacts" class="nav-link font-weight-bold text-vivid-sky-blue d-flex align-items-center">
              <font-awesome-icon :icon="['fas','address-book']" class="mr-3"/>
              {{$t('header.navbar.contact')}}
            </router-link>
          </li>
          <div class="flex-grow-1 d-flex justify-content-end align-items-end">
            <div class="d-flex align-items-center lang-switch">
              <div class="mx-2" :class="{'selected': $i18n.locale === 'en'}">
                <img src="../assets/en.png" @click="changeLocale('en')"/>
                <div class="lang-highlighter"></div>
              </div>
              <div class="mx-2" :class="{'selected': $i18n.locale === 'it'}">
                <img src="../assets/it.png" :class="{'selected': $i18n.locale === 'it'}" @click="changeLocale('it')"/>
                <div class="lang-highlighter"></div>
              </div>
            </div>
          </div>
        </ul>

        <div class="w-100 divider"></div>

        <div class="small text-light py-3 text-center" v-html="$t('header.footer')"></div>
      </div>
    </nav>
  </header>
</template>

<script>
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import NavbarToggler from './NavbarToggler.vue';

export default {
  name: 'Header',
  components: {
    NavbarToggler
  },
  data() {
    return {
      bodyScrollLocked: false
    }
  },
  methods: {
    changeLocale(lang) {
      this.$i18n.locale = lang;
    },
    toggleBodyScroll() {
      console.log("toggle body scroll");
      if (this.bodyScrollLocked){
        clearAllBodyScrollLocks();
        this.bodyScrollLocked = false;
      } else {
        disableBodyScroll(this.$el);
        this.bodyScrollLocked = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
[header-component] {

  h1 {
    font-weight: bold;
    font-size: 1.5rem;
  }

  .profile-image > img {
    width: 9rem;
    height: 9rem;
  }

  .divider {
    height: 1px;
    background-color: $prussian-blue;
  }

  .social-icons {
    font-size: 1.5rem;
  }

  .nav-link > svg {
    width: 2rem;
  }

  .lang-switch {

    img {
      max-width: 2rem;
      height: auto;
      cursor: pointer;
    }

    & > div .lang-highlighter {
      width: 100%;
      height: 0;
      background-color: $prussian-blue;
      transition: height .25s;
    }

    & > div.selected .lang-highlighter {
      height: 3px;
    }
  }

  @include media-breakpoint-up(md) {
    max-width: $sidebar-width;
    height: 100vh;

    .nav-link {
      transition: margin-left .5s;

      &:hover {
        margin-left: 1.5rem;
      }
    }
  }
}
</style>
