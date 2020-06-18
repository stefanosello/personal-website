<template>
  <a :href="link.url" target="_blank" class="w-100 d-flex bg-pearl-river-light flex-wrap box-shadow flex-md-nowrap" tile>
    <div class="image bg-cover-center" :style="{'background-image': `url(${image.url})`}"></div>
    <div class="p-4 h-100 d-flex flex-column justify-content-center text">
      <h4 class="font-weight-bold text-deep-koamaru">{{title}}</h4>
      <p>{{description}}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    image: Object,
    title: String,
    description: String,
    link: Object
  }
}
</script>

<style lang="scss" scoped>
[tile] {
  transition: all .25s;
  color: $deep-koamaru;

  &:hover {
    text-decoration: none;
    color: $prussian-blue;
  }

  .image {
    width: 40%;
    padding-bottom: 40%;

    @include media-breakpoint-down(sm) {
      width: 100%;
      padding-bottom: 56.25%;
    }
  }

  @include media-breakpoint-up(md) {
    .text {
      max-width: 60%;
    }
  }
}
</style>