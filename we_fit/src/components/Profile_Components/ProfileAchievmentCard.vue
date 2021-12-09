<template>
  <div class="container d-flex-inline flex-row card-achiev">
    <div class="col d-flex align-items-start pt-2">
        <font-awesome-icon icon="star" style="align-self: start"/>
    </div>
    <div class="col d-flex align-items-end flex-wrap" style="text-align: center">
      <div :class="['row', 'm-2', ]" >
        {{this.achiev.title}}
      </div>
      <div class="row mx-2">
        {{this.achiev.date}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfileAchievementCard",
  components: {
  },
  props : {
    achiev: {},
    i: Number,
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
  async created() {

  }
}
</script>
<style scoped>
.card-achiev{
  min-height: 8vh;
  min-width: 20vw;
  border: #333333 solid 1px;
}
</style>