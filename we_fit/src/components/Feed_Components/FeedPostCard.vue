<template>
  <div class="container" style="">
      <div class="row align-items-center title-row" style="font-size: xx-large">
        {{ post_card.title }}
      </div>
      <!-- <img class="image_thumbnail  img-row align-items-center" alt="WeFit logo" :src="'../../assets/' + post_card.img_path"> -->
        <!-- <img class="image_thumbnail  img-row align-items-center" alt="WeFit logo" v-bind:src="`${post_card.img_path}`" > -->
        <!-- <img class="image_thumbnail img-row align-items-center" alt="WeFit logo" :src="post_card.img_path" > -->
        <img class="image_thumbnail img-row align-items-center" alt="WeFit logo" src="../../assets/logo.png">
      <div>
        {{post_card.description}}
      </div>
      <div class="voting-element">
        <button @click="$emit('like', post_card.id)" :class="[post_card.my_like === 1 ? 'vote-button-selected' : 'vote-button']">
          <font-awesome-icon class="voting-element justify-content-center" icon="thumbs-up" style="height: 2vh; width: 2vw"/>
        </button>
        <b class="voting-element justify-content-center vote-count"> {{ post_card.likes }} </b>
      </div>
      <div class="type">
        <div v-if="post_card.type === 'Achievement'">
          <font-awesome-icon class="type-element" icon="medal" style="height: 3vh; width: 3vw"/>
        </div>
        <div v-else>
          <font-awesome-icon class="type-element" icon="dumbbell" style="height: 3vh; width: 3vw"/>
        </div>
      </div>
  </div>
</template>


<script>
export default {
  name: 'FeedPostCard',
  // data () {
  //   return {
  //     imgPath: "../assets/"
  //   }
  // },
  props: {
    post_card: Object,
  },
}
</script>

<style>
  .image_thumbnail {
    width:100%;
    height:100%;
    border: 3px solid #333333;
    object-fit: contain!important;
  }
  .title-row{
    padding-left: 10px;
    padding-top: 10px;
    margin-bottom: 10px;
    height: 10%;
  }
  .desc-row{
    display: flex;
    flex-direction: row;
    object-position: left;
    height: 30%;
    font-size: large;
  }
  .img-row{
    background-color: #FFFFFF;
    justify-content: center;
    align-content: center;
    object-position: center;
    object-fit: contain;
    height: 60%;
    width: 80%;
    margin: 20px;
  }
  .voting-element{
  width: 100%;
  /* height: 33%; */
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
  .type{                                  
    padding-right: 10px;
    padding-top: 10px;
    text-align: right;
  }
</style>