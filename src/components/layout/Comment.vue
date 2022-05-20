<template>
    <div class="mb-5"> 
        <div class="notification p-2 is-secondary">
            <article class="media">
                <figure class="media-left">
                    <p class="image is-64x64">
                    <img :src='`https://beststaging.mathnation.com/includes/img/avatars/green/${data.id || 1}.jpg`'>
                    </p>
                    <p class="has-text-weight-medium is-size-6-desktop mt-2">{{ data.name || 'Not name'}}</p>
                </figure>
                <div class="media-content">
                    <div class="field">
                        <div v-html="data.content" class="notification is-white" style="cursor: default;" />
                    </div>
                    <nav class="level is-flex is-justify-content-flex-end">
                        <div class="level-left mt-2">
                            <div class="level-item">
                                <Button 
                                    @click="modal.edit = true" 
                                    label="Edit"
                                    class="button is-info"
                                    icon="fa-pen-to-square"
                                    size="30px"
                                />
                            </div>
                            <div class="level-item">
                                <Button 
                                    @click="modal.question = true" 
                                    label="Delete"
                                    class="button is-danger"
                                    icon="fa-trash"
                                    size="30px"
                                />
                            </div>
                        </div>
                    </nav>
                </div>
            </article>
            </div>
    </div>
    <transition name="fade">
        <keep-alive>
            <EditModal 
                v-if="modal.edit" 
                :active="modal.edit" 
                :data="data" 
                @new-content="save" 
                @show-question="modal.question = true" 
                @close="modal.edit = null" 
            />
        </keep-alive>
    </transition>
    <transition name="fade">
        <Modal 
            v-if="modal.question" 
            color='is-primary'
            :active="modal.question" 
            @confirm-delete="deleteNote" 
            @hide-alert="modal.question = null" 
            @close="modal.question = null"  
        >
            <template #title> 
                <h3>Hey! Alert</h3>
            </template> 
            <template #body> 
                <div class="is-flex is-justify-content-center">
                    <p>Are you sure you want to delete this comment?</p>
                </div>
            </template> 
            <template #button> 
                <div class="is-flex is-justify-content-center">
                    <button @click="deleteNote" class="button is-success">Yes</button>
                    <button @click="modal.question = null" class="button is-danger ml-2">No</button>
                </div>
            </template> 
        </Modal>
    </transition>
</template>
<script>

import { reactive } from 'vue';

import EditModal from './EditModal.vue';
import DeleteCommentModal from './DeleteCommentModal.vue'
import Modal from '@/components/Modal.vue';
import Button from '@/components/Button.vue';


export default {
    name: 'Comment',
    components: { 
        EditModal,
        DeleteCommentModal,
        Button,
        Modal
    },
     props: {
        data: Object,
     },
     emits: ['deleteNote', 'close', 'showQuestion', 'confirmDelete', 'hideAlert'],
    setup(props, { emit }) {

    const modal = reactive({
        edit: null,
        question: null,
    })

        function deleteNote(idToDelete) {
            emit('deleteNote', idToDelete)
        }

        function save(newContent) {
            props.data.content = newContent.value;
            modal.edit = null
        }


        return { deleteNote, modal, save,  }
    }
}
</script>

<style>

</style>