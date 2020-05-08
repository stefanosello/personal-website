<template>
  <div page-component>
    {{str}}
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: ['str']
}
</script>

<style lang="scss" scoped>
[page-component] {  }
</style>