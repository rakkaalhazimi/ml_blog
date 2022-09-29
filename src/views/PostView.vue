<script setup>
  import { useRoute } from "vue-router";
  import usePostStore from "@/stores/post"
  import { defineAsyncComponent } from "vue";

  const postStore = usePostStore()
  const post = postStore.getPostFromId(useRoute().params.id)
  const content = defineAsyncComponent(post.content)
</script>

<template>
  <component :is="content"></component>
</template>

