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

    <div class="row d-flex-inline justify-content-between mt-5 w-100">

      <div class="col-5 d-flex flex-wrap">
        <div class="container">
          <h3 class="align-self-start row">Calorie Consumption</h3>
          <div class="row">
            <input  type="date" @click="alert_not_working" class="align-self-start mb-4 ml-3 col-6 mr-1" style="height: 30px; font-size: smaller"/>
            <button @click="alert_not_working" class="btn btn-outline-dark align-self-start mb-4 ml-3 mr-3 col-5" style="height: 30px; font-size: smaller">Add Today</button>
          </div>
          <div class="col-1" style="object-fit: contain">
            <img style="object-fit: contain; width: 23vw!important;" alt="WeFit" src="../assets/profile_cal_bars.png" @click="alert_not_working">
          </div>
        </div>
      </div>

      <div class="container col-6">
        <div class="row d-inline-flex justify-content-between w-75 flex-nowrap" >
          <h3 class="align-self-start" style="text-align: start; margin-top: 0.15em">Achievements: </h3>
          <router-link to="/addEvent" class="col">
            <button class="col-auto btn btn-outline-dark" style="width: 2.5em; height: 2.5em"><font-awesome-icon icon="plus" style="object-fit: contain"/></button>
          </router-link>
        </div>
        <div class="row d-flex justify-content-end mr-0">
          <div class="col-8 d-flex flex-wrap w-100 ml-0  p-2 border border-dark overflow-auto rounded" style="max-height: 440px!important;">
            <event-post-cards-list  :event_cards_list = "this.achievements" />
          </div>
        </div>
      </div>

    </div>



    <div class="row d-flex justify-content-between col-3 mt-5 w-100 pb-5">
      <div class="col-5 container d-flex" style="align-self: start; margin-left: 0; flex-wrap: wrap">
        <div class="row d-inline-flex justify-content-between align-self-start flex-nowrap">
          <h3 class="col-auto" style="margin-top: 0.20em;">Fluid Intake</h3>
          <button class="col-auto btn btn-outline-dark" @click="alert_not_working" style="width: 2.5em; height: 2.5em"><font-awesome-icon icon="plus" style="object-fit: contain"/></button>
        </div>
        <div class="row">
          <img style="object-fit: contain; width: 30vw" class="fluid-intake " alt="WeFit" src="../assets/fluid-intake.png" @click="alert_not_working">
        </div>
      </div>

      <div class="col-6 container">
        <div class="row d-inline-flex justify-content-between w-75 flex-nowrap" >
          <h3 class="align-self-start" style="text-align: start; margin-top: 0.15em">Training Plans: </h3>
          <router-link to="/addTP" class="col">
            <button class="col-auto btn btn-outline-dark" style="width: 2.5em; height: 2.5em"><font-awesome-icon icon="plus" style="object-fit: contain"/></button>
          </router-link>
        </div>
        <div class="row d-flex justify-content-end ml-0">
          <ProfileTrainingPlan />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import ProfileAchievementCard from "../components/Profile_Components/ProfileAchievmentCard";
import ProfileTrainingPlan from "../components/Profile_Components/ProfileTrainingPlans";
import EventPostCardsList from "../components/Event_Components/EventPostCardsList";
export default {
  name: "Profile",
  components: {
    EventPostCardsList,
    ProfileTrainingPlan,
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

  align-self: start !important;
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

</style>