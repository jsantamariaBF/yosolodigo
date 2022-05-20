<template>
  <main>
  <Navbar/>
    <router-view />
  <Footer />
  </main>
</template>

<script> 
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';


  export default {
  components: {
    Navbar,
    Footer,
  }
}


</script>

<style lang="scss">

/* TRANSITIONS */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

/* OVERRIDE EDITOR CLASSES */
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.17rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: .83rem;
  }

  h6 {
    font-size: .67rem;
  }

  blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
  }

  // ul {
  //   li {
  //     list-style-type: square;
  //   }
  // }

  hr.is-divider {
    border-top: 4px dashed #ccc;
    border-radius: 5px;
  } 
  
  .ql-align-center {
    text-align: center;
  }

  .ql-align-right {
    text-align: right;
  }

  .ql-align-justify {
    text-align: justify;
  }

  .ql-indent-1 {
      padding-left: 3em;
  }

  .ql-indent-2 {
      padding-left: 6em;
  }

  .ql-indent-3 {
      padding-left: 9em;
  }

  .ql-indent-4 {
    padding-left: 12em;
  }

  .ql-indent-5 {
    padding-left: 15em;
  }

  .ql-editing {
    left: 10px !important; 
  }

  .is-hovered:hover {
    transform: scale(1.1);
    transition: 0.2s ease-in-out;
  }

  .has-text-logo {
    text-shadow: 0 0 1px black;
    letter-spacing: 0.2rem;
  }

</style>
