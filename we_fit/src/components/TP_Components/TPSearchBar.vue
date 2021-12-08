<template>
  <form @submit="$emit('search', $event , search)">
    <div class="form-row d-inline-flex">
      <div class="form-control col d-inline-flex align-self-center">
        <input type="text" v-model="search" name="search" placeholder="Search exercise" style="border: 0" />
      </div>
      <div class="div d-inline-flex ">
        <button type="submit" value="" class="btn btn-block align-self-center" style="color: #FFFFFF; background-color: #5F0B19">
          <font-awesome-icon icon="search"/>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TPSearchBar',
  data() {
    return {
      search: '',
    }
  },
  components: {

  },
  props: {
    lastSearch : String
  },
  methods:{
    /*going_mad(e, search){
      e.preventDefault();
      alert('hit');
      this.$emit('search', e , search);
      alert('emitted');
    }*/
  }
}
</script>

<style scoped>


</style>