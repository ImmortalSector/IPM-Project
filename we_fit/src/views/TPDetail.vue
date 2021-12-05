<template>
  {{ this.id }}
</template>
<script>
export default {
  name: "",
  components: {
  },
  props : {
    id: Number,
  },
  data(){
    return {

    }
  },
  methods : {
    print(msg){
      console.log(msg)
    },

  },
  created() {
    console.log(this.id);
  }
}
</script>
<style scoped>

</style>