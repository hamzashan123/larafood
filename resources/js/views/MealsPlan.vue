<template>
<div>
    <SubpageBanner title="Meals Plan" subtitle="Subscrbe to weekly or monthly plans"/>
    <FoodsTab />
    <MealsTab />
</div>

</template>

<script>
    import SubpageBanner from '@comp/partials/SubpageBanner.vue'
    import MealsTab from '@comp/partials/MealsTab.vue'
    import FoodsTab from '@comp/partials/FoodsTab.vue'

export default {
    components: {
        SubpageBanner,
        MealsTab,
        FoodsTab
    }

}
</script>

<style>

</style>
