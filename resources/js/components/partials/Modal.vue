<template>
    <div>
        <div
            class="modal fade"
            :id="modalFor"
            tabindex="-1"
            :aria-labelledby="modalFor"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-scrollable" :class="size ? 'modal-' + size : ''" :data-bs-backdrop="backdrop ?  backdrop : '' ">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" :id="modalFor">
                            {{ title }}
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <slot name="modal-body"></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="modal-footer">

                        </slot>
                        <!-- <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                            >
                                Close
                            </button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'modal-for', 'size', 'backdrop']
};
</script>

<style>
</style>
