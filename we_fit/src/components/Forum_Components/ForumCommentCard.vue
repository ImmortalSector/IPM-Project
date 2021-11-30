<template>
  <div class="container comment-card-container py-1 my-1">
    <div class="row">
      <p class="author-style mx-2">
        {{this.comment.author}}
      </p>
      <p class="comment-body-style mx-2" >
        {{this.comment.text}}
      </p>
      <PostVoteBar class="fixed-width px-0 mx-2" @new_comment_tab="drop_event" @downvote_post="downvote" @upvote_post="upvote" :post="this.comment" :add_comment="false" :area_toggled="false" />
    </div>


  </div>
</template>
<script>
import PostVoteBar from "../PostVoteBar";
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
  props: {
    post_id:{},
    comment_id: {},
  },
  async created() {
    console.log("ForumCommentCards")
    console.log(this.id)
    const res = await fetch(`api/post_cards_list/${this.post_id}`)
    const data = await res.json()
    this.post = data
    this.comment = data.comments[this.comment_id]
    console.log(this.comment)
  },
  methods : {
    my_debug(){
      console.log(this.comment)
    },
    drop_event(){

    },
    async fetchForumPostCard(id) {
      const res = await fetch(`api/post_cards_list/${id}`)
      const data = await res.json()
      return data
    },
    async upvote(){
      const commentChange = this.comment
      const vote = (commentChange.my_vote > 0)? 0 : 1;
      const score_update = (commentChange.my_vote <= 0)? ((commentChange.my_vote === 0) ? 1 : 2) : -1;
      const updcommentCard = { ...commentChange,votes: score_update + commentChange.votes, my_vote: vote }
      console.log(updcommentCard)
      this.comment = updcommentCard
    },

    async downvote(){
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
  padding: 0;
  overflow: hidden;
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
  object-fit: contain;
  max-width : 100%;
  text-align: left;
  object-position: left;
  color: #333333;
  font-size: 2rem;
  padding-bottom: 0;
  margin: 0;
}
.fixed-width{
  object-fit: contain;
}
</style>