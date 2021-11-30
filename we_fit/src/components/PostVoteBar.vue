<template>
  <form class="form-row form-inline">
    <div class=" voting-element">
      <button @click="$emit('upvote_post')" :class="[post.my_vote === 1 ? 'vote-button-selected' : 'vote-button']">
        <font-awesome-icon class="voting-element justify-content-center" icon="arrow-up" style="height: 40%; width: 90%"/>
      </button>
    </div>
    <div class=" voting-element justify-content-center vote-count"> {{ post.votes }}</div>
    <div class=" voting-element">
      <button @click="$emit('downvote_post')" :class="[post.my_vote === -1 ? 'vote-button-selected' : 'vote-button']">
        <font-awesome-icon class="voting-element justify-content-center" icon="arrow-down" style="height: 40%; width: 90%"/>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'PostVoteBar',
  data () {
    return {
    }
  },
  props: {
    post: {},
  },
}
</script>

<style scoped>
.voting-element{
  min-width: 1em;
  max-width: 5vw;
  min-height: 1em;
  max-height: 5vh;
  text-align: center;
  object-fit: contain;
}

.vote-count{
  color: white;
  align-content: center;
  text-align: center!important;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

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
.form-inline {
  width: 100%!important;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  background: #333333;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
</style>