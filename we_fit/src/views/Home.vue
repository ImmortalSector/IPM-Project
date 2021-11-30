<template>
  <h1>Feed</h1>
  <div class="home">
    <feed-post-cards-list @like="like" :post_cards_list = "post_cards_list" />
  </div>

</template>

<script>
// @ is an alias to /src
import FeedPostCardsList from "../components/FeedPostCardsList";
export default {
  name: 'Feed',
  components: {
    FeedPostCardsList
  },
  data() {
    return {
      post_cards_list: []
    }
  },
  methods: {
    async fetchFeedPostCardsList (){
      const res = await fetch('api/feed_post_cards_list')
      const data = await res.json()
      return data
    },
    /*async like(id){
       console.log("like connect");
      const taskToToggle = await this.fetchForumPostCard(id)
      const vote = (taskToToggle.my_vote > 0)? 0 : 1;
      const score_update = (taskToToggle.my_vote <= 0)? ((taskToToggle.my_vote === 0) ? 1 : 2) : -1;
      const updPostCard = { ...taskToToggle,votes: score_update + taskToToggle.votes, my_vote: vote }

      const res = await fetch(`api/post_cards_list/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updPostCard),
      })

      const data = await res.json()
      this.post_cards_list = this.post_cards_list.map((post) =>
          post.id === id ? { ...post,votes: score_update + taskToToggle.votes, my_vote: data.my_vote } : post 
      )
    },*/
  },
  async created() {
    this.post_cards_list = await this.fetchFeedPostCardsList()
  },
}
</script>
