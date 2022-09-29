<script setup>
  defineProps({
    links: Number
  })
</script>

<template>

  <nav>
    <!-- Nav logo -->
    <div class="nav__logo">
      <slot name="logo"></slot>
    </div>

    <!-- Nav links -->
    <ul class="nav__links">
      <li class="nav__link-item" v-for="n in links">
        <slot :name="'link-' + n"></slot>
      </li>
    </ul>
  </nav>

</template>