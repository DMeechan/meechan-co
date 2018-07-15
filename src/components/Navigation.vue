<template>
    <nav class="navbar is-light">
        <!-- is-fixed-top -->
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item">
                    DANIEL MEECHAN
                </a>
                <span class="navbar-burger burger" data-target="navbarMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id="navbarMenu" class="navbar-menu">
                <div class="navbar-end">
                    <a class="navbar-item is-active" href="#home">
                        Home
                    </a>
                    <a class="navbar-item" href="#who">
                        Who Am I?
                    </a>
                    <a class="navbar-item" href="#mission">
                        Mission
                    </a>
                    <a class="navbar-item" href="#skills">
                        Skills
                    </a>
                    <a class="navbar-item" href="#projects">
                        Projects
                    </a>
                    <a class="navbar-item" href="#timeline">
                        Timeline
                    </a>
                    <a class="navbar-item" href="#contact">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navigation',
  mounted() {
    document.addEventListener('DOMContentLoaded', () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll('.navbar-burger'),
        0,
      );

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach((el) => {
          el.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            const { target } = el.dataset;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    });
  },
};
</script>

<style lang="scss">
</style>
