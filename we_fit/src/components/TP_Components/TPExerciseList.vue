<template>
  <div class="container">
    <div class="row" v-for="ex in this.exercises" :key="ex.id">
      <TPExDetailCard :ex_id="ex.id" :post_id="this.post_id" :exercise_details_prop="this.all_exercises" :exercise_prop="this.exercises"/>
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
    post_id: Number,
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

    async sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    getCorrespondingExerciseInfo(id){
      for(let i = 0; i < this.all_exercises.length ; i++){
        if(this.all_exercises[i].id === id){
          return this.all_exercises[i];
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
    this.all_exercises = await this.get_exercise_list();
  }
}
</script>
<style scoped>
.container-style{
  border: solid 2px #333333;
  border-radius: 15px;
}
</style>