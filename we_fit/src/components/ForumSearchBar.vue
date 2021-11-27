<template>
  <form @submit="$emit('forum_search_event', $event, search)">
    <div class="form-row d-inline-flex">
      <div class="form-control col d-inline-flex ">
        <input type="text" v-model="search" name="search" placeholder="Search forum" />
      </div>
      <div class="div d-inline-flex ">
          <button type="submit" value="" class="btn btn-block" >
           <font-awesome-icon icon="search"/>
          </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ForumSearchBar',
  data() {
    return {
      search: '',
    }
  },
  components: {

  },
  props: {
    lastSearch : String
  }
}
</script>

<style scoped>


</style>