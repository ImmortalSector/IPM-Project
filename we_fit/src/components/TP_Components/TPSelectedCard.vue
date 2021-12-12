<template>
  <form style="width: 100%" >
    <div class="container-fluid">
      <div class="row entry pb-2">
          <div class="col-4 entry-title justify-content-center pls-just-fit-already-title" >
            {{this.ex_card.name}}
          </div>

          <div class="pls-just-fit-already-series d-inline">
            <label :for="'series'+this.ex_card.name" class="px-4">series</label>
            <input v-model="this.series_val" :id="this.ex_card.name" type="number" min="1" class="" @input="$emit('seriesUpdate', this.series_val, this.ex_card.id)">
          </div>
        <br>
          <div class="pls-just-fit-already-reps d-inline" >
            <label :for="'reps'+this.ex_card.name" class="px-3">reps/info</label>
            <input v-model="this.reps_val" :id="this.ex_card.name" type="text" class="" @input="$emit('repsUpdate', this.reps_val, this.ex_card.id)">
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
    ex_card: {},
    ex_details: {},
  },
  data(){
    return {
      series_val: 0,
      reps_val:'',
    }
  },
  methods : {
    print(msg){
      console.log(msg)
    },
    debug(e){
      e.preventDefault()

    },
    q(){
      //
      alert('its this');
    }
  },
  created() {
    console.log(this.ex_details)
    this.reps_val = (typeof this.ex_details  != "undefined")? this.ex_details.no_reps_instr : '';
    this.series_val = (typeof this.ex_details  != "undefined")? this.ex_details.no_series : 0;
  }
}
</script>
<style scoped>
.entry{
  display: inline-block;
  flex-wrap: wrap;
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
.pls-just-fit-already-reps{
  object-fit: contain;
  width: 20%;
}
.pls-just-fit-already-title{
  width: 40%;
  object-fit: contain;

}
.pls-just-fit-already-series{
  width: 40%;
  object-fit: contain;

}

</style>