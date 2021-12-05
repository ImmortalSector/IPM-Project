<template>
  <div class="container" style="">
    <div class="row align-items-center title-row" style="font-size: xx-large">
      {{ post_card.title }}
    </div>
    <img class="image_thumbnail  img-row align-items-center" alt="WeFit logo" src="../../assets/logo.png" >
    <div class=" desc-row">
      {{post_card.description}}
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
</style>