<template>
   <section id="home" class="hero is-large is-warning">
      <Head></Head>
      <Body></Body>
      <Foot></Foot>
  </section>
</template>

<script>
import Head from './who/Head.vue';
import Body from './who/Body.vue';
import Foot from './who/Foot.vue';

export default {
  name: 'Who',
  components: {
    Head, Body, Foot,
  },
  data() {
    return {};
  },
  mounted() {
    // const rellax = new Rellax('.rellax', {
    //   center: true,
    // });
  },
};
</script>

<style lang="scss">
</style>
