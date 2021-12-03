<template>
  <form>
    <div class="d-inline-flex left-align-absolute flex-row align-self-center">
      <label class="form-label align-self-center px-3" for="typeInput">Tag:</label>
      <select id="typeInput" v-model="this.tag"  class="form-select px-3" aria-label="Default select example" @change="$emit('tag', $event , tag)">
        <option :selected="true">all</option>
        <option :value="ex_type.name" :key="ex_type.name" v-for="(ex_type) in this.tags" >{{ex_type.name}}</option>
      </select>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TPExerciseTags',
  data() {
    return {
      tag: '',
      tags: [{name: 'back'}, {name: 'chest'}, {name: 'legs'}, {name: 'full body'}, {name: 'push'}, {name: 'pull'}, {name: 'core'}, {name: 'arms'}],
    }
  },
  components: {

  },
  props: {
    lastSearch : String
  },
  methods:{
    /*going_mad(e, tag){
      e.preventDefault();
      alert('hit' + tag);
      this.
      alert('emitted');
    }*/
  }
}
</script>

<style scoped>


</style>