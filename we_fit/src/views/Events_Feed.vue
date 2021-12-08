<template>
<div>
  <h1>Events</h1>
  <EventsSearchBar @events_search_event="filterList"/>
  <br>
  <br>
  <!-- <div class="d-inline-flex left-align-absolute flex-row"> -->
  <div class="container">
    <div class="row">
        <div class="col-sm">
          <!-- <EventType @type="typeEventHandler" class="event-selector" /> change to this-->
          <label class="form-label" for="typeInput" style="margin-right:1.2rem; font-size: 16px">Type</label>
          <select id="typeInput" v-model="this.type"  class="form-select" aria-label="Default select example">
            <option :value="event_type.name" :key="event_type.name" v-for="(event_type) in this.event_types">{{event_type.name}}</option>
          </select>
        </div>
        <div class="col-sm">
          <label class="form-label" for="startDate" style="margin-right:1.2rem; font-size: 16px">Start Date </label>
          <input @change="onChangeStart()" class="form-control" type="date" id="startDate" name="startDate" min="2021-07-01" placeholder="Enter Date..." v-model="this.startDate">
        </div>
        <div class="col-sm">
          <label class="form-label" for="endDate" style="margin-right:1.2rem; font-size: 16px">End Date</label>
          <input @change="onChangeEnd()" class="form-control" type="date" id="endDate" name="endDate" min="2021-07-01" placeholder="Enter Date..." v-model="this.endDate">
        </div>
        <div class="col-sm">
          <label class="form-label" for="myEvents" style="margin-right:1.2rem; font-size: 16px">My Events</label>
          <input style="width: 16px; height: 16px" type="checkbox" id="myEvents" value="My Events" v-model="checkedMyEvents">
        </div>
    </div>
  </div>

  <events-post-cards-list :event_cards_list = "event_cards_list" />

  <AddEventPlusButton style="position: fixed; bottom: 0px; right: 0px; height: 5rem; width: 5rem" />
</div>
</template>

<script>
import EventsPostCardsList from "../components/Event_Components/EventPostCardsList.vue";
import EventsSearchBar from "../components/Event_Components/EventsSearchBar.vue";
import AddEventPlusButton from "../components/Event_Components/AddEventPlusButton.vue";
import EventType from "../components/Event_Components/EventType.vue";
export default {
  name: "Events_Feed",
  components: {
    AddEventPlusButton,
    EventsPostCardsList,
    EventsSearchBar,
    EventType
  },
  data() {
    return {
      event_cards_list: [],
      current_event_cards_list: [],
      currentType: "",
      currentSearch: "",
      lastSearch: "",
      startDate: "",
      endDate: "" ,
      checkedMyEvents: "",
      event_types: [{name: 'Challenge'}, {name: 'Competition'}, {name: 'Meeting'}],
    }
  },

  methods: {

    async typeEventHandler(e, type){
      e.preventDefault();
      this.event_cards_list = await this.fetchEventsPostCardsList()
      if( type !== 'all'){
        this.event_cards_list = this.event_cards_list.filter((event) => 
          event.type.includes(type))
      }
    },

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

    async fetchEventsPostCard(id) {
      const res = await fetch(`api/event_cards_list/${id}`)
      const data = await res.json()
      return data
    },

    async filterList(e, content){
      e.preventDefault();
        this.event_cards_list = await this.fetchEventsPostCardsList()
      if(content !== ""){
        this.event_cards_list = this.event_cards_list.filter((post) =>
            post.description.includes(content) || post.title.includes(content)
        )
        this.lastSearch = content;
      }
    },
    
  },
  async created() {
    this.event_cards_list = await this.fetchEventsPostCardsList()
    this.current_event_cards_list = this.event_cards_list;
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