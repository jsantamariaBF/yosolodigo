import { createRouter, createWebHashHistory } from 'vue-router'
import Signup from '@/views/Signup.vue';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue'
import ArtAndMore from '@/views/ArtAndMore.vue'
import Contact from '@/views/Contact.vue';
import Post from '@/views/Post.vue';
import EditPost from '@/views/EditPost.vue';




const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/artandmore',
        name: 'ArtAndMore',
        component: ArtAndMore,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
     {
        path: '/post/:id',
        name: 'Post',
        component: Post,
        props: true,
    },
    {
        path: '/edit/post/:id',
        name: 'EditPost',
        component: EditPost,
    },
        
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;