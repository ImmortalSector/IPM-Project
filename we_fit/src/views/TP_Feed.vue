<template>
<div class="container">
  <div class="row w-100 d-flex-inline flex-row align-items-start align-text-left mb-5">
    <span id="owner" class="align-self-start ">Your,<span class="page-title"> Training Plans</span></span>
  </div>
  <div class="row justify-content-center align-items-center">
      <div class="row justify-content-center align-items-center" v-for="tp in this.training_plans" :key="tp.id">
        <TPFeedCard :tp="tp"/>
      </div>
  </div>
</div>
</template>
<script>
import TPFeedCard from "../components/TP_Components/TPFeedCard";
export default {
  name: "",
  components: {
    TPFeedCard

  },
  props : {

  },
  data(){
    return {
      training_plans: [],
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
#owner{
  color: #5F0B19;
  font-size: xxx-large;
}
.align-text-left{
  text-align: left;
}
.page-title{
  color: #333333;
  font-size: xxx-large;
}
</style>