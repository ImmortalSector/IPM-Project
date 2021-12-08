<template>
<div>
  <h1>Forum</h1>
  <ForumSearchBar @forum_search_event="filterList"/>
  <forum-post-cards-list @downvote="downvote" @upvote="upvote" :post_cards_list = "post_cards_list" />
  <AddPostPlusButton style="position: fixed; bottom: 0px; right: 0px; height: 5rem; width: 5rem" />
</div>
</template>

<script>
import ForumPostCardsList from "../components/Forum_Components/ForumPostCardsList";
import ForumSearchBar from "../components/Forum_Components/ForumSearchBar";
import AddPostPlusButton from "../components/Forum_Components/AddPostPlusButton";
export default {
  name: "Forum_Feed",
  components: {
    AddPostPlusButton,
    ForumPostCardsList,
    ForumSearchBar
  },
  data() {
    return {
      post_cards_list: [],
      lastSearch: "",
    }
  },
  methods: {

    async fetchForumPostCardsList (){
      const res = await fetch('api/post_cards_list')
      const data = await res.json()
      return data
    },

    async upvote(id){
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
    },

    async downvote(id){
      const taskToToggle = await this.fetchForumPostCard(id)
      const vote = (taskToToggle.my_vote < 0)? 0 : -1;
      const score_update = (taskToToggle.my_vote >= 0)? ((taskToToggle.my_vote === 0) ? -1 : -2) : 1;
      const updPostCard = { ...taskToToggle, votes: score_update + taskToToggle.votes, my_vote: vote }

      const res = await fetch(`api/post_cards_list/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updPostCard),
      })

      const data = await res.json()

      this.post_cards_list = this.post_cards_list.map((post) =>
          post.id === id ? { ...post, votes: score_update + taskToToggle.votes, my_vote: data.my_vote } : post
      )
    },

    async fetchForumPostCard(id) {
      const res = await fetch(`api/post_cards_list/${id}`)
      const data = await res.json()
      return data
    },

    async filterList(e, content){
      e.preventDefault();
      if(content === ""){
        this.post_cards_list = await this.fetchForumPostCardsList()
      }else{
        this.post_cards_list = this.post_cards_list.filter((post) =>
            post.description.includes(content) || post.title.includes(content)
        )
        this.lastSearch = content;
      }
    },

  },
  async created() {
    this.post_cards_list = await this.fetchForumPostCardsList()
  },
}
</script>

<style>

</style>