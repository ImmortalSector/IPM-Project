<template>
  <div class="container-fluid all-page">
  <form @submit="OnSubmit" class="initial-group">
    <div class="row">
      <div class="form-group col-6">
        <div class="d-inline-flex left-align-absolute flex-row">
          <label class="form-label " for="nameInput" style="margin-right:1.2rem; font-size: x-large">Name</label>
          <input v-model="this.name" type="text" class="form-control" id="nameInput" placeholder="Event Name" >
        </div>
        <br><br>
        <div class="d-inline-flex left-align-absolute flex-row">
          <label class="form-label" for="typeInput" style="margin-right:2rem; font-size: x-large">Type</label>
          <select id="typeInput" v-model="this.type"  class="form-select" aria-label="Default select example" >
            <option :value="event_type.name" :key="event_type.name" v-for="(event_type) in this.event_types">{{event_type.name}}</option>
          </select>
        </div>
        <br><br>
        <div class="d-inline-flex left-align-absolute flex-row">
          <label class="form-label force-text-centered" for="makePublic" style="margin-right:1.2rem; font-size: large">Make public</label>
          <input type="checkbox" id="makePublic" value="Make Public" v-model="this.make_public" class="align-self-center">
        </div>
        <br><br>
        <div class="d-inline-flex left-align-absolute flex-row">
          <div class="row">
            <div class="col-sm">
               <label class="form-label" for="startDate" style="margin-right:1.2rem; font-size: large">Start Date </label>
               <input @change="onChangeStart()" class="form-control" type="date" id="startDate" name="startDate" min="2021-07-01" placeholder="Enter Date..." v-model="this.startDate">
            </div>
            <div class="col-sm">
               <label class="form-label" for="endDate" style="margin-right:1.2rem; font-size: large">End Date</label>
               <input @change="onChangeEnd()" class="form-control" type="date" id="endDate" name="endDate" min="2021-07-01" placeholder="Enter Date..." v-model="this.endDate">
            </div>
          </div>
        </div>
        <br><br>
          <div class="form-group mt-5">
            <p class="form-label left-align-absolute" style="font-size: x-large">Rule Set:</p>
            <textarea v-model="this.ruleSet"  class="form-control form-desc" id="ruleInput" aria-describedby="ruleInput" placeholder="Enter the desired rules"/>
          </div>
        <br><br>
          <div class="form-group">
            <p class="form-label left-align-absolute" style="font-size: x-large">Description:</p>
            <textarea v-model="this.description"  class="form-control form-desc" id="descInput" aria-describedby="descInput" placeholder="Enter an appropriate description"/>
          </div>

      </div>
      <div class="col-6">
        <button class="addPhoto rounded-circle btn-outline-dark" @click.prevent="alert_not_implemented">
          Add Picture
          <font-awesome-icon icon="camera"/>
        </button>
      </div>
    </div>
  </form>

  <div class="flex-row justify-content-between" style="margin:100px; display: flex; flex-direction: row-reverse">
    <button class="submit-btn btn btn-dark" @click="Invite">Invite People</button>
    <button class="submit-btn btn btn-dark" @click="AddEvent">Add Event</button>
  </div>
</div>
</template>

<script>
export default{
  name : "AddEvent",
  components: {

  },
  data(){
    return {
      name: '',
      event_types: [{name: 'Challenge'}, {name: 'Competition'}, {name: 'Meeting'}],
      type: '',
      make_public: false,
      startDate: '',
      endDate: '',
      ruleSet: "",
      description: "",
      invites: [],
    }
  },
  methods : {
    
    onChangeStart() {
      if(this.endDate === null) {
        this.endDate = this.startDate
      } else {
        if(this.startDate > this.endDate)
        this.endDate = this.startDate
      }
    },

    onChangeEnd() {
      if(this.startDate === null) {
        this.startDate = this.endDate
      } else {
        if(this.endDate < this.startDate)
        this.startDate = this.endDate
      }
    },

    async AddEvent() {
      let emptyfields = '';
      if(this.name === '') emptyfields += ' name';
      if(this.type === '') emptyfields += ' type';
      if(this.startDate === '') emptyfields += ' startDate';
      if(this.endDate === '') emptyfields += ' endDate';
      if( emptyfields !== ''){

        alert('The following fields are mandatory:' + emptyfields);
        return
      }

      const id = await this.calcIndex();
      console.log(id)
      const new_event = {
          id: id,
          title: this.name,
          type: this.type,
          isPublic: this.make_public,
          startDate: this.startDate,
          endDate: this.endDate,
          rules: this.ruleSet,
          description: this.description,
          invites: this.invites
      }
      console.log(new_event);
      const res = await fetch('api/event_cards_list', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(new_event),
      });
      if(!(await res).statusCode === 201){
        alert('Something went wrong on our side. Please retry submitting the Event. If this continues please contact our team.\n Sorry for the inconvenience.')
        return
      }else{
        await this.$router.push({path: `/event_cards_list/${id}`});
      }
    },

    async calcIndex(){
      const res = await fetch('api/event_cards_list')
      const data = await res.json()
      return data.length
    }
  },
}
</script>

<style scoped>
.all-page{
  width: 100vw;
}
.submit-btn{
  height: 8vh;
  width: 15vw;
}
.initial-group{
  margin-left: 50px
}
.addPhoto{
  height: 15vh;
  width: 15vh;
}
.left-align-absolute{
  display: flex;
  object-position: left;
  flex-direction: row;
  float: left;
  direction: ltr;
}
.day-container{
  display: flex;
  margin-top: 20px;
}
.day-check{
  margin: 0 0 0 0;
  padding: 1vh 1vh 1vh 1vh;
  background-color: #FFFFFF;
  color: #333333;
  border: #333333 solid 3px;
  display: none;
}
.day-check:checked{
  background-color: #ab112b;
  color: #FFFFFF;
}
.day-label{
  padding: 1vh 1vw 1vh 1vw;
  border: #333333 solid 2px;
}
.day-label-selected{
  padding: 1vh 1vw 1vh 1vw;
  border: #333333 solid 2px;
  background-color: #ab112b;
  color: #FFFFFF;
}
input[type='checkbox'] {
  box-sizing: border-box;
  appearance: none;
  background: white;
  outline: 2px solid #333;
  border: 3px solid white;
  width: 16px;
  height: 16px;
}

input[type='checkbox']:checked {
  background: #333;
}

.force-text-centered{
  margin-top: 0.5em;
}
</style>