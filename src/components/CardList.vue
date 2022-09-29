<script setup>
defineProps({
  posts: Array
})
</script>

<template>
  <div class="card-list">
    <div class="card" v-for="post in posts" :key="post.id">
      <!-- <img :src="post.image" class="card__img" /> -->
      <h3>{{ post.title }}</h3>
      <p>{{ post.desc }}</p>
      <RouterLink :to="'/post/' + post.id">
        <button>Redirect</button>
      </RouterLink>
    </div>
  </div>
</template>