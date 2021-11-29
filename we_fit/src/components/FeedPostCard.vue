<template>
  <div class="container" style="">
<!--<div class="row align-items-end" style="height: 100%">
        <div class="row align-items-start" style="font-size: xx-large">
            {{ post_card.user }} {{post_card.title}}
        </div>
        <div class="row align-items-center" style="max-height: 100%">
            <img class="image_thumbnail " alt="WeFit logo" src="../assets/logo.png">
        </div>
        <div class="row align-items-center">
            {{post_card.description}}
        </div>
        <div class="col-1 justify-content-center" style="max-height: 100%">
            <form style="max-height: 100%; height:100%">
                <div class="row like-element">
                    <button @click="$emit('like', post_card.id)" :class="[post_card.my_like === 1 ? 'like-button-selected' : 'like-button']">
                        <font-awesome-icon class="voting-element justify-content-center" icon="arrow-up" style="height: 40%; width: 90%"/>
                    </button>
                </div>
            </form>
        </div>
    </div> -->
    <!-- {{ post_card.user }} {{post_card.title}} -->
    test
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
/* .image_thumbnail {
  max-width: 100%;
  max-height: 100%;
  border: 3px solid #333333;
  object-fit: contain!important;
}

.like-element{
  width: 100%;
  height: 33%;
  text-align: center;
  object-fit: contain;
}

.like-count{
  align-content: center;
  text-align: center;

}
.like-button{
  background: none;
  border: none;
  color: white;
}
.like-button-selected{
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
} */

</style>