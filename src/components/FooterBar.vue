<template>

  <div class="contact">
    <p class="contact__title">
      <slot name="contact-title"></slot>
    </p>
  
    <slot name="contact-icons"></slot>
  </div>

  <div class="copyright">
    <slot name="copyright-msg"></slot>
  </div>
  
</template>

