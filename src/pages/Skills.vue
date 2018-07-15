<template>
  <section id="skills" class="hero is-large is-dark">
    <div class="hero-body">
      <div class="container">

        <h1 class="title">
          My
          <span class="has-text-primary">skills</span>
          &
          <span class="has-text-warning">attributes</span>
        </h1>

        <div class="columns is-centered">

          <div class="column has-text-centered">
            <h2 class="is-size-2">
              Attributes
            </h2>

            <template v-for="item in attributes">
              <article class="media" :key="item.name">
                <figure class="image is-96x96">
                  <img :src="item.image_url">
                </figure>
                <div class="media-content">
                  <div class="content">
                    <br />
                    <h4 class="is-size-4 has-text-light has-text-centered">
                      {{ item.name }}
                    </h4>
                  </div>
                </div>
              </article>
            </template>
          </div>

          <div class="column has-text-centered">
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
export default {
  name: 'Skills',
  components: {},
  data() {
    return {
      attributes: [
        {
          name: 'Empathy',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Twemoji2_1f600.svg/96px-Twemoji2_1f600.svg.png',
        },
        {
          name: 'Enthusiasm',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Twemoji2_1f604.svg/96px-Twemoji2_1f604.svg.png',
        },
        {
          name: 'Perseverance',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Twemoji2_1f605.svg/96px-Twemoji2_1f605.svg.png',
        },
        {
          name: 'Teamwork',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Twemoji2_1f64b-1f3fb-200d-2642-fe0f.svg/96px-Twemoji2_1f64b-1f3fb-200d-2642-fe0f.svg.png',
        },
      ],
      skills: [
        {
          name: 'Node.js',
          image_url: '',
        },
        {
          name: 'Meteor.js',
          image_url: '',
        },
        {
          name: 'Javascript',
          image_url: '',
        },
        {
          name: 'Vue.js',
          image_url: '',
        },
        {
          name: 'Version Control (Git)',
          image_url: '',
        },
        {
          name: 'Infrastructure Automtion (Ansible)',
          image_url: '',
        },
        {
          name: 'Automated Testing (Cypress)',
          image_url: '',
        },
        {
          name: 'Artificial Intelligence',
          image_url: '',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>
