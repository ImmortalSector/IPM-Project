<template>
  <div class="container main-detail-container">
    <div class="row main-image-container">
      <img class="main-image" alt="WeFit logo" :src="post.img_path">
    </div>
    <div class="row main-info-container">
      <p class="post-title">
        {{ post.title }}
      </p>
      <p class="post-description">
        {{ post.description }}
      </p>
      <PostVoteBar @downvote_post="downvote" @upvote_post="upvote" @new_comment_tab="toggleNewCommentArea" :post="post" :add_comment="true" :area_toggled="this.showAddComment" style="max-height: 5vh"/>
      <form @submit="onSubmit" v-if="showAddComment" class="comment-text-input">
        <div class="comment-text-input mt-3">
          <textarea v-model="this.newCommentText" type="textarea" class="form-control comment-text-input" id="new_comment_text"  placeholder="Enter your comment"/>
          <button  class="btn btn-dark btn-lg my-2"  type="submit" style="height: 25px; font-size: 15px;">
            submit
          </button>
        </div>
      </form>
    </div>
    <div class="row">
      <comment-section  :id="this.id" :key="commentSectionSession"/>
    </div>
  </div>
</template>

<script>
import PostVoteBar from "../components/PostVoteBar";
import CommentSection from "../components/Forum_Components/CommentSection";
export default{
  name: "ForumPostDetail",
  components: {
    CommentSection,
    PostVoteBar
  },
  props: ['id'],
  data() {
    return {
      post: {},
      showAddComment: false,
      newCommentText: '',
      commentSectionSession: 0,
    };
  },
  methods : {
    async fetchForumPostCard(id) {
      const res = await fetch(`api/post_cards_list/${id}`)

      const data = await res.json()

      return data
    },
    toggleNewCommentArea(){
      this.showAddComment = ! this.showAddComment;
    },
    async upvote(){
      const postChange = this.post
      const vote = (postChange.my_vote > 0)? 0 : 1;
      const score_update = (postChange.my_vote <= 0)? ((postChange.my_vote === 0) ? 1 : 2) : -1;
      const updPostCard = { ...postChange,votes: score_update + postChange.votes, my_vote: vote }
      console.log(updPostCard)
      this.post = updPostCard
      this.updatePostOnDb(this.post)

    },

    async downvote(){
      const postChange = this.post
      const vote = (postChange.my_vote < 0)? 0 : -1;
      const score_update = (postChange.my_vote >= 0)? ((postChange.my_vote === 0) ? -1 : -2) : 1;
      const updPostCard = { ...postChange, votes: score_update + postChange.votes, my_vote: vote }
      console.log(updPostCard)
      this.post = updPostCard
      this.updatePostOnDb(this.post)

    },
    async onSubmit(){
      //alert(e)
      //e.preventDefault() // Se der merda remover
      if(!this.newCommentText){
        alert('Please write a comment on the box above before submitting.')
        return
      }
      console.log(this.post.comments);
      const author = 'Oscar';
      const id = this.post.comments.length;
      const text = this.newCommentText;
      const my_vote = 1;
      const votes = 1;
      this.post.comments.push({
        'author': author,
        'id': id,
        'text': text,
        'my_vote': my_vote,
        'votes': votes
      });
      console.log(this.post.comments);
      //const newpost = {...this.post, 'comments': new_comments_list};
      //console.log(this.post.comments, 'the new vec', this.post);
      this.updatePostOnDb(this.post);
      this.newCommentText = '';
      this.commentSectionSession ++;
    },
    async updatePostOnDb(post){
      await fetch(`api/post_cards_list/${this.post.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(post),
      })
    }
  },
  async created() {
    console.log("ForumPostDetails")
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
  color: #ab112b;
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
.comment-text-input{
  overflow: auto;
  min-height: 10vh;
  height: 100%;
  width: 100%;
}

.btn-lg{
  padding: 0 0 0 0;
  align-content: center;
  align-items: center;
  width: 10vw;
  height: 20vh;
}
</style>