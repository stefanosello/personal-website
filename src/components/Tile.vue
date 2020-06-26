<template>
  <a :href="content.link.url" target="_blank" class="w-100 d-flex bg-prussian-blue flex-wrap box-shadow flex-md-nowrap" tile>
    <div class="image bg-cover-center position-relative" :style="{'background-image': `url(${content.image.url})`}">
      <div class="gradient position-absolute-center"></div>
      <div v-if="content.category" class="position-absolute category p-2 m-3 text-uppercase small" :class="!!content.category.color ? `bg-${content.category.color}` : 'bg-pearl-river'">
        {{content.category.title}}
      </div>
    </div>
    <div class="p-4 h-100 d-flex flex-column justify-content-center text">
      <h4 class="font-weight-bold">{{content.title}}</h4>
      <p>{{content.description}}</p>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Tile',
  props: {
    content: Object,
  }
}
</script>

<style lang="scss" scoped>
[tile] {
  transition: all .25s;
  color: $pearl-river;

  &:hover {
    text-decoration: none;
    color: lighten($pearl-river, 35);
  }

  .image {
    width: 40%;
    padding-bottom: 40%;

    @include media-breakpoint-down(sm) {
      width: 100%;
      padding-bottom: 56.25%;
    }

    .gradient {
      background-color: rgba(0,0,0,.25);
    }
  }

  .category {
    border-radius: 1rem;
    line-height: .5rem;
    mix-blend-mode: screen;
    color: black;
    font-weight: 900;
  }

  @include media-breakpoint-up(md) {
    .text {
      max-width: 60%;
    }
  }
}
</style>