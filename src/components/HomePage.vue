<template>
  <div class="flex-grow-1" home-page-component>
    <div class="w-100 pb-5 pt-3 pt-md-5 bg-pearl-river-light">
      <div class="container">
        <div class="row flex-md-row-reverse">
          <div class="col-12 col-md-6 pr-md-5 pl-md-0 pb-3 pb-md-0 d-flex align-items-center">
            <div class="bg-cover-center ar-16by9 profile-image w-100"></div>
          </div>
          <div class="col-12 col-md-6 px-md-5">
            <h1 class="font-weight-bold">Stefano Sello</h1>
            <h4 class="font-weight-ligth mb-4">Junior Fullstack Developer</h4>
            <p>{{$t('home_page.description')}}</p>
            <div class="d-flex">
              <a class="btn btn-pearl-river" :href="`/cv.${$i18n.locale}.pdf`">{{$t('header.navbar.resume')}}</a>
              <router-link to="/portfolio" class="btn btn-prussian-blue ml-3">{{$t('header.navbar.portfolio')}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 py-5">
      <div class="container skills-section mb-5">
        <div class="row flex-md-row-reverse">
          <div class="col-12 section-title px-md-5">
            <h2 class="font-weight-bold pl-3">{{$t('home_page.skills_section.title')}}</h2>
            <p>{{$t('home_page.skills_section.description')}}</p>
            <div class="row">
              <div v-for="(skill, index) in skills" :key="`skill-${index}`" class="skill col-6 col-lg-3">
                <div class="skill-icons d-flex mb-2">
                  <span  v-for="(icon, i) in skill.icons" :key="`icon-${index}-${i}`">
                    <font-awesome-icon v-if="icon.classes" :icon="icon.classes" class="mr-3" :style="{'color': icon.color}"/>
                    <img v-if="icon.url" :src="icon.url" class="mr-3" />
                  </span>
                </div>
                <h4 class="skill-title font-weight-bold">{{skill.title}}</h4>
                <p class="skill-description">{{skill.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container px-md-5">
        <div class="w-100 bg-pearl-river separator"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  computed: {
    skills() {
      return this.$t('home_page.skills_section.skills');
    }
  }
}
</script>

<style lang="scss" scoped>
[home-page-component] {
  .profile-image {
    background-image: url('/profile-2.JPG');
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .section-title > h2 {
    border-left: 6px solid $vivid-sky-blue;
  }

  .skill-icons {
    font-size: 2rem;

    & img {
      height: 2rem;
      width: auto;
    }
  }

  .container > .separator {
    height: 1px;
  }

}
</style>