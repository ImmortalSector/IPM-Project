<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark  sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img alt="We Fit" src="../assets/logo.png" width="90" height="90">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse pt-lg-5 pt-md-3 pt-1" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 mr-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" id="navbar_feed"><router-link class="rl" to="/" >Feed</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" id="navbar_events"><router-link class="rl" to="/events" >Events</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" id="navbar_forum"><router-link class="rl" to="/forum" >Forum</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" id="navbar_tp"><router-link class="rl" to="/TP">Training Plans</router-link></a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" id="navbar_profile"><router-link class="rl" to="/profile">Profile</router-link></a>
          </li>

        </ul>
        <form @submit="alert_not_implementd" class="d-flex grid" style="height: 25px; font-size: 10px;">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn"  type="submit" style="height: 25px; font-size: 15px;"> <font-awesome-icon class="float-up rl" icon="search" /> </button>
        </form>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: "Navbar",
  components: {
  },
  methods : {
    alert_not_implementd (){
      alert('The feature \'User searching\' is not yet implemented. But our team is working hard to bring it to you. Sorry for the inconveniences. =(')
    }
  }
}
</script>

<style scoped>
.btn{
  background: slategrey;
}

.rl{
  text-decoration: none; color: inherit;
}
.rl:hover{
  color: #5F0B19 ;
}

</style>