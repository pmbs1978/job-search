<template>
  <img
    :src="imageLink"
    class="h-8 w-8 rounded-3xl object-contain"
    alt="profile image" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink: '../../public/PngItem_4876417.png'
    };
  }
};
</script>
