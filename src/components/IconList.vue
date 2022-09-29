<script setup>
  defineProps({
    icons: Number,
  })
</script>

<template>
  <ul class="icon__list">
    <li class="icon__item" v-for="n in icons">
      <slot :name="'icon-' + n"></slot>
    </li>
  </ul>
</template>