<template>
  <button @click="debug">debug</button>
</template>
<script>
export default {
  name: "ExerciseCard",
  components: {
  },
  props : {

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