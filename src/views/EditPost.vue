<template>
    <Spacer />
    <Layout>
        <template #title>
            <h1 class="title is-size-3 has-text-dark">EDIT YOUR POST</h1> 
        </template>
        <template #content>
            <h2 class="subtitle has-text-dark">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet vero enim magni earum sapiente! Eum blanditiis culpa consectetur at! Sit corrupti architecto culpa nostrum, assumenda autem reiciendis suscipit ducimus? Fuga!
            </h2>
        </template>
    </Layout>
    <Spacer size="50px" />
    <div class="container">
        <h2 class="is-size-3">Edit your Post by writing in the following inputs:</h2>
    </div>
    <Spacer size="30px" />
    <div class="container">   
        <h3 v-if="!content" class="is-size-3">You can see your edition here</h3>

        <form @submit.prevent="submit" class="">
            <div 
                @mouseover="hover.title = true"
                @mouseleave="hover.title = false"
                class="has-background-white has-text-grey-light is-clickable p-3"
                style="position: relative;"
                @click.prevent="showEditor(0)"
            >
                <div 
                    v-if="hover.title" 
                    style="position: absolute; left:99%; right:10px;" 
                    class="is-flex is-justify-content-flex-end"
                >
                    <i class="is-size-3 fas fa-plus"></i>
                </div>
                title
                <section 
                    class="section has-text-dark py-5" 
                    v-html="content.title" 
                />
                <input 
                    class="input is-hidden" 
                    type="text" 
                    placeholder="Title"
                    v-model="content.title"
                >
            </div>
           <div class="field mt-4">
                <div 
                    @mouseover="hover.body = true"
                    @mouseleave="hover.body = false"
                    @click.prevent="showEditor(1)"
                    class="has-background-white has-text-grey-light is-clickable p-3"
                    style="position: relative; height:30rem;"
                >
                    <div  
                        v-if="hover.body" 
                        style="position:absolute; left:99%; right:10px;" 
                        class="has-background-dark is-flex is-justify-content-flex-end"
                    >
                        <i  class="is-size-3 fas fa-plus"></i>
                    </div>
                    body
                    <section 
                        class="section has-text-dark" 
                        v-html="content.body"
                    />
                    <textarea 
                        class="textarea is-rounded is-hidden" 
                        placeholder="Body"
                        v-model="content.body"
                    />
                </div>
            </div>
            <div class="field mt-4">
                <div 
                    @mouseover="hover.footer = true"
                    @mouseleave="hover.footer = false"
                    @click.prevent="showEditor(2)"
                    class="has-background-white has-text-grey-light is-clickable p-3"
                    style="position: relative;"
                >
                    <div  
                        v-if="hover.footer" 
                        style="position:absolute; left:99%; right:10px;" 
                        class="has-background-dark is-flex is-justify-content-flex-end"
                    >
                        <i  class="is-size-3 fas fa-plus"></i>
                    </div>
                    footer
                    <section 
                        class="section has-text-dark" 
                        v-html="content.footer"
                    />
                    <textarea 
                        class="textarea is-rounded is-hidden" 
                        placeholder="Body"
                        v-model="content.footer"
                    />
                </div>
            </div>
        </form>
        
        <div class="mt-5 is-flex is-justify-content-flex-end" >
            <button @click.prevent="modal.reset = true" :disabled="!content.title && !content.body && !content.footer" class="button is-secondary mr-2">Reset all</button>
            <button @click.prevent="submit" class=" button is-success">Save changes</button>
        </div>
    </div>

    <Spacer size="30px" />

    <!-- Text Editor -->
    <transition name="fade">
        <div v-if="openEditor" class="container p-5 has-background-dark" style="position:fixed; right:0; left:0; bottom:0rem; border:1px solid black;" >
            <div class="is-flex is-justify-content-flex-end" style="position:absolute; top:2.3rem; right:2.5rem;"> 
                <button v-if="openEditor" @click.prevent="openEditor = null" class="has-background-white is-hovered is-clickable mb-2" >
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <VueEditor
                id="editor"
                useCustomImageHandler
                placeholder="Insert text here"
                class="has-background-white is-fixed-bottom"
                v-model="formFields[input]"
                @close-editor="openEditor = null"
            >
            </VueEditor>
            <div v-if="openEditor" class="mt-2 is-flex is-justify-content-flex-end">
                <button @click="resetField" class="button is-secondary">Reset</button>
                <button @click="saveEdit" class="button is-success ml-2">Save</button>
            </div>
        </div>
    </transition>
    <Spacer size="300px" />
    <!-- Notifications -->
    <transition name="fade">
        <Notification  v-if="modal.success" color="is-primary">
            <template #title> 
                <h2 class="has-text-success">Success!</h2>
            </template>
            <template #content> 
                <p>Your post was updated successfully!</p>
            </template>
            
        </Notification>
    </transition>

    <transition name="fade">
        <Notification 
            v-if="modal.reset" 
            :event="modal.reset" 
            color="is-primary" 
            @reset-all="resetAll" 
            @not-reset="modal.reset = null"
        >
            <template #title> 
                <h2 class="">Heads up!</h2>
            </template>
            <template #content> 
                <p>Are you sure you want to reset all your content?</p>
            </template>
        </Notification>
    </transition>
</template> 

<script>
import { ref, reactive, watch } from 'vue';
import { VueEditor } from "vue3-editor";

import Spacer from '@/components/Spacer.vue';
import Modal from '@/components/Modal.vue';
import Notification from '@/components/Notification.vue';

import Layout from '@/components/layout/Layout.vue';

export default {
    name: "Post",
    components: { 
        Layout,
        Spacer,
        VueEditor,
        Modal,
        Notification
    },
    props: { 

    },
    setup(_) {
        const hover = reactive({
            title: false,
            body: false,
            footer: false,
        });
        const openEditor = ref(false);
        const modal = reactive({
            success: false,
            reset: false,
        });
        const content = reactive({
            title: '',
            body: '',
            footer: '',
        });
        const input = ref(0);
        const formFields = ref([]);

        watch(() => [formFields.value[0], formFields.value[1], formFields.value[2]], () => {
            if(!input.value) {
                content.title = formFields.value[0];
            } else if (input.value === 1) {
                content.body = formFields.value[1];
            } else {
                content.footer = formFields.value[2];
            }
        });

        function showEditor(index) {
            openEditor.value = true;
            input.value = index;
        };

        function resetAll() {
            content.title = '';
            content.body = '';
            content.footer = '';

            modal.reset = null;
        };

        function resetField() {
             if(!input.value) {
                formFields.value[0] = ''
            } else if (input.value === 1) {
                formFields.value[1] = ''
            } else {
                formFields.value[2] = ''
            }
        };

        function closeEdit() {
            if (content.title) {
                content.title = content.title;
            } else if (content.body) {
                content.body = content.body
            } else {
                content.footer = content.footer
            }

            openEditor.value = null;
        };

        function saveEdit() {
            openEditor.value = null;
        };

        function save() {
            if(!input.value) {
                content.title = formFields.value[0];
            } else if (input.value === 1) {
                content.body = formFields.value[1];
            } else {
                content.footer = formFields.value[2];
            }
        };

        function submit() {
            modal.success = true;

            setTimeout(() => {
                modal.success = null;
            }, 3000);
        };



        return { 
            content, 
            submit, 
            openEditor, 
            formFields, 
            input, 
            showEditor, 
            save, 
            resetAll,
            resetField,
            hover,
            closeEdit,
            saveEdit,
            modal,
        }
    }
}
</script>

<style>

</style>