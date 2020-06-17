<template>
    <div>

        <b-row inline>
        <b-col>
            <label for="datepicker-sm">FROM</label>
            <b-form-datepicker
              id="datepicker-sm"
              :min="min"
              :max="max"
              class="mb-2"
              placeholder="Start date"
              local="en"
              v-model="value1"

              :date-format-options="{'month': 'short','year': 'numeric'}"
            ></b-form-datepicker>
            <p>{{ value1 }}</p>
        </b-col>
        <b-col>
            <label for="datepicker-placeholder">TO</label>
            <b-form-datepicker
              id="datepicker-placeholder"
              :min="startDateForCalendat2"
              :max="max"
              placeholder="End date"
              local="en"
              class="mb-2"
              v-model="value2"
              :initial-date="startDateForCalendat2"
            :reset-button=true
            :date-format-options="{'month': 'short','year': 'numeric'}"
            ></b-form-datepicker>

        </b-col>

    </b-row>





    </div>
</template>

<script>
import moment from 'moment';
  export default {
    data() {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      // 15th two months prior
      const minDate = new Date(today)
      minDate.setMonth(minDate.getMonth() - 2)
      minDate.setDate(15)
      // 15th in two months
      const maxDate = new Date(today)
      maxDate.setMonth(maxDate.getMonth() + 2)
      maxDate.setDate(15)


      return {
        value1: null,
        value2: null,
        min: minDate,
        max: maxDate,
        startDateForCalendat2: null
      }
    },
     created() {
         setInterval(() => this.calcDate(), 2000)
     },
     methods: {
         calcDate() {
            if(this.value1 !== null) {

                let chosenFromDate = this.value1
                let chosenFromDateConvertedToDate = moment(chosenFromDate)

                this.startDateForCalendat2 = chosenFromDateConvertedToDate._d

            }
         }
      }
  }
</script>

<style lang="scss" scoped>
// #datepicker-placeholder__dialog_{
//     left: -100% !important;
// }


</style>
