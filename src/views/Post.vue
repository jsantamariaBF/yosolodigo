<template>
    <Spacer />
    <Layout>
        <template #title>
        </template>
        </Layout>
    <div>{{post}} </div>
</template>

<script>
import Spacer from '@/components/Spacer.vue'
import Layout from '@/components/layout/Layout.vue'


export default {
    name: 'Post',
    components: {
        Spacer,
        Layout,
    },
    props: {
        post: String,
    },

    setup(props) {
        console.log(props.post)
       
        return {  }
    }

}
</script>

<style>

</style>