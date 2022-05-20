<template>
    <section class="hero is-primary is-fullheight">
    <div class="hero-body">
        <div class="container">
        <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                <form @submit.prevent="" action="" class="box">
                    <div class="field">
                        <label for="" class="label">Full name</label>
                        <div class="control has-icons-left">
                            <input v-model="fullname" type="email" placeholder="e.g. john doe" class="input" required>
                            <span class="icon is-small is-left">
                            <i class="fa fa-user"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label for="" class="label">Email</label>
                        <div class="control has-icons-left">
                            <input v-model="email" type="email" placeholder="e.g. johndoe@example.com" class="input" required>
                            <span class="icon is-small is-left">
                            <i class="fa fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label for="" class="label">Password</label>
                        <div class="control has-icons-left">
                            <input v-model="password" type="password" placeholder="*******" class="input" required>
                            <span class="icon is-small is-left">
                            <i class="fa fa-lock"></i>
                            </span>
                        </div>
                    </div>
                    <div class="field">
                        <label for="" class="checkbox is-size-7 mr-5">
                            <input type="checkbox" :checked="remember ?? true">
                            <a class="mx-1" @click="remember = !remember">Remember me </a>
                        </label>
                        <label for="" class="is-size-7 has-text-link" style="text-decoration: underline;">
                            <router-link :to="{name: 'Login'}">I already have an account</router-link>
                        </label>
                    </div>
                    <div class="field">
                        <button @click.prevent="register" class="button is-success mr-2 has-text-weight-medium">
                            Register
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
        </div>
    </div>
    </section>
  
</template>

<script>
import { ref, reactive } from 'vue';

export default {
    name: 'Signup',

    setup(props) {
        const remember = ref(false);
        const fullname = ref('');
        const email = ref('');
        const password = ref('');


        const userRegister = reactive({
            fullname: fullname.value,
            email: email.value,
            password: password.value,
        });

        function register() {

        }



        
        return { remember, fullname, email, password, register }
        
    }
}
</script>

<style>

</style>
