<template>
    <div>
        <SubpageBanner title="s" subtitle="s"/>
    <!-- contact start -->
        <div class="contact-area pd-top-120 pd-bottom-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <ul class="contact_info_list">
                            <li class="single-info-item">
                                <img src="/v-assets/img/icon/location.png" alt="icon">
                                <div class="details">
                                    4920 Trails End Road Ft  United States, FL 33311
                                </div>
                            </li>
                            <li class="single-info-item">
                                <img src="/v-assets/img/icon/envelope.png" alt="icon">
                                <div class="details">
                                    ordernow@foodka.com
                                </div>
                            </li>
                            <li class="single-info-item">
                                <img src="/v-assets/img/icon/phone.png" alt="icon">
                                <div class="details">
                                    +997 509 153 849
                                </div>
                            </li>
                        </ul>
                        <p>We’re an award-winning creative design studio with a small team and big ideas. We pour passion into projects big and small, providing our expert clients with solutions.</p>
                    </div>
                    <div class="col-lg-6">
                        <form class="default-form-wrap border-0 p-0 mt-4 mt-lg-0">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="single-input-wrap">
                                        <input type="text" class="form-control" placeholder="Your Name">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="single-input-wrap">
                                        <input type="text" class="form-control" placeholder="Your Email">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="single-textarea-wrap">
                                        <textarea rows="4" placeholder="Message..."></textarea>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-base">Submit your Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- contact end -->
    </div>

</template>

<script>
    import SubpageBanner from '@comp/partials/SubpageBanner.vue'

export default {

    components: {
        SubpageBanner,
    }

}
</script>

<style>

</style>
