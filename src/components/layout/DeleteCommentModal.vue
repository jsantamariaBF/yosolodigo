<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <article class="message is-primary mb-4">
                <div class="message-header">
                    <p></p>
                    <button @click="hideAlert" class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body is-flex is-justify-content-center">
                    Are you sure you want to delete this note?
                </div>
                 <div class="is-flex is-justify-content-center">
                    <button @click.prevent="confirmDelete" class="button is-success">Yes</button>
                    <button @click="hideAlert" class="button is-danger ml-2 mb-4">No</button>
                </div>
            </article>
        </div>
    </div>
</template>

<script>

export default {
    name: 'QuestionDelete',
    props: {
        data: Object
    },
    
    setup(props, { emit }) {

       function confirmDelete() {
        emit('confirmDelete', props.data)
       }

       function hideAlert() {
        emit('hideAlert')
       }

        return { confirmDelete, hideAlert }
    }

}
</script>

