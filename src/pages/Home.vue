<template>
  <section class="hero is-fullheight">
    {{ msg1 }}
    {{ msg2 }}
  </section>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      msg1: "Hi, I'm Daniel",
      msg2: 'Meechan',
    };
  },
};
</script>

<style lang="scss">
</style>
