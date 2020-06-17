<template>
  <div>
    <h6 class="text-uppercase text-secondary font-weight-bolder">Check Availability
        <span v-if="noAvailability" class="text-danger">(NOT AVAILABLE)</span>
        <span v-if="hasAvailability" class="text-success">(AVAILABLE)</span>
    </h6>

    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="from">From</label>
        <input
          type="text"
          name="from"
          v-model="from"
          class="form-control form-control-sm"
          placeholder="Start date"
          :class="[{'is-invalid' : this.errorFor('from')}]"
        />
      <div class="invalid-feedback" v-for="(error, index) in errorFor('from')" :key="index">{{ error }}</div>

      </div>


      <div class="form-group col-md-6">
        <label for="to">To</label>
        <input
          type="text"
          name="to"
          v-model="to"
          class="form-control form-control-sm"
          placeholder="End date"
          @keyup.enter="check"
          :class="[{'is-invalid' : this.errorFor('to')}]"
        />
      <div class="invalid-feedback" v-for="(error, index) in errorFor('to')" :key="index">{{ error }}</div>

      </div>


    </div>

    <button
      class="btn btn-secondary btn-block"
      @click="check"
      @keyup.enter="check"
      :disabled="loading"
    >Check!</button>
  <hr>


   <div class="block">
    <span class="demonstration"></span>
    <el-date-picker
    class="form-control form-control-sm"
      v-model="dates"
      type="daterange"
      align="right"
      @click.prevent="checkDates"
      start-placeholder="Start Date"
      end-placeholder="End Date"
    >
    </el-date-picker>
  </div>


    <hr>

<date-picker></date-picker>


     <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              label="Date"

              persistent-hint
              prepend-icon="event"
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"

              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>



  </div>

</template>

<script>
import moment from 'moment';
import DatePicker from '../components/DatePickerBootStrap.vue'


export default {
    components: {
        DatePicker
    },
    data: vm => ({

            from: null,
            to: null,
            loading: false,
            status: null,
            errors: null,

            dates: '',
           date: new Date().toISOString().substr(0, 10),
      dateFormatted: moment(vm.formatDate(new Date().toISOString().substr(0, 10))).format('MMM DD YYYY'),
      menu1: false,
      menu2: false,



    }),
    methods: {
        check() {
            this.loading = true
            this.errors = null

            axios.get(`/api/bookables/${this.$route.params.id}/availability?from=${this.from}&to=${this.to}`)
                .then(response => {
                    this.status = response.status

                })
                .catch(error => {
                    if(422 === error.response.status) {
                        this.errors = error.response.data.errors
                    }
                    this.status = error.response.status


                }).then(() => this.loading = false)
        },
        errorFor(field) {
            return this.hasErrors && this.errors[field] ? this.errors[field] : null
        },
         formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },


    },
    computed: {
        hasErrors(){
           return this.status === 422 && this.errors !== null
        },
        hasAvailability() {
            return 200 === this.status
        },
        noAvailability() {
            return 404 === this.status
        },
        checkInput1() {
            let firstDate = this.dates[0]
            let firstDateToString = moment(firstDate, "YYYY-MM-DD", true)

            return firstDateToString.format("YYYY-MM-DD")
        },
         checkInput2() {
            let firstDate = this.dates[1]
            let firstDateToString = moment(firstDate, "YYYY-MM-DD", true)

            return firstDateToString.format("YYYY-MM-DD")
        },
          computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },
       watch: {
      date (val) {
        this.dateFormatted = moment(this.formatDate(this.date)).format('MMM DD, YYYY')
      },
    },

}

</script>

<style lang="scss" scoped>
@import '~@/_variables.scss';
//@import '../../sass/_variables.scss';


label {

  font-size: 0.7rem;
  text-transform: uppercase;
  color: gray;
  font-weight: bolder;
}

.demonstration{
    background-color: $cyan;
}

</style>
