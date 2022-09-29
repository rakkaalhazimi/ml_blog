<script setup>
import HeroSection from '@/components/HeroSection.vue';
import PostsSection from '@/components/PostsSection.vue';
import SearchBar from '@/components/SearchBar.vue';
import CardList from '@/components/CardList.vue';
import usePostStore from '@/stores/post'

const postStore = usePostStore()
</script>

<template>
  <HeroSection>
    <template #title>recognize.</template>
    <template #subtitle>Where machine learning is taught concisely</template>
    <template #button>start</template>
  </HeroSection>

  <PostsSection>
    <template #title>Browse Posts</template>
    <template #desc></template>
    <template #search>
      <SearchBar :store="postStore"></SearchBar>
    </template>
    <template #list>
      <CardList :posts="postStore.filteredPosts"></CardList>
    </template>

  </PostsSection>
</template>
