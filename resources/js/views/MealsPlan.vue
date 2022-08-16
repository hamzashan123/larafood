<template>
<div>
    <SubpageBanner title="Meals Plan" subtitle="Subscrbe to weekly or monthly plans"/>
    <MealsTab />
</div>

</template>

<script>
    import SubpageBanner from '@comp/partials/SubpageBanner.vue'
    import MealsTab from '@comp/partials/MealsTab.vue'

export default {
    components: {
        SubpageBanner,
        MealsTab,
    }

}
</script>

<style>

</style>
