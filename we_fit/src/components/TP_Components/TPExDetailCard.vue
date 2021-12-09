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
    exercise_prop: {},
    exercise_details_prop: {},
    ex_id: Number,
    post_id: Number,
  },
  data(){
    return {
      exercise: {},
      exercise_details: {},
    }
  },
  methods : {
    print(msg){
      console.log(msg)
    },
    debug(e){
      e.preventDefault()

    },
    async getTP(){
      const res = await fetch(`api/training_plans/${this.post_id}`)
      return res.json();
    },
    getCorrespondingExerciseInfo(id, all_exercises){
      for(let i = 0; i < all_exercises.length ; i++){
        if(all_exercises[i].id === id){
          return all_exercises[i];
        }
      }
      return null;
    },
    async get_exercise_list(){
      const res = await fetch(`api/exercise_list`);
      return res.json();
    },
  },
  async created() {
    const exs_details = await this.get_exercise_list();
    const exs = (await this.getTP()).exercises;
    console.log('prep: ex id', this.ex_id, ' from ', this.post_id);
    console.log('initial state: ', ' ex ', this.exercise, 'ex_detail', this.exercise_details)
    if(this.exercise_details_prop === null || this.exercise_prop === null){
      this.exercise_details = this.exercise_details_prop;
      this.exercise = this.exercise_prop;
    }else{
      for(let i = 0; i<exs.length; i++){
        if(exs[i].id === this.ex_id){
          this.exercise = exs[i];
          this.exercise_details = this.getCorrespondingExerciseInfo(exs[i].id, exs_details);
          console.log(this.exercise, this.exercise_details);
          return
        }
      }
    }
    console.log('failed to load exercise', exs, exs_details);
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