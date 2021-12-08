<template>
  <div class="container d-flex justify-content-center">
    <div class="row">
      <div class="col align-items-center">
        <img class="profile-img" alt="WeFit" src="../assets/logo.png" >
      </div>
      <div class="col">
        <div class="profile-info px-md-5 px-auto">
          <p class="fw-bold" style="margin-left: 3rem;">
            Age: <span class="color-red">32</span> | Weight <span class="color-red">70</span>kg | Height: <span class="color-red">177</span>cm
          </p>
          <p  class="fw-bold">
            <span class="color-red">0</span> Friends
          </p>
          <p class="fw-bold">
            <span class="color-red">{{this.achievements.length}}</span> Events
          </p>
        </div>
      </div>
    </div>

  </div>
  <div class="d-flex justify-content-center flex-row ">
    <hr class="this-hr">
  </div>
  <div class="container justify-content-center align-items-center mt-5">
    <ul class="d-inline-flex justify-content-center w-100 list-unstyled">
        <li v-for="(acv, index) in this.showing" :key="acv.id" :i="index" class="mx-2">
          <ProfileAchievementCard :achiev="acv"/>
        </li>
    </ul>
    <router-link to="/events">
      <button class="btn btn-dark px-2 mt-5">See all</button>
    </router-link>
  </div>
  <div class="d-flex justify-content-center flex-row ">
    <hr class="this-hr">
  </div>
  <h1 class="pt-5"><b>Dashboard</b></h1>
  <div class="container">
    <div class="row d-flex-imline justify-content-start mt-5">
      <div class="col-auto">
        <h3>Calorie Consumption</h3>
        <input  type="date" @click="alert_not_working" class=" very-tiny mb-4 ml-3"/>
      </div>
    </div>
    <div class="row d-flex align-items-start col-3">
      <img class=" " alt="WeFit" src="../assets/profile_cal_bars.png" @click="alert_not_working">
    </div>
    <div class="row d-flex align-items-start col-3 mt-5">
      <h3>Fluid Intake</h3>
      <img class="fluid-intake " alt="WeFit" src="../assets/fluid-intake.png" @click="alert_not_working">
    </div>
  </div>
</template>

<script>
import ProfileAchievementCard from "../components/Profile_Components/ProfileAchievmentCard";
export default {
  name: "Profile",
  components: {
    ProfileAchievementCard
  },
  data(){
    return {
      achievements: [],
      TP_list: [],
      showing: [],
    }
  },
  methods : {
    print(msg){
      console.log(msg)
    },
    debug(e){
      e.preventDefault()

    },
    async fetchTPList() {
      const res = await fetch('api/training_plans')
      const data = await res.json()
      return data
    },
    async fetchAchievList(){
      const res = await fetch('api/event_cards_list')
      const data = await res.json()
      return data
    },
    alert_not_working(){
      alert("Sorry this functionality hasn't been implemented yet. Sorry for the disturbance.")
    }
  },
  async created() {
    this.achievements = await this.fetchAchievList();
    this.TP_list = await this.fetchTPList();
    const no_i = Math.min(this.achievements.length, 3);
    for (let i = 0; i<no_i; i++)
        this.showing.push(this.achievements[i]);
    console.log(this.TP_list, this.showing);
  }
}
</script>

<style>
.this-hr{
  width: 100%;height: 2px; color: #333333
}
.profile-img{
  object-fit: scale-down;
  height: 20vh;
  width: 20vh;
  border: solid #333333 1px;
  border-radius: 100% 100% 100% 100%;

}
.fluid-intake{
  object-fit: scale-down;

  align-self: start!important;
}
.profile-info{
  margin-top: 1vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 18vh;
  min-width: 32rem;
  border: 1px solid #333333;
}
.color-red{
  color: #5F0B19;
}
.very-tiny{
  width: 5vh;
}
</style>