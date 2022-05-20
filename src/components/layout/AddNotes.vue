<template>
    <h2 class="has-text-dark mb-5">Insert a comment</h2>
    <div class="mb-6">
        <textarea 
            v-model.trim="content" 
            class="textarea" 
            placeholder="e.g. Hello world"
        >
        </textarea>
        <button 
            :disabled="!content" 
            @click.prevent="addNote"
            class="button is-success is-medium mt-3"
        >
           <strong> Add Note </strong>
        </button>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { apiData } from '@/store';

export default {
    name: 'AddNotes',
    components: {

    },
    emits: ['addNote'],  
    setup(_, { emit }) {
        let content = ref('');

        const newNote = computed(() => { 
            return {
                id: apiData.value.length,
                content: content.value, 
            }} 
        );


        function addNote() {
            emit('addNote', newNote.value);
        }
        
        return { addNote, content, newNote, }
    }
}
</script>

<style>

</style>