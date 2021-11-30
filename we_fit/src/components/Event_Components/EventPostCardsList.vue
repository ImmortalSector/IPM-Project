<template>
  <div class="py-5">
  </div>
  <div class="container">
    <div class="row pb-2" :key = "event_card.id" v-for="event_card in event_cards_list">
        <EventPostCard class="FPC" :event_card = "event_card"/>
    </div>
  </div>
</template>

<script>
import EventPostCard from "../Forum_Components/EventPostCard";
export default {
  name: 'EventPostCardsList',
  components: {
    EventPostCard
  },
  props: {
    event_cards_list: Array
  }
}
</script>
<style>
.FPC{
  background: #333333;
  color: #FFFF;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem ;
  min-height: 8rem;
  max-height: 8rem
}
</style>