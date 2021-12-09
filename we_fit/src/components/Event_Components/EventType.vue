<template>
  <form>
    <div class="d-inline-flex left-align-absolute flex-row">
      <label class="form-label" for="typeInput" style="margin-right:1.2rem; font-size: 16px">Type</label>
          <select id="typeInput" v-model="this.type"  class="form-select" aria-label="Default select example" @change="$emit('type', $event , type)">
            <option :selected="true">All</option>
            <option :value="event_type.name" :key="event_type.name" v-for="(event_type) in this.event_types">{{event_type.name}}</option>
          </select>

    </div>
  </form>
</template>

<script>
export default {
  name: 'EventType',
  data() {
    return {
      type: '',
      event_types: [{name: 'Challenge'}, {name: 'Competition'}, {name: 'Meeting'}],
    }
  },
  components: {

  },
  props: {
    lastSearch : String
  },
  methods:{
    
  }
}
</script>

<style scoped>

</style>