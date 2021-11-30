<template>
  <div class="container" style="">
    <div class="row flex-grow-1" style="height: 100%">

      <div class="col-1 justify-content-center" style="max-height: 100%">
        <form style="max-height: 100%; height:100%">
          <div class="row voting-element">
            <button @click="$emit('upvote', post_card.id)" :class="[post_card.my_vote === 1 ? 'vote-button-selected' : 'vote-button']">
              <font-awesome-icon class="voting-element justify-content-center" icon="arrow-up" style="height: 2vh; width: 2vw"/>
            </button>
          </div>
          <div class="row voting-element justify-content-center vote-count"> {{ post_card.votes }} </div>
          <div class="row voting-element">
            <button @click="$emit('downvote', post_card.id)" :class="[post_card.my_vote === -1 ? 'vote-button-selected' : 'vote-button']">
            <font-awesome-icon class="voting-element justify-content-center" icon="arrow-down" style="height: 2vh; width: 2vw"/>
            </button>
          </div>
        </form>
      </div>
      <div class="col-3 justify-content-center" style="max-height: 100%">
        <router-link class="rl" to="/events" >
        <img class="image_thumbnail " alt="WeFit logo" src="../../assets/logo.png">
        <!--img class="image_thumbnail" :src="'~'+imgPath + post_card.img_path"  :alt="imgPath + post_card.img_path"/-->
        </router-link>
      </div>
      <div class="col-auto justify-content-center">
        <router-link class="rl" :to="{name: 'ForumPost', params: {id: post_card.id}}" >
        <div class="container">
          <div class="row align-items-start" style="font-size: xx-large">
              {{ post_card.title }}
          </div>
            <div class="row align-items-end">
            {{post_card.description}}
          </div>
        </div>
        </router-link>

      </div>

    </div>
  </div>
</template>


<script>
export default {
  name: 'ForumPostCard',
  data () {
    return {
      imgPath: "../assets/"
    }
  },
  props: {
    post_card: Object,
  },
}
</script>

<style>
.image_thumbnail {
  max-width: 100%;
  max-height: 100%;
  border: 3px solid #333333;
  object-fit: contain!important;
}

.voting-element{
  width: 100%;
  height: 33%;
  text-align: center;
  object-fit: contain;
}

.vote-count{
  align-content: center;
  text-align: center;

}
.vote-button{
  background: none;
  border: none;
  color: white;
}
.vote-button-selected{
  background: none;
  border: none;
  color: #5F0B19 !important;
}
.float-right{
  float: right;
}
.rl{
  text-decoration: none; color: inherit;
}
.rl:hover{
  text-decoration: none;
  color: #5F0B19 ;
}

</style>