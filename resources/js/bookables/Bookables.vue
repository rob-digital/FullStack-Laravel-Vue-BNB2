<template>
    <div class="container mt-3">



        <div v-if="loading"> Loading ............</div>

        <div v-else>



            <div
                class="row"
                v-for="row in rows"
                :key="row.index"
                >
                    <div
                    class="col d-flex align-items-stretch"
                    v-for="(bookable, column) in bookablesInRow(row)"
                    :key="'row'+ row + column"
                    >
                                <bookable-item
                                    v-bind="bookable"
                                ></bookable-item>
                    </div>

                    <div class="col" v-for="p in placeholdersInRow(row)" :key="p.id"></div>

                </div>
        </div>


    </div>
</template>

<script>
import BookableItem from './BookableListItem'

    export default {
        components: {
            BookableItem
        },
        data() {
            return {
                bookables: null,
                loading: false,
                columns: 3
            }
        },
        computed: {
            rows() {
                return this.bookables === null ? 0 : Math.ceil(this.bookables.length / this.columns)
            }
        },
        methods: {
            bookablesInRow(row) {
              return  this.bookables.slice((row -1) * this.columns, row * this.columns)
            },
            placeholdersInRow(row) {
                return this.columns - this.bookablesInRow(row).length
            }
        },
        created() {
            this.loading = true

            const request = axios.get('/api/bookables')
                .then(response => {
                    this.bookables = response.data.data
                    this.loading = false
                })

        }
    }
</script>

<style lang="scss" scoped>

</style>
