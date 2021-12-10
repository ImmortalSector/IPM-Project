<template>
  <div class="container" style="">
    <div class="row flex-grow-1" style="height: 100%">

      <div class="col-1 justify-content-center" style="max-height: 100%">
        <form style="max-height: 100%; height:100%">
          
        </form>
      </div>
      <div class="col-3 justify-content-center" style="max-height: 100%">
        <router-link class="rl" :to="{name: 'EventPost', params: {id: post_card.id}}" >
        <!-- <img class="image_thumbnail " alt="WeFit logo" src="../../assets/logo.png"> -->
          <img class="image_thumbnail " alt="WeFit logo" :src="post_card.img_path">
        <!--img class="image_thumbnail" :src="'~'+imgPath + post_card.img_path"  :alt="imgPath + post_card.img_path"/-->
        </router-link>
      </div>
      <div class="col-8 justify-content-center">
        <router-link class="rl" :to="{name: 'EventPost', params: {id: post_card.id}}" >
          <div class="container">
            <div class="row align-items-start" style="font-size: xx-large">
              {{ post_card.title }}
            </div>
            <div class="row align-items-end">
              {{post_card.description}}
            </div>
            <div class="type d-flex-inline justify-content-end align-items-end">
              <div v-if="post_card.type === 'Challenge'">
                <font-awesome-icon class="type-element" icon="running" style="height: 3vh; width: 3vw; align-self: end"/>
              </div>
              <div v-else-if="post_card.type === 'Competition'">
                <font-awesome-icon class="type-element" icon="star" style="height: 3vh; width: 3vw; align-self: end"/>
              </div>
              <div v-else>
                <font-awesome-icon class="type-element" icon="users" style="height: 3vh; width: 3vw; align-self: end"/>
              </div>
          </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventPostCard',
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
  color: #ab112b !important;
}
.float-right{
  float: right;
}
.rl{
  text-decoration: none; color: inherit;
}
.rl:hover{
  text-decoration: none;
  color: #ab112b ;
}

</style>