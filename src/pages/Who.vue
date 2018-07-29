<template>
   <section id="home" class="hero is-medium is-dark">
      <div class="hero-body" style="padding-bottom: 0px;">
        <div class="container">
            <h1 class="title">
              Who am I?
            </h1>
            <h2 class="subtitle has-text-grey-darker" style="">
                <transition name="fade" mode="in-out">
                  <span v-if="text !== ''" class="hue has-text-weight-semibold">
                    {{ text }}
                  </span>
                </transition>
                <!-- <span class="has-text-white">
                  who is...
                </span> -->
            </h2>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Who',
  data() {
    return {
      text: '',
    };
  },
  created() {
    let index = -1;
    const list = [
      'a software developer',
      'an avid experimenter',
      'an entrepreneur',
    ];

    const showNextItem = () => {
      index += 1;
      if (index > list.length - 1) index = 0;
      this.text = list[index];
      setTimeout(() => {
        showNextItem();
      }, 2500);
    };

    showNextItem();
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.title {
  font-size: 96px;
}
.subtitle {
  font-size: 48px;
}
.subtitle {
  //   float: right;
  margin-top: 0;
  margin-left: 130px;
}
</style>
