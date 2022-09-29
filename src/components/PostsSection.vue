<template>
  <section class="posts">

    <h2 class="posts__title">
      <slot name="title"></slot>
    </h2>

    <p class="posts__desc">
      <slot name="desc"></slot>
    </p>

    <div class="posts__search">
      <slot name="search"></slot>
    </div>

    <div class="posts__list">
      <slot name="list"></slot>
    </div>

  </section>
</template>