<template>
  <div class="container">
    <div class="row" v-for="ex in this.exercises" :key="ex.id">
      <TPExDetailCard :ex_id="ex.id" :post_id="this.post_id" />
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
    }
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