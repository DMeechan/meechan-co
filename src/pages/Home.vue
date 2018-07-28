<template>
   <section id="home" class="hero is-fullheight is-dark">
        <Head></Head>
        <Body></Body>
        <Foot></Foot>
  </section>
</template>

<script>
import Head from './home/Head.vue';
import Body from './home/Body.vue';
import Foot from './home/Foot.vue';

export default {
  name: 'Home',
  components: {
    Head,
    Body,
    Foot,
  },
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
