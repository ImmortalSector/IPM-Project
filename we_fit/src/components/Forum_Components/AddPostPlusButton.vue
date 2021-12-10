<template>
  <div class="big-red-button">
    <router-link  class="justify-content-center" to='/addPost' >
      <font-awesome-icon  icon="plus" style="object-fit: contain; color: white; height: 90%; width: 90%"/>
    </router-link>
  </div>
</template>

<script>
export default{
  name : "AddPostPlusButton",
  components: {

  },
}
</script>

<style scoped>
.big-red-button{
  color: white;
  background: #ab112b;
  border-radius: 100%;
  object-fit: contain;
}
</style>