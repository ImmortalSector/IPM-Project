<template>
  <div class="flex-row ex_cards_container">
    <ul>
      <li class="card-list"  :value="ex.id" v-for="ex in this.selected_exercises" :key="ex.id">
        <TPSelectedCard @seriesUpdate="reemit_series" @repsUpdate="reemit_reps" :ex_card="ex" :ex_details="get_exercise_details(ex.id)"/>
      </li>
    </ul>
  </div>

</template>
<script>
import TPSelectedCard from "./TPSelectedCard";

export default {
  name: "TPSelectedExercises",
  components: {
    TPSelectedCard,
  },
  props : {
    id_selected_exercises: {},
    details_selected_exercises: {}
  },
  data(){
    return {
      selected_exercises: []
    }
  },
  methods : {
    print(msg){
      console.log(msg)
    },
    debug(e){
      e.preventDefault()
      console.log(this.all_exercises);
    },

    // Fetchers:
    async get_exercise_list(){
      const res = await fetch(`api/exercise_list`)
      return res.json();

    },

    get_exercise_details(id){
      for(let i = 0; i < this.details_selected_exercises.length; i++ ){
        if(this.details_selected_exercises[i].id === id){
          return this.details_selected_exercises[i];
        }
      }
    },

    reemit_reps(reps_val, id){
      console.log('TPSelectedExercises(2)',reps_val, id)
      this.$emit('repsUpdate', reps_val, id)
    },
    reemit_series(series_val, id){
      console.log('TPSelectedExercises(2)',series_val, id)
      this.$emit('seriesUpdate', series_val, id)
    }

  },
  async created() {
    const all_exercises = await this.get_exercise_list();
    this.selected_exercises = all_exercises.filter((ex)=>this.id_selected_exercises.includes(ex.id));
    //this.print(this.id_selected_exercises);
  },
}
</script>
<style scoped>

.ex_cards_container{
  height: 40vh;
  max-height: 47vh; /* Magic number francamente */
  border: solid #333333;
  overflow: auto;
  border-radius: 0 0 10px 10px;
}
.card-list{
  padding-top: 20px;
  min-height: 5vh;
  min-width: 100%;
}
ul {
  overflow: auto;
  list-style-type: none;
}
</style>