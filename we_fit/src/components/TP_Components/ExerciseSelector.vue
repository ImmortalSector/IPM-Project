<template>
  <button @click="debug">debug ex sel</button>
  <br>
  <br>
  <br>
  <br>
  <div class="d-inline-flex align-content-end flex-row control-bar ">
    <TPExerciseTags @ex_search_event="search_event_handler" class="ex-selector" />
    <TPSearchBar @tp_tag_select_event="tag_event_handler" class="ex-search" />
  </div>
  <div class="row">
    <ul>
      <li class="col-xs-6" value="1" v-for="ex in current_exercises" :key="ex.id">
        <ExerciseCard/>
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

    },
    search_event_handler(e, search){
      e.preventDefault();
      alert(search); //TODO Debug mode
    },
    tag_event_handler(e, tag){
      e.preventDefault();
      alert(tag); //TODO Debug mode
    }
  },
  created() {

  }
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
  width: 100%;
  background-color: #333333;
  color: #FFFFFF;
  padding: 1vh 1vw 1vh 1vw;
}
</style>