<template>
  <div class="container">
    <div class="row" v-for="ex in exercises" :key="ex.id">
      <TPExDetailCard :exercise="ex" :exercise_details="this.getCorrespondingExerciseInfo(ex.id)"/>
    </div>
  </div>
</template>
<script>
import TPExDetailCard from "./TPExDetailCard";
export default {
  name: "TPExerciseList",
  components: {
    TPExDetailCard
  },
  props : {
    exercises:{},

  },
  data(){
    return {
      all_exercises: [],
    }
  },
  methods : {
    print(msg){
      console.log(msg)
    },
    debug(e){
      e.preventDefault()
    },
    getCorrespondingExerciseInfo(id){
      console.log('iterating for',id)
      for(let i = 0; i < this.all_exercises.length ; i++){
        console.log('ex details id',this.all_exercises[i].id)
        if(this.all_exercises[i].id === id){
            console.log('hit on ',id)
            return this.all_exercises[i];
          }
      }
      console.log('miss')
      return null;
    },
    async get_exercise_list(){
      const res = await fetch(`api/exercise_list`);
      return res.json();
    },
  },
  async created() {
    this.all_exercises = await this.get_exercise_list();
    console.log('all ex', this.all_exercises);

  }
}
</script>
<style scoped>
.container-style{
  border: solid 2px #333333;
  border-radius: 15px;
}
</style>