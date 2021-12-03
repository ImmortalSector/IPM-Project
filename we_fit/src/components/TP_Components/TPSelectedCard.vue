<template>
  <form>
    <div class="container">
      <div class="row entry">
        <div class="col-4 entry-title justify-content-center">
          {{this.ex_card.name}}
        </div>

            <div class="col-2">
              <label :for="'series'+this.ex_card.name">series</label>
              <input :id="this.ex_card.name" type="number">
            </div>

          <div class="col-6">
            <label :for="'reps'+this.ex_card.name">reps/info</label>
            <br/>
            <input :id="this.ex_card.name" type="text">
          </div>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: "",
  components: {
  },
  props : {
    ex_card: {}
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
.entry{
  width: 100%;
  min-height: 5vh;
  border-radius: 10px 10px 10px 10px;
  border: solid #333333;
}
.entry-title{
  align-items: center;
  align-content: center;
  text-align: center;
}
</style>