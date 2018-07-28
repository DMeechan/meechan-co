<template>
  <div id="app">
    <!-- <Navigation></Navigation> -->
    <Home></Home>
    <Who></Who>
    <Iam></Iam>
    <Mission></Mission>
    <Skills></Skills>
    <Projects></Projects>
    <Timeline></Timeline>
    <Contact></Contact>
  </div>
</template>

<script>
import Home from './pages/Home.vue';
import Who from './pages/Who.vue';
import Iam from './pages/I-am.vue';
import Mission from './pages/Mission.vue';
import Skills from './pages/Skills.vue';
import Projects from './pages/Projects.vue';
import Timeline from './pages/Timeline.vue';
import Contact from './pages/Contact.vue';

export default {
  name: 'app',
  components: {
    Home,
    Who,
    Iam,
    Mission,
    Skills,
    Projects,
    Timeline,
    Contact,
  },
};
</script>

<style lang="scss">

</style>
