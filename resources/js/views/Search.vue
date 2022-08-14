<template>
<div>
    <SubpageBanner />
    <FoodsTab />
    <FoodsTab />
    <FoodsTab />
</div>

</template>

<script>
    import SubpageBanner from '@comp/partials/SubpageBanner.vue'
    import FoodsTab from '@comp/partials/FoodsTab.vue'

export default {
    components: {
        SubpageBanner,
        FoodsTab,
    }

}
</script>

<style>

</style>
