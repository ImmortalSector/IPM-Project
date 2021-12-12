<template>
  <div class="py-5">
  </div>
  <div class="container">
    <div class="row pb-2" :key = "post_card.id" v-for="post_card in event_cards_list">
        <EventPostCard @downvote="$emit('downvote', post_card.id)" @upvote="$emit('upvote', post_card.id)" class="FPC" :post_card = "post_card"/>
    </div>
  </div>
</template>

<script>
import EventPostCard from "../Event_Components/EventPostCard";
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