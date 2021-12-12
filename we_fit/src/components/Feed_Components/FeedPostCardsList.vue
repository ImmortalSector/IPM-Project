<template>
  <div class="py-3">
  </div>
  <div class="container">
    <div class="row pb-2" :key = "post_card.id" v-for="post_card in post_cards_list">
        <FeedPostCard @like ="$emit('like', post_card.id)" class="FeedPC" :post_card = "post_card"/>
    </div>
  </div>
</template>

<script>
import FeedPostCard from "./FeedPostCard";
export default {
  name: 'FeedPostCardsList',
  components: {
    FeedPostCard
  },
  props: {
    post_cards_list: Array
  },
  data(){
    return {
      force_reload: 0,
    }
  },
  mounted() {
    if(this.force_reload === 0){
      this.force_reload = 1;
      console.log('mounted')

    }
  }
}
</script>
<style scoped>
.FeedPC{
  background: #333333;
  color: #FFFF;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem ;
  width:80vw;
  height:60vh;
  min-height: 400px;
}
</style>