<template>
  <div class="container">
    <div class="row">
      <img class="image_thumbnail " alt="WeFit logo" src="../assets/logo.png">
    </div>
    <div class="row">
      <h1>
        {{task.title}}
      </h1>
    </div>
    <div class="row">

    </div>
  </div>
</template>

<script>
export default{
  name: "ForumPostDetail",
  props: ['id'],
  data() {
    return {
      task: {}
    };
  },
  method : {
    async fetchForumPostCard(id) {
      const res = await fetch(`api/post_cards_list/${id}`)

      const data = await res.json()

      return data
    },

  },
  async created() {
    const res = await fetch(`api/post_cards_list/${this.id}`)
    const data = await res.json()
    this.task = data
  },
};

</script>

<style scoped>
</style>