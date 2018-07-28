<template>
   <section id="home" class="hero is-small is-dark">
      <div class="hero-body">
        <div class="container">
          <div class="columns" v-for="item in content" :key="item.name">
              <div :class="titleAlignment(item.odd)">
                {{ item.name }}
              </div>
              <div :class="emojiAlignment(item.odd)">
                <figure class="image is-128x128">
                  <img :src="item.image_url">
                </figure>
              </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import content from "./I-am/content.js";

export default {
  name: 'I-am',
  created() {
    this.content = content;
  },
  methods: {
    titleAlignment(isOdd) {
      const standardClasses = "column has-text-right subtitle has-text-weight-semibold ";
      return isOdd === false ? standardClasses + "is-two-thirds" : standardClasses;
    },
    emojiAlignment(isOdd) {
      const standardClasses = "column ";
      return isOdd === false ? standardClasses : standardClasses + "is-two-thirds";
    },
  },
};
</script>

<style lang="scss">

</style>
