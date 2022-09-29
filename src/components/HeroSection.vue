<template>
  <section class="hero">
    <h1 class="hero__title">
      <slot name="title"></slot>
    </h1>
  
    <p class="hero__subtitle">
      <slot name="subtitle"></slot>
    </p>

    <button class="hero__button">
      <slot name="button"></slot>
    </button>
  </section>
</template>