<template>
    <div :disabled="disabled" class="is-flex is-centered" :style="{width: size, height: size}">
        <slot><span>{{ label }}</span></slot>
        <!-- <AppSpinner v-if="loading" :color="spinnerColor" :size="spinnerSize" inline /> -->
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "Spacer",
    props: {
        size: {
            type: String,
            default: '120px',
        },
        disabled: {
            type: Boolean,
        },
        label: {
            type: String,
        },
    },
    setup() {

    
        

    
        return { }
    }

}
</script>

<style>

</style>