<template>
<div class="container all-page">
  <form @submit="OnSubmit">
    <div class="row">
      <div class="form-group col-6">
        <div class="d-inline-flex left-align-absolute flex-row">
          <label class="form-label " for="nameInput">Title:</label>
          <input v-model="this.name" type="text" class="form-control" id="nameInput" placeholder="Training Plan Name">
        </div>
        <br>
        <br>
        <div class="d-inline-flex left-align-absolute flex-row">
          <label class="form-label" for="typeInput">Type:</label>
          <select id="typeInput" v-model="this.type"  class="form-select" aria-label="Default select example" >
            <option :value="ex_type.name" :key="ex_type.name" v-for="(ex_type) in this.exercise_types">{{ex_type.name}}</option>
          </select>
        </div>
        <br>
        <br>
        <div class="left-align-absolute flex-row my-3" style="text-align: left">
          <p class="form-label" for="howlongInput">How many days:</p>
          <input v-model="this.period" type="number" class="form-control-sm" id="howlongInput" placeholder="Training Plan Name">
        </div>
        <br>
        <br>
        <br>
        <br>
        <p class="d-inline-flex left-align-absolute flex-row mt-5 " >
          How often (week):
        </p>
       </div>

      <div class="row-flex day-container">
        <label :class="[(!this.mon)?'day-label':'day-label-selected']"><span>M</span><input type="checkbox" class="day-check mx-2" id="mon" v-model="this.mon"></label>
        <label :class="[(!this.tue)?'day-label':'day-label-selected']"><span>T</span><input type="checkbox" class="day-check mx-2" id="tue" v-model="this.tue"></label>
        <label :class="[(!this.wed)?'day-label':'day-label-selected']"><span>W</span><input type="checkbox" class="day-check mx-2" id="wed" v-model="this.wed"></label>
        <label :class="[(!this.thu)?'day-label':'day-label-selected']"><span>T</span><input type="checkbox" class="day-check mx-2" id="thu" v-model="this.thu"></label>
        <label :class="[(!this.fri)?'day-label':'day-label-selected']"><span>F</span><input type="checkbox" class="day-check mx-2" id="fri" v-model="this.fri"></label>
        <label :class="[(!this.sat)?'day-label':'day-label-selected']"><span>S</span><input type="checkbox" class="day-check mx-2" id="sat" v-model="this.sat"></label>
        <label :class="[(!this.sun)?'day-label':'day-label-selected']"><span>S</span><input type="checkbox" class="day-check mx-2" id="sun" v-model="this.sun"></label>
      </div>
    </div>
  </form>
  <button @click="debug">debug</button>
  <div class="row mt-5">
    <div class="col-8">
      <ExerciseSelector/>
    </div>
  </div>


</div>
</template>
<script>
import ExerciseSelector from "../components/TP_Components/ExerciseSelector";
export default {
  name: "AddTP",
  components: {
    ExerciseSelector
  },
  props : {

  },
  data(){
    return {
      name: '',
      type: '',
      mon: false, tue: false, wed: false,  thu: false, fri: false, sat: false, sun: false,
      period: 0,
      exercises: [],
      exercise_types: [{name: 'back'}, {name: 'chest'}, {name: 'legs'}, {name: 'full body'}, {name: 'push'}, {name: 'pull'}, {name: 'core'}, {name: 'arms'}],
    }
  },
  methods : {
    debug(e){
      e.preventDefault()
      console.log(this.exercise_types)
      alert(this.exercise_types)
    },
    print(msg){
      console.log(msg)
    },
    OnSubmit(){

    },
    
  },
  created() {

  }
}
</script>
<style scoped>
.all-page{
  width: 100%;
  height: 100%;
}
.left-align-absolute{
  object-position: left;
  flex-direction: row;
  float: left;
  direction: ltr;
}
.day-container{
  display: flex;
  margin-top: 20px;
}
.day-check{
  margin: 0 0 0 0;
  padding: 1vh 1vh 1vh 1vh;
  background-color: #FFFFFF;
  color: #333333;
  border: #333333 solid 3px;
  display: none;
}
.day-check:checked{
  background-color: #5F0B19;
  color: #FFFFFF;
}
.day-label{
  padding: 1vh 1vw 1vh 1vw;
  border: #333333 solid 2px;
}
.day-label-selected{
  padding: 1vh 1vw 1vh 1vw;
  border: #333333 solid 2px;
  background-color: #5F0B19;
  color: #FFFFFF;
}
</style>