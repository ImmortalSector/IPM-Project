<template>
  <div class="container justify-content-center d-flex flex-wrap py-3 rounded" style="overflow: auto; border: 1px solid #333333">
    <div class="row rounded align-items-start d-flex-inline justify-content-between border border-dark w-100 align-self-center p-1 my-1 bg-dark text-white" v-for="tp in this.training_plans" :key="tp.id">
      <p class="col-5" style="text-align: start;">
        {{tp.name}}   <span style="color: #980000">#</span>{{tp.type}}
      </p>
      <p class="col-3">
        No. Ex: {{tp.exercises.length}}
      </p>
      <router-link :to="`/TP/${tp.id}`" class="col-2 hover-red">
        <font-awesome-icon icon="external-link-alt" style="color: inherit" />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfileTrainingPlan",
  components: {
  },
  props : {

  },
  data(){
    return {
      training_plans: []
    }
  },
  methods : {
    print(msg){
      console.log(msg)
    },
    async fetchTPList() {
      const res = await fetch('api/training_plans')
      const data = await res.json()
      return data
    },

  },
  async created() {
    this.training_plans = await this.fetchTPList();
    console.log(this.training_plans);
  },
}
</script>
<style scoped>
.hover-red{
  color: #FFFFFF;
}
.hover-red:hover{
  color: #980000;
}
</style>