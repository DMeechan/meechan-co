<template>
    <div class="hero-body">
        <div class="container">
            <h1 class="title">
                <span class="has-text-weight-light">
                    Who am I?
                </span>
            </h1>
            <h2 class="subtitle has-text-dark has-text-weight-semibold">
                I'm...
                <transition name="fade" mode="in-out">
                    <span v-if="text !== ''">
                        {{ text }}
                    </span>
                </transition>
            </h2>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Body',
  data() {
    return {
      text: '',
      show: false,
    };
  },
  mounted() {
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
