<template>
  <section id="skills" class="hero is-large is-dark">
    <div class="hero-body">
      <div class="container">

        <h1 class="title has-text-right" style="margin-bottom: 70px;">
          And <span class="has-text-primary">what I'm good at</span>
        </h1>

        <template v-for="(row, index) in skills">
          <div class="columns is-centered has-text-centered skills"
            style="margin-bottom: 30px;"
            :key="index">
            <div class="column" v-for="item in row" :key="item.name">
              <i :title="item.name" :class="item.class" style="font-size: 6rem;"></i>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import skills from './skills/content';

export default {
  name: 'Skills',
  components: {},
  created() {
    if (!Array.isArray(skills)) {
      console.error('Skills | skills content is not an array:', typeof skills);
    }
    this.skills = [];
    this.skills[0] = skills.slice(0, 4);
    this.skills[1] = skills.slice(4, 8);
  },
};
</script>

<style lang="scss">
.circle-text {
  width: 50%;
}
.circle-text:after {
  content: '';
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background: #4679bd;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
.circle-text div {
  float: left;
  width: 100%;
  padding-top: 50%;
  line-height: 1em;
  margin-top: -0.5em;
  text-align: center;
  color: white;
}
</style>
