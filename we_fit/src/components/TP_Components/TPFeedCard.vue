<template>
  <div class="container my-2" >
      <div class="row my-w-80">
        <div class="info my-w-80 top_of_card">
          <p class="mb-0">
            {{this.tp.name}}
          </p>
          <p>
            <span class="type">#{{this.tp.type}}</span>
          </p>
        </div>

      </div>
      <div v-if="!this.expanded" class="row my-w-80 bottom_of_card" >
        <button class="btn expanding-button my-w-80 bottom_of_card" @click="this.expand">
          <font-awesome-icon icon="angle-down" style="color: #FFFFFF; font-size: 1.5rem;"/>
        </button>
      </div>
      <div v-else class="row my-w-80 d-flex" >
        <button class="btn despanding-button my-w-80 align-items-center pb-3" @click="this.expand" >
          <font-awesome-icon icon="angle-up" style="color: #FFFFFF; font-size: 1.5rem;"/>
        </button>
        <div class="w-100 my-align-center bottom_of_card pb-3">
          <router-link :to="`/TP/${this.tp.id}`">
            <button class="btn btn-sm btn-outline-secondary bg-special-red text-white my-2" style="max-width: 9em">
              Full Page
            </button>
          </router-link>

          <div class="container mt-2">
            <span class=""><b>Plan Overview:</b></span>
            <div class="row exercise-row my-1" v-for="ex in this.tp.exercises" :key="ex.id">
              <div class="col-4 pt-2" style="text-align: left">
                <b>{{ this.getExInfo(ex.id).name }}</b>
              </div>
              <div class="col-4 pt-2">
                Series: <span class="red-text">{{ex.no_series}}</span>
              </div>
              <div class="col-4 pt-2" style="text-align: left">
                <p>
                  Reps & Instructions: <span class="red-text"> {{ex.no_reps_instr}}</span>
                </p>

              </div>

            </div>
          </div>
        </div>

        </div>

        <!-- Devia ser uma componente? Sim. Tenho paciência? Não. Hotel? Trivago.-->

  </div>
</template>
<script>
export default {
  name: "TPFeedCard",
  components: {
  },
  props : {
    tp: {},
  },
  data(){
    return {
      expanded: false,
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

    expand(){
      this.expanded = !this.expanded;
    },

    getExInfo(id){
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
  }
}
</script>
<style scoped>

.top_of_card{
  border-radius: 15px 15px 0 0;
  border: 1px solid #333333;
}

.bottom_of_card{
  border-radius: 0 0 15px 15px;
  border: 1px solid #333333;
  box-shadow: none;
 }

.red-text{
  color: #5F0B19;
}

.info{
  min-height: 8vh;
  font-size: xx-large;
}
.type{
  font-size: xx-large;
  color: #5F0B19;
}
.expanding-button{
  height: 4vh;
  background-color: #333333;
  box-shadow: none;
}
.despanding-button{
  height: 4vh;
  background-color: #333333;
  box-shadow: none;
  border-radius: 0;
}
.my-w-80{
  width: 100%;
}

.bg-special-red{
  background-color: #5F0B19;
}

.exercise-row{
  min-height:5vh;
  text-align: center;
  border: 1px solid #333333;
}
</style>