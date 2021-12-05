<template>
<div class="container-fluid all-page">
  <form @submit="OnSubmit" class="initial-group">
    <div class="row">
      <div class="form-group col-6">
        <div class="d-inline-flex left-align-absolute flex-row">
          <label class="form-label " for="nameInput" style="margin-right:1.2rem; font-size: x-large">Name</label>
          <input v-model="this.name" type="text" class="form-control" id="nameInput" placeholder="Training Plan Name" >
        </div>
        <br>
        <br>
        <div class="d-inline-flex left-align-absolute flex-row">
          <label class="form-label" for="typeInput" style="margin-right:2rem; font-size: x-large">Type</label>
          <select id="typeInput" v-model="this.type"  class="form-select" aria-label="Default select example" >
            <option :value="ex_type.name" :key="ex_type.name" v-for="(ex_type) in this.exercise_types">{{ex_type.name}}</option>
          </select>
        </div>
        <br>
        <br>
        <div class="left-align-absolute flex-row my-3 align-content-center" style="text-align: left">
          <p class="form-label align-items-center align-items-center justify-content-center" for="howlongInput" style="font-size: large; margin-right: 10px">How many days:</p>
          <input v-model="this.period" type="number" class="form-control-sm my-days-input" id="howlongInput" placeholder="Training Plan Name">
        </div>
        <br>
        <br>
        <br>
        <p class="d-inline-flex left-align-absolute mt-5" style="font-size: large; text-align: left;">
          How often (week):
        </p>
       </div>
      <div class="col-6">
        <button class="addPhoto rounded-circle btn-outline-dark" @click.prevent="alert_not_implemented">
          Add Pictures
          <font-awesome-icon icon="camera"/>
        </button>
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
  <div class="flex-row mt-5 d-inline-flex">
    <div class="col-8">
      <ExerciseSelector  @exSelection="manageExerciseSelection" :selected_cards="this.selected_ex" style="width:50%;"/>
    </div>
    <div class="col-8">
      <TPSelectedExercises @seriesUpdate="updatePlan_series" @repsUpdate="updatePlan_reps" :key="this.selected_ex.length" :id_selected_exercises="this.selected_ex" :details_selected_exercises="this.ex_details" style="height: 100%; width:40%; border-radius: 1vw; overflow: auto;"/>
    </div>
  </div>

  <br>

  <div class="flex-row" style="margin:100px; display: flex; flex-direction: row-reverse">
    <button class="submit-btn btn btn-dark" @click="AddTrainingPlan">Add Plan</button>
  </div>
</div>
</template>

<script>
import ExerciseSelector from "../components/TP_Components/ExerciseSelector";
import TPSelectedExercises from "../components/TP_Components/TPSelectedExercises";
export default {
  name: "AddTP",
  components: {
    TPSelectedExercises,
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
      selected_ex: [],
      exercise_types: [{name: 'back'}, {name: 'chest'}, {name: 'legs'}, {name: 'full body'}, {name: 'push'}, {name: 'pull'}, {name: 'core'}, {name: 'arms'}],
      ex_details: [],
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
    alert_not_implemented(e){
      e.preventDefault();
      alert("This feature is not yet implemented. Our team is giving their best to bring it to you!!")
    },
    OnSubmit(){
     // Empty
    },
    manageExerciseSelection(ex_id){
      const ex_obj = {
        id: ex_id,
        no_reps_instr: '',
        no_series: 0
      };
      if(!this.selected_ex.includes(ex_id)){
        //if not in
        this.selected_ex.push(ex_id);
        this.ex_details.push(ex_obj);
        console.log('ADDED '+ex_id, this.selected_ex, this.ex_details );

      }else{
        //if already in
        this.selected_ex = this.selected_ex.filter((ex) => ex !== ex_id );
        this.ex_details = this.ex_details.filter((ex) => ex.id !== ex_id );
        console.log('REMOVED '+ex_id, this.selected_ex, this.ex_details );
      }

    },

    updatePlan_reps(reps_val, id){
      if(this.selected_ex.includes(id)){
        // Esta no vetor
        this.ex_details = this.ex_details.map((ex) => ex = (ex.id === id)? {id: id, no_reps_instr: reps_val, no_series: ex.no_series } : ex )
        console.log(this.ex_details);
      }else{
        // Nao esta no vetor
        alert('We are currently experiencing technical issues. Please try again later, or notify our team.')
      }


    },

    updatePlan_series(series_val, id){

      if(this.selected_ex.includes(id)){
        // Esta no vetor
        this.ex_details = this.ex_details.map((ex) => ex = (ex.id === id)? {id: id, no_reps_instr: ex.no_reps_instr, no_series: series_val } : ex )
        console.log(this.ex_details);
      }else{
        // Nao esta no vetor
        alert('We are currently experiencing technical issues. Please try again later, or notify our team.')
      }
    },

    howOften(){
      return [
          (this.mon)? 1 : 0,
          (this.tue)? 1 : 0,
          (this.wed)? 1 : 0,
          (this.thu)? 1 : 0,
          (this.fri)? 1 : 0,
          (this.sat)? 1 : 0,
          (this.sun)? 1 : 0,
      ]
    },

    async AddTrainingPlan(){
      let emptyfields = '';
      if(this.name === '') emptyfields += ' name';
      if(this.type === '') emptyfields += ' type';
      if( emptyfields !== ''){

        alert('The following fields are mandatory:' + emptyfields);
        return
      }
      const id = await this.calcIndex();
      const frequency = this.howOften();
      const exercises = this.ex_details;
      console.log(id)
      const new_plan = {
          id: id,
          name: this.name,
          type: this.type,
          frequency: frequency,
          period: this.period,
          exercises: exercises,
      }
      console.log(new_plan);
      const res = await fetch('api/training_plans', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(new_plan),
      });
      if(!(await res).statusCode === 201){
        alert('Something went wrong on our side. Please retry submitting the TP. If this continues please contact our team.\n Sorry for the inconvenience.')
        return
      }else{
        await this.$router.push({path: `/TP/${id}`});
      }
    },
    async calcIndex(){
      const res = await fetch('api/training_plans')
      const data = await res.json()
      return data.length
    }
  },
  created() {

  }
}
</script>

<style scoped>
.all-page{
  width: 100vw;
}
.submit-btn{
  height: 8vh;
  width: 15vw;
}
.initial-group{
  margin-left: 50px
}
.my-days-input{
  border: #CED4DA solid 1px;
}
.addPhoto{
  height: 15vh;
  width: 15vh;
}
.left-align-absolute{
  display: flex;
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