<template>
  <div class="container justify-content-center d-flex flex-wrap py-3 rounded w-100" style="overflow: auto; border: 1px solid #333333">
    <div class="row rounded align-items-start d-flex-inline justify-content-between border border-dark w-100 align-self-center p-1 my-1 bg-dark text-white" v-for="achiev in this.achievments_ongoing" :key="achiev.id">
      <p class="col-auto" style="text-align: start;">
        {{achiev.title}}   <span style="color: #980000">#</span>{{achiev.type}}
      </p>
      <router-link :to="`/eventpost/${achiev.id}`" class="col-2">
        <font-awesome-icon icon="external-link-alt" style="color: #FFFFFF"/>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfileAchievementHolder",
  components: {
  },
  props : {
    achievments_ongoing: []
  },
  data(){
    return {

    }
  },
  methods : {
    print(msg){
      console.log(msg)
    },
    debug(e){
      e.preventDefault()

    },
  },
  created() {

  }
}
</script>
<style scoped>

</style>