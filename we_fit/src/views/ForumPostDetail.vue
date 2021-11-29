<template>
  <div class="container main-detail-container">
    <div class="row main-image-container">
      <img class="main-image" alt="WeFit logo" src="../assets/logo.png">
    </div>
    <div class="row main-info-container">
      <p class="post-title">
        {{ post.title }}
      </p>
      <p class="post-description">
        {{ post.description }}
      </p>
      <PostVoteBar @downvote_post="downvote" @upvote_post="upvote" :post="post" style="max-height: 5vh"/>
    </div>
    <div class="row">
      <comment-section :post="this.post"/>
    </div>
  </div>
</template>

<script>
import PostVoteBar from "../components/PostVoteBar";
import CommentSection from "../components/CommentSection";
export default{
  name: "ForumPostDetail",
  components: {
    CommentSection,
    PostVoteBar
  },
  props: ['id'],
  data() {
    return {
      post: {}
    };
  },
  methods : {
    async fetchForumPostCard(id) {
      const res = await fetch(`api/post_cards_list/${id}`)

      const data = await res.json()

      return data
    },
    async upvote(){
      const postChange = this.post
      const vote = (postChange.my_vote > 0)? 0 : 1;
      const score_update = (postChange.my_vote <= 0)? ((postChange.my_vote === 0) ? 1 : 2) : -1;
      const updPostCard = { ...postChange,votes: score_update + postChange.votes, my_vote: vote }
      console.log(updPostCard)
      this.post = updPostCard
    },

    async downvote(){
      const postChange = this.post
      const vote = (postChange.my_vote < 0)? 0 : -1;
      const score_update = (postChange.my_vote >= 0)? ((postChange.my_vote === 0) ? -1 : -2) : 1;
      const updPostCard = { ...postChange, votes: score_update + postChange.votes, my_vote: vote }
      console.log(updPostCard)
      this.post = updPostCard
    },

  },
  async created() {
    const res = await fetch(`api/post_cards_list/${this.id}`)
    const data = await res.json()
    this.post = data
  },
};

</script>

<style scoped>
.main-detail-container{
  max-height: 100vh;
  max-width: 80vw;
}
.main-image-container{
  max-height: 40vh;
  max-width: 100vw;
  object-fit: contain;
  object-position: center;
}
.main-image{
  max-height: 40vh;
  max-width: 100vw;
  object-fit: contain;
  border: solid 2px #2c3e50;
}
.main-info-container{
  border: solid 2px #2c3e50;
  object-position: left;

}
.match-container{
  height: 40vh;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;

}
.post-title{
  text-align: left;
  object-position: left;
  color: #5F0B19;
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 0;
}
.post-description{
  text-align: left;
  object-position: left;
  color: #333333;
  font-size: 1rem;
  font-weight: bold;
}

</style>