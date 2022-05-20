<template>
     <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <article :class="`message ${color} mb-4 pb-2`">
                <div class="message-header is-flex is-justify-content-center">
                    <slot name="title" />
                    <slot name="close" />
                </div>
                <div class="message-body">
                   <slot name="body" />
                </div>
                <slot name="button" />
            </article>
        </div>
    </div>
</template>

<script>
import { ref, onBeforeUnmount } from 'vue';

export default {
    name: 'Modal',
    props: {
        active: Boolean,
        data: String,
        color: {
            type: String,
            default: 'is-info'
        },
    },

    setup(props, { emit }) {

        const new_content = ref('');

        function close() {
            emit('close');
        };

        function save() {
            emit('newContent', new_content);
        };

        // onBeforeUnmount(() => {
        //         if (!props.data) {
        //             // Save it!
        //             if (confirm('Are you sure you want to leave without saving?')) {
        //                 // emit('close');
        //             } else {
        //             // Do nothing!
        //                 // emit('stay');
        //             }
        //         }
        //     }
        // );

        

        return { close, save, new_content }
    }

}
</script>

<style>

</style>