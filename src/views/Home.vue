<template>
    <br>
    <div class="container is-fluid">
        <CarouselVue :autoplay="3000"/>
    </div>

    <hr class="is-divider">
    <div class="is-max-desktop">
        <Layout>
            <template #title>
                <div class="container">
                    <h2 class="">
                    When I make a film, I am hoping to <strong>reinvent</strong> the genre a little bit. 
                    I just do it my way. I make my own little Quentin versions of them... 
                    I consider myself a <strong>student</strong> of cinema. It's almost like I am going for my 
                    professorship in cinema, and the day I die is the day I graduate. It is a 
                    lifelong study.
                    </h2>
                    <div class="is-flex is-justify-content-end">
                        <strong class="pt-5 is-size-4">-Quentin Tarantino</strong>
                    </div>
                </div>
            </template>
        </Layout>
    </div>

    <hr class="is-divider"/>

    <section class="section ">
        <div class="container-fluid">
        <h1 class="mb-5">Posts</h1>
            <div class="columns has-background-dark-light is-flex-wrap-wrap">
                <div v-for="post in postsData" :key="post.id" class="column is-narrow is-3">
                    <!-- <div class="media-left">
                        <figure class="image is-square">
                            <img :src="post.img" alt="">
                        </figure>
                    </div> -->
                    <Card :post="post" />
                </div>
            </div>
        </div>
    </section>

    <hr class="is-divider"/>
   
    <div class="p-6">
        <AddNotes @add-note="addNote" />
        <h3 class="is-size-3 has-text-weight-medium ">Comments ({{apiData.length}})</h3>
        <div v-if="apiData.length" style="overflow-y: scroll; height: 30rem;'">
            <transition-group name="fade">
                <div v-for="(data) in apiData" :key="data.id">
                    <Comment :data="data" @delete-note="deleteNote(data.id)" />
                </div>
            </transition-group>
        </div>
        <div v-else class="container is-fluid">
            <div class="notification is-primary">
                There are not comments...
            </div>
        </div>

    </div>

    <hr class="is-divider"/>

    <router-view />
</template>

<script> 
import Spacer from '@/components/Spacer.vue'

import AddNotes from '@/components/layout/AddNotes.vue'
import Comment from '@/components/layout/Comment.vue'
import Card from '@/components/layout/Card.vue'
import Layout from '@/components/layout/Layout.vue'
import CarouselVue from '@/components/layout/CarouselVue.vue'

import { apiData, postsData } from '@/store';


export default {
    name: 'ViewNotes',
    components: {
        Comment,
        Card,
        AddNotes,
        Layout,
        Spacer,
        CarouselVue,
    },
    emits: ['addItem', 'deleteNote', 'goToPost', ],
    setup() { 

    const data = [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>',
      ];


    function addNote(newNote) {
        apiData.value.unshift(newNote)
    }

    function deleteNote(idToDelete) {
        apiData.value = apiData.value.filter(note => note.id !== idToDelete)
    }

        return {  apiData, postsData, addNote, deleteNote, data }
    }
}

</script>

