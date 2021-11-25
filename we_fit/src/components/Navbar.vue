<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top">
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
            <a class="nav-link active" aria-current="page" href="#" id="navbar_feed">Feed</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" id="navbar_events">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" id="navbar_forum">Forum</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#" id="navbar_profile">Profile</a>
          </li>
        </ul>
        <form class="d-flex grid" style="height: 25px; font-size: 10px;">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn"  type="submit" style="height: 25px; font-size: 15px;"> <font-awesome-icon class="float-up" icon="search" style="margin-bottom: 2"/> </button>
        </form>
      </div>
    </div>
  </nav>


</template>

<script>
export default {
  name: "Navbar",
  components: {
  }
}
</script>

<style scoped>
.btn{
  background: slategrey;
}
</style>