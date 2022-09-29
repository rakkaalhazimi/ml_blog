<script setup>
defineProps(['store'])
</script>

<template>
  <input type="text" v-model="store.keywords" />
  <p>{{ store.keywords }}</p>
</template>

