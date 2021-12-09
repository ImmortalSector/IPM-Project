<template>
  <div class="ex-card-container justify-content-center">
    <form>
      <input v-if="this.isSelected" type="checkbox" class="float-left my-checkbox" @change="$emit('exSelection', this.ex_card.id)" checked/>
      <input v-else type="checkbox" class="float-left my-checkbox" @change="$emit('exSelection', this.ex_card.id)"/>
    </form>
    <br>
    <br>
    <div class="ex-card-name">
      {{this.ex_card.name}}
    </div>
    <div class="d-inline">
      <p v-for="tag in this.ex_card.tags" :key="tag" class="d-inline tag-style"><span style="color:#5F0B19">#</span>{{tag}}</p>
    </div>

  </div>
</template>
<script>
export default {
  name: "ExerciseCard",
  components: {
  },
  props : {
    ex_card: {},
    isSelected: Boolean
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
    if(this.isSelected){
      this.print(this.ex_card.name);
    }else{
     // this.print(false)
    }
  }
}
</script>
<style scoped>
.ex-card-container{
  text-align: center;
  align-items: center;
  border: solid 2px #333333;
  height: 15vh;
  background-color: #333333;

}
.my-checkbox{
  margin: 5%;
  height: 2vh;
  width: 2vw;
}

.float-left{
  float: left;
}
.ex-card-name{
  margin:2.5% ;
  text-align: center;
  align-items: center;
  color: #FFFFFF;
}
.tag-style{
  color: #FFFFFF;
  margin: 0 2px 0 2px;
  font-size: medium;
}
</style>