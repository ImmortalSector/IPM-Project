<template>
  <div class="d-inline-flex align-content-end flex-row control-bar ">
    <TPExerciseTags @tag="tagEventHandler" class="ex-selector" />
    <TPSearchBar @search.prevent="searchEventHandler" class="ex-search" />
  </div>
  <div class="flex-row ex_cards_contianer">
    <ul>
      <li class="card-list" value="1" v-for="ex in current_exercises" :key="ex.id">
        <ExerciseCard :ex_card="ex" @exSelection="$emit('exSelection', ex.id)" />
      </li>
    </ul>
  </div>

</template>
<script>
import TPSearchBar from "./TPSearchBar";
import TPExerciseTags from "./TPExerciseTags";
import ExerciseCard from "./ExerciseCard";

export default {
  name: "ExerciseSelector",
  components: {
    ExerciseCard,
    TPExerciseTags,
    TPSearchBar
  },
  props : {

  },
  data(){
    return {
      currentTag: '',
      currentSearch: '',
      all_exercises: [],
      current_exercises: []
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

    async searchEventHandler(e, search){
      e.preventDefault();
      alert(search);
      console.log('search hit');
      this.currentSearch = search;
      this.current_exercises = this.current_exercises((ex) => ex.name.includes(search));
    },
    async tagEventHandler(e, tag){
      e.preventDefault();
      alert(tag);
      console.log('tag hit');
      this.currentTag = tag;
      if( tag === 'all'){
        alert('We in: ' + tag)
        this.current_exercises = this.all_exercises
      }else{
        this.current_exercises = this.all_exercises.filter((ex) => ex.tags.includes(tag))
      }
    },

    // Fetchers:
    async get_exercise_list(){
      const res = await fetch(`api/exercise_list`)
      return res.json();

    }

  },
  async created() {
    this.all_exercises = await this.get_exercise_list();
    this.current_exercises = this.all_exercises;
    this.print('reloaded');
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
  float: left;
  display: inline-block;
  margin: 0.5%;
  min-height: 10vh;
  min-width: 10vw;
  width: 32%;

}
</style>