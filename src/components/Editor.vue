
<template>
    <component :is="tag" @click.prevent="close" class="is-justify-content-flex-end">
        <i :class="icon"></i>
    </component>
        <VueEditor
            id="editor"
            useCustomImageHandler
            :placeholder="placeholder"
            class="has-background-light"
            v-model="content"
        >
        </VueEditor>
</template>

<script>
import { VueEditor } from "vue3-editor";

export default {
    name: 'Editor',
    components: { 
        VueEditor 
    },
    emits: ['closeEditor'],

    props: {
        placeholder: {
            type: String,
            default: 'Insert your content here',
        },
        tag: {
            type: String,
            default: 'button', 
        },
        icon: {
            type: String,
            default: 'fa-solid fa-xmark'
        },
        show: {
            type: Boolean,
            default: true,
        },
        content: String,
    },

    setup(props, { emit }) {
        // const content = ref(null);

    //  :editorToolbar="customToolbar"
        //     const customToolbar = [
        //     ["bold", "italic", "underline"],
        //     [{ list: "ordered" }, { list: "bullet" }],
        //     ["image", "code-block"]
        //   ]

        function close() {
           emit('closeEditor')

        }

        return { close }

    }
}
</script>

<style>

</style>