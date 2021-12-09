<template>
  <div class="container min-sizer my-1">
    <div class="row h-100 w-100">
      <div class="col-4 d-flex flex-column justify-content-center first-col my-border-left">
        {{this.exercise_details.name}}
      </div>
      <div class="col-4 d-flex flex-column justify-content-center my-border-center">
        <span> Number of Series </span> {{this.exercise.no_series}}
      </div>
      <div class="col-4 d-flex flex-column justify-content-center my-border-right">
        <span> Reps/Instructions </span>{{this.exercise.no_reps_instr}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TPExDetailCard",
  components: {
  },
  props : {
    exercise_details: {},
    exercise: {},
  },
  data(){
    return {

    }
  },
  methods : {
    print(msg){
      console.log(msg)
    },
    debug(e){
      e.preventDefault()

    },
  },
  created() {

  }
}
</script>
<style scoped>
.min-sizer{
  min-height: 8vh;
}
.first-col{
  background-color: #333333;
  color: #FFFFFF;
  font-size: 1.5rem;
  border: 1px
}
.my-border-right{
  border: solid #333333;
  border-width: 1px 1px 1px 0;
  border-radius: 0 20px 20px 0;
}
.my-border-center{
  border: solid #333333;
  border-width: 1px ;
  border-radius: 0;
}
.my-border-left{
  border: solid #333333;
  border-width: 1px 0 1px 1px;
  border-radius: 20px 0 0 20px;
}
</style>