<template>
  <button :disabled="disabled" class="btn btn_medium btn_blue">
    <slot class="btn_icon btn_icon_medium" name="left"></slot>
    <span>{{props.title}}</span>
    <slot class="btn_icon btn_icon_medium" name="right"></slot>
  </button>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
