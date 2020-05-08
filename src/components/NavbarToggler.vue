<template>
  <button type="button" class="navbar-toggler collapsed px-0" data-toggle="collapse" :data-target="`#${collapsibleNavbarId}`" @click="$emit('toggle-body-scroll')" navbar-toggler-component>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
  </button>
</template>

<script>
export default {
  name: 'NavbarToggler',
  props: {
    collapsibleNavbarId: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
[navbar-toggler-component] {
  border: none;
  background: transparent !important;

  &:hover,
  &:active,
  &:focus {
    background: transparent !important;
    outline: 0;
  }

  .icon-bar {
    width: 22px;
    height: 2px;
    margin: 4px 0;
    display: block;
    border-radius: 1px;
    transition: all 0.2s;
    -webkit-transition: all 0.2s;
    background-color: $vivid-sky-blue;
  }

  &.collapsed .icon-bar:nth-of-type(1) {
    transform: translate3d(0,0,0) rotate(0deg);
    width: 22px;
  }

  &.collapsed .icon-bar:nth-of-type(2) {
    transform: translate3d(0,0,0) rotate(0deg);
  }

  &.collapsed .icon-bar:nth-of-type(3) {
    transform: translate3d(0,0,0) rotate(0deg);
    width: 22px;
  }

  & .icon-bar:nth-of-type(1) {
    transform: translate3d(2px,-1px,0) rotate(-45deg);
    transform-origin: center center;
    width: 11px;
  }

  & .icon-bar:nth-of-type(2) {
    transform: rotate(-90deg);
    transform-origin: center center;
  }

  & .icon-bar:nth-of-type(3) {
    transform: translate3d(-1px,-15px,0) rotate(-135deg);
    transform-origin: right top;
    width: 11px;
  }
  /* END ANIMATED UP ARROW */
}
</style>