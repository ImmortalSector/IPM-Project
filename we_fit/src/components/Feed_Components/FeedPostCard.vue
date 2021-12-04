<template>
  <div class="container" style="">
    <div class="row align-items-start" style="font-size: xx-large">
      {{ post_card.title }}
    </div>
    <img class="image_thumbnail " alt="WeFit logo" src="../../assets/logo.png">
    <div>
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
    max-width:100%;
    max-height:100%;
    border: 3px solid #333333;
    object-fit: contain!important;
  }
</style>