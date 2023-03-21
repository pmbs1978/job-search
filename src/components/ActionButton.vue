<template>
  <button :class="buttonStyle">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: ['label', 'type'],
  data() {
    return {};
  },
  computed: {
    buttonStyle() {
      return {
        [this.type]: true
      };
    }
  }
};
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
}

.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
</style>
