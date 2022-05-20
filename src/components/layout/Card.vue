<template>
    <div @click.prevent="navigateToPost(post.id)" class="card is-clickable">
        <div class="card-content">
            <img class="image" :src="post.img" alt="">
            <div class="media mt-3">
                <div class="media-content">
                    <h3 class=""><strong>{{ post.title }}</strong></h3>
                    <p class="subtitle is-6">{{ post.social_media }}</p>
                </div>
            </div>
            <div class="content">{{ post.body }}</div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    name: "Card",
    props: { 
        post: Object
    },
    setup(props, ) {
        const router = useRouter();

        function navigateToPost (id){
            router.push({ name: 'Post', params: { id } })


            // router.push({ name: 'EditPost', params: { id: props.post.id.toString() } })
        }

        return { navigateToPost }
    }
}
</script>

<style>

</style>