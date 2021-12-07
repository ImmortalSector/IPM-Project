<template>
  <h1>Events</h1>
  <div class="left-align-absolute flex-row my-3" style="text-align: left">
          <label class="form-label" for="typeInput"> Type: </label>
          <select id="typeInput" v-model="this.type"  class="form-select" aria-label="Default select example" >
            <option :value="ex_type.name" :key="ex_type.name" v-for="(ex_type) in this.exercise_types">{{ex_type.name}}</option>
          </select>
  </div>
  <EventsSearchBar @events_search_event="filterList"/>
  <events-post-cards-list @downvote="downvote" @upvote="upvote" :event_cards_list = "event_cards_list" />
  <AddEventPlusButton style="position: fixed; bottom: 0px; right: 0px; height: 5rem; width: 5rem" />
</template>

<script>
import EventsPostCardsList from "../components/Event_Components/EventPostCardsList.vue";
import EventsSearchBar from "../components/Event_Components/EventsSearchBar.vue";
import AddEventPlusButton from "../components/Event_Components/AddEventPlusButton.vue";
export default {
  name: "Events_Feed",
  components: {
    AddEventPlusButton,
    EventsPostCardsList,
    EventsSearchBar
  },
  data() {
    return {
      event_cards_list: [],
      lastSearch: "",
    }
  },
  methods: {

    async fetchEventsPostCardsList (){
      const res = await fetch('api/event_cards_list')
      const data = await res.json()
      return data
    },

    async upvote(id){
      const taskToToggle = await this.fetchEventsPostCard(id)
      const vote = (taskToToggle.my_vote > 0)? 0 : 1;
      const score_update = (taskToToggle.my_vote <= 0)? ((taskToToggle.my_vote === 0) ? 1 : 2) : -1;
      const updPostCard = { ...taskToToggle,votes: score_update + taskToToggle.votes, my_vote: vote }

      const res = await fetch(`api/event_cards_list/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updPostCard),
      })

      const data = await res.json()
      this.event_cards_list = this.event_cards_list.map((post) =>
          post.id === id ? { ...post,votes: score_update + taskToToggle.votes, my_vote: data.my_vote } : post
      )
    },

    async downvote(id){
      const taskToToggle = await this.fetchEventsPostCard(id)
      const vote = (taskToToggle.my_vote < 0)? 0 : -1;
      const score_update = (taskToToggle.my_vote >= 0)? ((taskToToggle.my_vote === 0) ? -1 : -2) : 1;
      const updPostCard = { ...taskToToggle, votes: score_update + taskToToggle.votes, my_vote: vote }

      const res = await fetch(`api/event_cards_list/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updPostCard),
      })

      const data = await res.json()

      this.event_cards_list = this.event_cards_list.map((post) =>
          post.id === id ? { ...post, votes: score_update + taskToToggle.votes, my_vote: data.my_vote } : post
      )
    },

    async fetchEventsPostCard(id) {
      const res = await fetch(`api/event_cards_list/${id}`)
      const data = await res.json()
      return data
    },

    async filterList(e, content){
      e.preventDefault();
      if(content === ""){
        this.event_cards_list = await this.fetchEventsPostCardsList()
      }else{
        this.event_cards_list = this.event_cards_list.filter((post) =>
            post.description.includes(content) || post.title.includes(content)
        )
        this.lastSearch = content;
      }
    },
    
  },
  async created() {
    this.event_cards_list = await this.fetchEventsPostCardsList()
  },
}
</script>

<style>

</style>