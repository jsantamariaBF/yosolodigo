<template>
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div :class="`notification ${color} `">
                <div class="is-flex is-justify-content-center">
                    <slot name="title" />
                </div>
                <div class="is-flex is-justify-content-center mt-3">
                    <slot name="content" />
                </div>
                <div v-if="event" class="is-flex is-justify-content-center mt-5">
                    <button @click="yes || confirm" class="button is-success">Yes</button>
                    <button @click="no" class="button is-danger ml-2">No</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Notification",
    props: {
        color: {
            type: String,
            default: 'is-success'
        },
        event: {
            type: Boolean,
        }
    },
    setup(props, {emit}) {

            function yes() {
                emit('resetAll')
                emit('resetAll')
            }

            function confirm() {
                emit('confirm')
            }

            function no() {
                emit('notReset')
            }


        return { yes,confirm, no }
    }
}
</script>

<style>

</style>