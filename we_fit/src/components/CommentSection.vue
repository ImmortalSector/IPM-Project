<template>
  <hr class="divider">
  <h3 style="text-align: left; ">Comment Section</h3>
  <div :key = "comment.id" v-for="comment in this.comments" >
      <ForumCommentCard :id="this.id"/>
  </div>
</template>
<script>
import ForumCommentCard from "./ForumCommentCard";
export default {
  name: 'CommentSection',
  components: {ForumCommentCard},
  data () {
    return {
      comments: [],
    }
  },
  props: ['id'],
  async created() {
    console.log("CommentSection")
    const foo_id = this.id
    console.log('api/post_cards_list/'+foo_id)
    const res = await fetch(`api/post_cards_list/${this.id}`)
    console.log(this.id)
    const data = await res.json()
    this.comments = data.comments
    console.log(this.comments)
  },
  methods : {
    my_debug(){
      console.log(this.comments)
    }
  }
}
</script>
<style>
.divider{
  size: 5px;
  color: #333333;

}
</style>