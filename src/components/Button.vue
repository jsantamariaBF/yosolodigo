<template>
    <component 
        :is="tag" :disabled="disabled || loading"
        :style="{ height: size }"
    >   
        <slot>
            <span :style="{ fontSize: font }">{{ label }}</span>
        </slot>
        <i v-if="icon" :class="`ml-2 fa-solid ${icon}`" />
  </component>
</template>

<script>
export default {
name: 'Btn',
props: {
    disabled: Boolean,
    label: String,
    loading: Boolean,
    tag: {
        type: String,
        default: 'button',
    },
    icon: String,
    size: {
        type: String,
        default: '30px'
    },
    font: {
        type: String,
        default: '14px'
    }

},

}
</script>

<style>

</style>