<template>
  <div class="container justify-content-center d-flex">
    <div class="row" >
      Empty
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