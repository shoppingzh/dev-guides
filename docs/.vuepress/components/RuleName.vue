<template>
  <a-tag
    v-bind="$attrs"
    v-on="$listeners"
    color="blue">
    <slot />
  </a-tag>
</template>

<script>
export default {
}
</script>