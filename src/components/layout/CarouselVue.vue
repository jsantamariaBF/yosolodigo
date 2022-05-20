<template>
  <Carousel :items-to-show="2" :wrap-around="true">
  
    <Slide v-for="post in postsData" :key="post.id">
      <img @click="navigateToPost(post)" :src="post.img" class="carousel__item" />
    </Slide>

    <template #addons>
      <Navigation />
    </template>
    
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import { postsData } from '@/store';

export default defineComponent({
  name: 'CarouselVue',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup(props) {

    const router = useRouter();


        function navigateToPost (post){ 
            router.push({ name: 'Post', params: { id: JSON.stringify(post.id) }, props: { id: post.id, post: JSON.stringify(post) } })
            // router.push({ name: 'EditPost', params: { id: props.post.id.toString() } })
        }


  

    return {
      postsData, navigateToPost
    }
  }
});
</script>

<style lang="scss">
/* Carousel */
  .carousel__item {
    min-height: 40vh;
    width: 100%;
    background-color: #3e3e3e;
    color:  #f4f3f3;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .carousel__slide {
    padding: 10px;
  }

  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
    color: #3e3e3e;
    background-color: #E7c969;
  }

</style>