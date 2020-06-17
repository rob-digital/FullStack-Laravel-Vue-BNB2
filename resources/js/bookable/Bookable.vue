<template>
    <div class="container mt-3">
        <div class="row" v-if="loading">Loading...................</div>

        <div class="row" v-else>
            <div class="col-md-8">
                     <h4>{{  bookable.title }}</h4>
                     <hr>
                    <p>{{ bookable.description }}</p>


                  

                    <p>{{ date }}</p>
                    <p>{{ date.date() }}</p>
                    <p>{{ date.month() + 1 }}</p>
                    <p>{{ date.year() }}</p>
            </div>
            <div class="col-md-4">
                <availability></availability>
            </div>
        </div>

    </div>
</template>

<script>
import Availability from './Availability'
import moment from 'moment';


   export default {
       components: {
           Availability,

           },
       data() {
           return {
               bookable: null,
               loading: false,
               date: null
           }
       },
       created() {

           this.date = moment()
           this.loading = true
           axios.get(`/api/bookables/${this.$route.params.id}`)
                .then(response => {
                    this.bookable = response.data.data
                    this.loading = false
                    })
                .catch(error => console.log(error))
            }

   }
</script>

<style lang="scss" scoped>

</style>
