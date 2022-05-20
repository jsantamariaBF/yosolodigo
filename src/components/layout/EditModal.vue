<template>
     <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <article class="message is-secondary mb-4">
                <div class="message-header">
                    <p>EDIT NOTE</p>
                    <button @click="close" class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    <div class="container is-max-desktop">
                        <div class="container is-fluid my-4">
                            <textarea v-model.trim="new_content" placeholder="Insert your new comment" class="textarea is-info" maxlength="300" />
                        </div>
                    </div>
                    <div class="mt-5 ml-5 is-flex is-justify-content-center">
                        <button @click='close' class="button is-danger">
                            Cancel
                        </button>
                        <button :disabled="!new_content" @click.prevent="save" class="button is-success ml-2">
                            Save changes
                        </button>
                       
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'EditModal',
    props: {
        active: Boolean,
        data: Object,
    },

    setup(_, { emit }) {

        const new_content = ref('');

        function close() {
            emit('close');
        };

        function save() {
            emit('newContent', new_content);
        };

        return { close, save, new_content }
    }

}
</script>

<style>

</style>