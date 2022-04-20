<template>
  <a-tag
    v-bind="$attrs"
    :color="color"
    v-on="$listeners">
    {{ name }}
  </a-tag>
</template>

<script>

const LEVELS = {
  0: {
    color: 'rgba(0, 0, 0, .5)',
    name: '禁止'
  },
  1: {
    color: '#fa541c',
    name: '警告'
  },
  2: {
    color: '#cf1322',
    name: '错误'
  }
}

export default {
  props: {
    value: { type: Number, default: 0 }
  },
  computed: {
    color() {
      return LEVELS[this.value].color
    },
    name() {
      return LEVELS[this.value].name
    }
  }
}
</script>

<style>

</style>