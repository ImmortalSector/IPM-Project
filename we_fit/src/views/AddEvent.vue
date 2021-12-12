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
      
      

      <div class="row d-flex justify-content-between col-3 mt-5 w-100 pb-5">
        <div class="col-5 container d-flex" style="align-self: start; margin-left: 0; flex-wrap: wrap">
          <div class="row d-inline-flex justify-content-between align-self-start flex-nowrap">
            <h3 class="col-auto" style="margin-top: 0.20em;">Invite people</h3>
          </div>
            <div class="col-8 d-flex flex-wrap w-100 ml-0  p-2 border border-dark overflow-auto rounded" style="max-height: 440px!important;">
              
              <form @submit.prevent="alert_not_implemented">
                <div class="form-row d-inline-flex">
                  <div class="form-control col d-inline-flex ">
                    <input type="text" v-model="search" name="search" placeholder="Search user" />
                  </div>
                  <div class="div d-inline-flex ">
                      <button type="submit" value="" class="btn btn-block" >
                      <font-awesome-icon icon="search"/>
                      </button>
                  </div>
                </div>
              </form>

              <br><br>
              <br><br>
              
              <div class="row">
                <div class="form-group col-6">
                  <div class="d-inline-flex left-align-absolute flex-row">
                    <label class="form-label" for="friend1" style="font-size: 16px">Your friends</label>
                  </div>  
                  <div class="d-inline-flex left-align-absolute flex-row">
                    <label class="form-label" for="friend1" style="margin-right:1.2rem; font-size: 16px">Oscar_67</label>
                    <input style="width: 16px; height: 16px" type="checkbox" id="friend1" value="My friends1" v-model="this.checkedFriends1"> 
                  </div> 
                  <br><br>
                  <div class="d-inline-flex left-align-absolute flex-row">
                    <label class="form-label" for="friend2" style="margin-right:1.2rem; font-size: 16px">Anna</label>
                    <input style="width: 16px; height: 16px" type="checkbox" id="friend2" value="My friends2" v-model="this.checkedFriends2">
                  </div>
                  <br><br>
                  <div class="d-inline-flex left-align-absolute flex-row">
                    <label class="form-label" for="friend2" style="margin-right:1.2rem; font-size: 16px">Sigma_Male</label>
                    <input style="width: 16px; height: 16px" type="checkbox" id="friend3" value="My friends3" v-model="this.checkedFriends3">
                  </div>
                  <br><br>
                  <button class="submit-btn btn btn-dark" @click.prevent="Invite">Invite</button>
              </div> 

            </div>
          </div>
        </div>
      </div>

    </form>

    <div class="flex-row" style="margin:100px; display: flex; flex-direction: row-reverse">
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
      invites: [{name: 'Oscar'}],
      creator: "Oscar",
      checkedFriends1: false,
      checkedFriends2: false,
      checkedFriends3: false,
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

    async Invite() {
      let str = ''
      if(this.checkedFriends1 && this.invites.filter(x => x.name === 'Oscar_67').length == 0) {
        this.invites.push({name: 'Oscar_67'})
        str += 'Oscar_67 '
      }
      if(this.checkedFriends2 && this.invites.filter(x => x.name === 'Anna').length == 0) {
        this.invites.push({name: 'Anna'})
        str += 'Anna '
      }
      if(this.checkedFriends3 && this.invites.filter(x => x.name === 'Sigma_Male').length == 0) {
        this.invites.push({name: 'Sigma_Male'})
        str += 'Sigma_Male '
      }
      if (str !== '')
        alert('You invited '+str)
      else
        alert('You didn\'t invite no one')
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
          creator: this.creator,
          invities: this.invites,
          img_path: "https://i.imgur.com/Ji5S7qj.png",
          current_user_joined: true
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
        await this.$router.push({path: `/eventpost/${id}`});
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