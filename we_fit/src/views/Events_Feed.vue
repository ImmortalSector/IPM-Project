<template>
  <h1>Events</h1>
  <EventsSearchBar @events_search_event="filterList"/>
  <br>
  <br>
  <div class="d-inline-flex left-align-absolute flex-row">
          <label class="form-label" for="typeInput" style="margin-right:1.2rem; font-size: x-large">Type</label>
          <select id="typeInput" v-model="this.type"  class="form-select" aria-label="Default select example" >
            <option :value="event_type.name" :key="event_type.name" v-for="(event_type) in this.event_types">{{event_type.name}}</option>
          </select>
         
          <label class="form-label" for="startDate" style="margin-right:1.2rem; font-size: x-large">Start Date </label>
          <input @change="onChangeStart()" class="form-control" type="date" id="startDate" name="startDate" min="2021-07-01" placeholder="Enter Date..." v-model="startDate">

          <label class="form-label" for="endDate" style="margin-right:1.2rem; font-size: x-large">End Date</label>
          <input @change="onChangeEnd()" class="form-control" type="date" id="endDate" name="endDate" min="2021-07-01" placeholder="Enter Date..." v-model="endDate">

          <label class="form-label" for="myEvents" style="margin-right:1.2rem; font-size: x-large">My Events</label>
          <input style="margin-left:2.5rem;" type="checkbox" id="myEvents" value="My Events" v-model="checkedMyEvents">

  </div>
  <events-post-cards-list :event_cards_list = "event_cards_list" />
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
      type: "",
      startDate: "",
      endDate: "" ,
      event_types: [{name: 'Challenge'}, {name: 'Competition'}, {name: 'Meeting'}],
    }
  },

  methods: {

    onChangeStart() {
      if(this.endDate === null) {
        this.endDate = this.startDate
      } else {
        if(this.startDate > this.endDate)
        this.endDate = this.startDate
      }
    },

    onChangeEnd() {
      if(this.startDate === null) {
        this.startDate = this.endDate
      } else {
        if(this.endDate < this.startDate)
        this.startDate = this.endDate
      }
    },

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
  input[type='checkbox'] {
    box-sizing: border-box;
    appearance: none;
    background: white;
    outline: 2px solid #333;
    border: 3px solid white;
    width: 16px;
    height: 16px;
  }

  input[type='checkbox']:checked {
    background: #333;
  }
</style>