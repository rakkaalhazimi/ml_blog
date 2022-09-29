<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import NavigationBar from "@/components/NavigationBar.vue";
import FooterBar from "@/components/FooterBar.vue";
import IconList from '@/components/IconList.vue';
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';
import IconGithub from '@/components/icons/IconGithub.vue';
import IconKaggle from '@/components/icons/IconKaggle.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';
</script>

<template>

  <header>
    <!-- Navigation Bar -->
    <NavigationBar :links="2">

      <template #logo>
        <RouterLink to="/">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="32" height="32" />
        </RouterLink>
      </template>

      <template #link-1>
        <RouterLink to="/">Home</RouterLink>
      </template>

      <template #link-2>
        <RouterLink to="/about">About</RouterLink>
      </template>

    </NavigationBar>
  </header>

  <!-- Content / Router View -->
  <main :class="useRoute().name">
    <RouterView />
  </main>

  <!-- Footer bar -->
  <footer>
    <FooterBar>
      <!-- Contacts -->
      <template #contact-title>Contact Me</template>
      <template #contact-icons>
        <IconList :icons="4">

          <template #icon-1>
            <a href="https://www.linkedin.com/in/rakka-alhazimi-707848198/" target="_blank"><IconLinkedIn /></a>
          </template>
          <template #icon-2>
            <a href="https://github.com/rakkaalhazimi" target="_blank"><IconGithub /></a>
          </template>
          <template #icon-3>
            <a href="https://www.kaggle.com/rakkaalhazimi/" target="_blank"><IconKaggle /></a>
          </template>
          <template #icon-4>
            <a href="https://www.instagram.com/rakkayombex/" target="_blank"><IconInstagram /></a>
          </template>

        </IconList>
      </template>

      <!-- Copyrights -->
      <template #copyright-msg>Copyright all rights reserved. Design by Rakka.</template>

    </FooterBar>
  </footer>

</template>

<style lang="scss">
@import "@/style/_main.scss";
</style>