<template>
    <Modal title="Login" modalFor="loginModal">
        <template v-slot:modal-body>
            <div>
                <form class="default-form-wrap style-2">
                        <div class="row">
                            <div class="col-md-12">
                                <label>Email</label>
                                <div class="single-input-wrap">
                                    <input type="email" class="form-control" placeholder="Type Your Email">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label>Password</label>
                                <div class="single-input-wrap">
                                    <input type="password" class="form-control" placeholder="Type Your Password">
                                </div>
                            </div>
                        </div>
                    </form>

            </div>
        </template>
        <template v-slot:modal-footer>

                <a href="#" class="me-auto" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#signupModal" > Create account </a>

                <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                    >
                    Login
                </button>

        </template>
    </Modal>
</template>

<script>
 import Modal from '@comp/partials/Modal.vue'

export default {
    components: {
        Modal,
    }

}
</script>

<style>

</style>
