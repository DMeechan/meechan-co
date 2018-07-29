<template>
   <section id="attributes" class="hero is-small is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
              This is <span class="has-text-success">what I'm like</span>
            </h1>
          <div class="columns is-vcentered" v-for="item in content" :key="item.name" style="margin-left: -150px;">
            <div v-if="item.odd === false" class="column is-5"></div>
            <div class="column is-5 has-text-right" style="margin-top: 10px;">
              <span class="subtitle has-text-weight-semibold">
                {{ item.name }}
              </span>
            </div>
            <div class="column">
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
import content from "./Attributes/content.js";

export default {
  name: 'Attributes',
  created() {
    this.content = content;
  },
  methods: {
    titleAlignment(isOdd) {
      const standardClasses = "column subtitle has-text-weight-semibold ";
      return isOdd === false ? standardClasses + "is-half has-text-right" : standardClasses;
    },
    emojiAlignment(isOdd) {
      const standardClasses = "column ";
      // return isOdd === false ? standardClasses : standardClasses + "is-two-thirds";
      return standardClasses;
    },
  },
};
</script>

<style lang="scss">

</style>
