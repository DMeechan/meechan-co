<template>
  <section id="skills" class="hero is-large is-dark">
    <div class="hero-body">
      <div class="container">

        <h1 class="title has-text-right">
          And <span class="has-text-primary">what I'm good at</span>
        </h1>

        <div class="columns is-centered">

          <div class="circle-text"><div>I'm a Circle!</div></div>

          <div class="column has-text-centered has-text-light">
            <h2 class="is-size-2">
              Skills
            </h2>
            <template v-for="item in skills">
              <article class="media" :key="item.name">
                <div class="media-content">
                  <div class="content">
                    <h4 class="is-size-4 has-text-light has-text-centered">
                      {{ item.name }}
                    </h4>
                  </div>
                </div>
              </article>
            </template>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
import content from './skills/content.js';

export default {
  name: 'Skills',
  components: {},
  created() {
    this.content = content;
  },
};
</script>

<style lang="scss">
.circle-text {
    width:50%;
}
.circle-text:after {
    content: "";
    display: block;
    width: 100%;
    height:0;
    padding-bottom: 100%;
    background: #4679BD;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
.circle-text div {
    float:left;
    width:100%;
    padding-top:50%;
    line-height:1em;
    margin-top:-0.5em;
    text-align:center;
    color:white;
}
</style>
