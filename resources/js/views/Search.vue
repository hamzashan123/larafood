<template>
<div>
    <SubpageBanner />
    <ProductsTab />
    <ProductsTab />
    <ProductsTab />
</div>

</template>

<script>
    import SubpageBanner from '@comp/partials/SubpageBanner.vue'
    import ProductsTab from '@comp/partials/ProductsTab.vue'

export default {
    components: {
        SubpageBanner,
        ProductsTab,
    }

}
</script>

<style>

</style>
