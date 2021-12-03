<template>
  <div class="ex_cards_contianer">
    <ul>
      <li class="card-list" value="1" v-for="ex in this.selected_exercises" :key="ex.id">
        <TPSelectedCard :ex_card="ex" />
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
    id_selected_exercises: {}
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

    }

  },
  async created() {
    const all_exercises = await this.get_exercise_list();
    this.selected_exercises = all_exercises.filter((ex)=>this.id_selected_exercises.includes(ex.id));
    this.print(this.id_selected_exercises);
  },
}
</script>
<style scoped>
.ex-selector{
  height: 5vh;
  width: 15vw;
}
.ex-search{
  height: 5vh;
  width: 25vw;
}
.control-bar{
  margin: 0 0 0 0;
  width: 100%!important;
  background-color: #333333;
  color: #FFFFFF;
  padding: 1vh 1vw 1vh 1vw;
  border-radius: 10px 10px 0 0;
}
.ex_cards_contianer{
  height: 40vh;
  border: solid #333333;
  overflow: auto;
  border-radius: 0 0 10px 10px;
}
.card-list{
  padding-top: 20px;
  min-height: 5vh;
  min-width: 10vw;
}
ul {
  list-style-type: none;
}
</style>