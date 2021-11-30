<template>
  <div class="container comment-card-container py-1 my-1">
    Empty
    <div class="row">
      <p class="author-style">
        {{this.comment.author}}
      </p>
      <p class="comment-body-style">
        {{this.comment.body}}
      </p>
    </div>
    <div>
      <PostVoteBar @downvote_post="downvote" @upvote_post="upvote" :post="this.comment" />
    </div>

  </div>
</template>
<script>
import PostVoteBar from "./PostVoteBar";
export default {
  name: 'ForumCommentCard',
  components: {
    PostVoteBar

  },
  data () {
    return {
      comment: {},
      post: {}
    }
  },
  props: ['id'],
  async created() {
    console.log("ForumCommentCards")
    const res = await fetch(`api/post_cards_list/${this.id}`)
    const data = await res.json()
    this.post = data
    this.comment = data.comment
    console.log(this.comment)
  },
  methods : {
    my_debug(){
      console.log(this.comment)
    },
    async fetchForumPostCard(id) {
      const res = await fetch(`api/post_cards_list/${id}`)
      const data = await res.json()
      return data
    },
    async upvote(){
      alert("UUUUUUUUUUU");

      const commentChange = this.comment
      const vote = (commentChange.my_vote > 0)? 0 : 1;
      const score_update = (commentChange.my_vote <= 0)? ((commentChange.my_vote === 0) ? 1 : 2) : -1;
      const updcommentCard = { ...commentChange,votes: score_update + commentChange.votes, my_vote: vote }
      console.log(updcommentCard)
      //this.comment = updcommentCard
    },

    async downvote(){
      alert("DDDDDDDDD");
      const commentChange = this.comment
      const vote = (commentChange.my_vote < 0)? 0 : -1;
      const score_update = (commentChange.my_vote >= 0)? ((commentChange.my_vote === 0) ? -1 : -2) : 1;
      const updcommentCard = { ...commentChange, votes: score_update + commentChange.votes, my_vote: vote }
      console.log(updcommentCard)
      this.comment = updcommentCard
    },
  }
}
</script>
<style scoped>
.comment-card-container{
  color: #333333;
  border: #333333 solid 1px;

}
.author-style{
  text-align: left;
  object-position: left;
  color: #5F0B19;
  font-size: 1rem;
  font-weight: bold;
  padding-bottom: 0;
}
.comment-body-style{
  text-align: left;
  object-position: left;
  color: #5F0B19;
  font-size: 2rem;
  padding-bottom: 0;
}
</style>