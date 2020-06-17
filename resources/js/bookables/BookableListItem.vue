<template>



        <div class="card mt-3 mb-3 " style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>

            <p class="card-text">{{ description }}</p>
            <p>{{ id }}</p>
            <router-link :to="{name: 'bookable', params: {id}}" class="card-link">Visit Place</router-link>

        </div>
        </div>

</template>

<script>
    export default {
       props: {
           title: {
               type: String,
               required: true
           },
           description: {
               type: String,
               required: true
           },
           id: {
               type: Number,
               required: true
           }
       }
    }
</script>

<style lang="scss" scoped>

</style>
