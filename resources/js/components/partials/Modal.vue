<template>
    <div>
        <div
            class="modal fade"
            :id="modalFor"
            tabindex="-1"
            :aria-labelledby="modalFor"
            aria-hidden="true"
            :data-bs-backdrop="backdrop ?  backdrop : false "
        >
            <div class="modal-dialog modal-dialog-scrollable" :class="size ? 'modal-' + size : ''" >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-capitalize" :id="modalFor">
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
