<template>
<div>
    <SubpageBanner title="Search" subtitle="Best Meals to search!" search="true"/>

    <div class="container mt-4 mb-4">
        <div class="row justify-content-center">
                <FoodCard v-for="one in 10" :key="one" />
        </div>
    </div>
</div>

</template>

<script>
    import SubpageBanner from '@comp/partials/SubpageBanner.vue'
    import FoodsTab from '@comp/partials/FoodsTab.vue'
    import FoodCard from '@comp/partials/FoodCard.vue'

export default {
    components: {
        SubpageBanner,
        FoodsTab,
        FoodCard,
    }

}
</script>

<style>

</style>
