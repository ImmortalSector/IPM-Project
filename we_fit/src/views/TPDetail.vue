<template>
  <div class="container w-100 align-content-start align-items-start">
    <div class="row d-inline-flex flex-row justify-content-start text-to-left w-100">
      <p class="col-auto">
        <span class="name float-start text-to-left ms-auto">{{this.name}}</span><span class="type float-start ms-auto">#{{this.type}}</span>
      </p>
      <div class="col-auto"></div>
    </div>

    <div class="row d-inline-flex w-100 align-content-start align-items-start mb-5">
        <ul class="d-inline-flex">
          <li :class="[(!this.mon)? 'week-day-block': 'week-day-block-selected', 'no-dots', 'py-2', 'start-li']">mon</li>
          <li :class="[(!this.tue)? 'week-day-block': 'week-day-block-selected', 'no-dots', 'py-2']">tue</li>
          <li :class="[(!this.wed)? 'week-day-block': 'week-day-block-selected', 'no-dots', 'py-2']">wed</li>
          <li :class="[(!this.thu)? 'week-day-block': 'week-day-block-selected', 'no-dots', 'py-2']">thu</li>
          <li :class="[(!this.fri)? 'week-day-block': 'week-day-block-selected', 'no-dots', 'py-2']">fri</li>
          <li :class="[(!this.sat)? 'week-day-block': 'week-day-block-selected', 'no-dots', 'py-2']">sat</li>
          <li :class="[(!this.sun)? 'week-day-block': 'week-day-block-selected', 'no-dots', 'py-2', 'end-li']">sun</li>
        </ul>
      <p style="text-align: left; color: #333333"> This training plan is supposed to go on for <span class="period-style">{{this.period}}</span> days</p>
    </div>
    <div class="row d-flex justify-content-center align-items-center">
      <p class="w-75" style="text-align: left; font-size: 2rem;">Exercises</p>
      <TPExerciseList class="w-75" :exercises="this.exercises"/>
    </div>
  </div>

</template>
<script>
import TPExerciseList from "../components/TP_Components/TPExerciseList";
export default {
  name: "",
  components: {
    TPExerciseList
  },
  props : {
    id: Number,
  },
  data(){
    return {
      post: {},
      name: 'name-remove-from-default',
      type: 'full body',
      mon: false, tue: false, wed: false,  thu: false, fri: false, sat: false, sun: false,
      period: 0,
      exercises: [],
    }
  },
  methods : {
    print(msg){
      console.log(msg)
    },

    extractFrequency(days){
        if(days.length !== 7){
          alert('Something wrong is going on from our side. Too many days in a week.')
        }
        (this.mon)= (days[0] === 1);
        (this.tue)= (days[1] === 1);
        (this.wed)= (days[2] === 1);
        (this.thu)= (days[3] === 1);
        (this.fri)= (days[4] === 1);
        (this.sat)= (days[5] === 1);
        (this.sun)= (days[6] === 1);
    },


    async getTP(){
      const res = await fetch(`api/training_plans/${this.id}`)
      return res.json();
    }

  },
  async created() {
    // Sim ter post e os attr todos é redundante. Enforquem me por isso.
    console.log('started loading ', this.id);
    this.post = await this.getTP();
    this.name = this.post.name;
    this.type = this.post.type;
    this.period = this.post.period;
    this.extractFrequency(this.post.frequency);
    this.exercises = this.post.exercises;
  }
}
</script>
<style scoped>
.name{
  color: #333333;
  font-size: xxx-large;
}
.type{
  color: #5F0B19;
  font-size: xxx-large;

}
.text-to-left{
  text-align: left;
}

.no-dots{
  list-style-type: none;
}
.week-day-block{
  display: block;
  color: #333333;
  border: solid 1px #333333;
  height: 5vh;
  width: 5vh;
  text-align: center;
}
.week-day-block-selected{
  color: #FFFFFF;
  border: solid 2px #333333;
  height: 5vh;
  width: 5vh;
  background-color: #5F0B19;
  text-align: center;

}

.center-content-x{
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  align-content: center;
}
.center-content-y{
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  align-content: center;
}
.end-li{
  border-radius: 0 10px 10px 0;
}
.start-li{
  border-radius: 10px 0 0 10px;
}
.period-style{
  color: #5F0B19;
  font-size: 1.5em;
}
</style>