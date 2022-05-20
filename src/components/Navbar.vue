<template>
  <nav 
    class="navbar is-light has-navbar has-shadow is-fixed-top py-5"
    style="" 
  >
    <div 
      class="is-logo-style has-text-dark has-background-dark ml-6 is-hovered" 
      style=""
    >
      <router-link 
        :to="{path: '/'}" 
        
      >
        <h2 class="level-item is-size-5 is-family-monospace">
            <strong class="has-text-light has-text-logo is-hovered">YO</strong>
        </h2>
        <h2 class="level-item is-size-5 is-family-monospace">
            <strong class="has-text-light has-text-logo is-hovered mb-1">SOLO</strong>
        </h2>
        <h2 class="level-item is-size-3 is-family-monospace is-hovered">
            <strong 
              class="has-text-success has-text-logo" 
              style="letter-spacing: 0.1rem; padding: 0px;"
            >DIGO
          </strong>
        </h2>
          <span class="has-text-warning">---------</span>
      </router-link>
    </div>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <div class="container">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <!-- <div class="level-item"> -->
          <div class="is-hovered navbar-item">
            <router-link :to="{name: 'Home'}" class="has-text-dark">
               <h3>Home</h3>
            </router-link>
          </div>
        <!-- </div> -->
        <!-- <div class="level-item" style="position: relative;"> -->
          <div class="navbar-item is-hovered">
            <router-link :to="{name: 'ArtAndMore'}" class="has-text-dark">
               <h3>Arts & more</h3> 
            </router-link>
          </div>
        <!-- </div> -->
        <!-- <div class="level-item"> -->
          <div class="navbar-item is-hovered">
              <router-link :to="{name: 'Contact'}" class="has-text-dark">
                <h3>Contact</h3> 
              </router-link>
          </div>
        </div>
        <!-- <div class="level-item"> -->
          <div class="navbar-item is-hovered">
            <router-link :to="{name: 'Login'}" class="has-text-dark">
              <h3>Login</h3> 
            </router-link> /
            <router-link :to="{name: 'Signup'}" class="has-text-dark ml-1">
              <h3>Register</h3> 
            </router-link>
          </div>
        </div>
      </div>
    <!-- </div> -->
  </nav>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'Navbar',
    setup() {

        const showMobileMenu = ref(false);
        const closeMore = ref(false);



        return { showMobileMenu, closeMore,  }
    }
}

</script>

<style lang="scss"  scoped>
@media (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        width: 100%;
        left: 0;
    }
}

.has-navbar {
  box-shadow: 10px 10px 10px white; 
  position: relative; 
  border: 4px dashed #ccc;
}

.is-logo-style { 
  border: 2px solid #ccc; 
  border-radius: 20%; 
  transform: rotate(-10deg); 
  position: absolute; 
  line-height: 1.5rem; 
  padding: 1rem;
}

</style>