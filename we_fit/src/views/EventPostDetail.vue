<template>
  <div class="container main-detail-container">
    <div class="row main-image-container">
      <img class="main-image" alt="WeFit logo" :src="post.img_path">
    </div>
    <div class="row main-info-container">
        
      
      <div class="row">
        
        <div class="d-inline-flex left-align-absolute flex-row">
          <label class="form-label " for="nameInput" style="margin-right:1.2rem; font-size: x-large">Name</label>
          <label class="form-label " for="nameInput" style="margin-right:1.2rem; font-size: x-large"> {{ post.title }} </label>
          <div class="type">
              <div v-if="post.type === 'Challenge'">
                <font-awesome-icon class="type-element" icon="running" style="height: 3vh; width: 3vw; align-self: end"/>
              </div>
              <div v-else-if="post.type === 'Competition'">
                <font-awesome-icon class="type-element" icon="star" style="height: 3vh; width: 3vw; align-self: end"/>
              </div>
              <div v-else>
                <font-awesome-icon class="type-element" icon="users" style="height: 3vh; width: 3vw; align-self: end"/>
              </div>
          </div>  
        </div>

        <br><br>
        <div class="d-inline-flex left-align-absolute flex-row">
          <label class="form-label" for="typeInput" style="margin-right:2rem; font-size: large">Type</label>
          {{ post.type }}
        </div>
        <br><br>
        <div class="d-inline-flex left-align-absolute flex-row">
          <label class="form-label" for="typeInput" style="margin-right:2rem; font-size: large">Created by</label>
          {{ post.creator }}
        </div>
        <br><br>
        <div class="d-inline-flex left-align-absolute flex-row">
          <div v-if="post.isPublic === true">
            Public event
          </div>
          <div v-else>
            Private event
          </div>
        </div>
        <br><br>
        <div class="d-inline-flex left-align-absolute flex-row">
          <label class="form-label" for="startDate" style="margin-right:1.2rem; font-size: large">Start Date</label>
          {{ post.startDate }}
          <label class="form-label" for="endDate" style="margin-left:1.2rem; margin-right:1.2rem; font-size: large">End Date</label>
          {{ post.endDate }}
        </div>

        <div class="d-inline-flex left-align-absolute flex-row">
          <label class="form-label" for="inviities" style="margin-right:1.2rem; font-size: large">Invities</label>
          <div :key = "invitie.name" v-for="invitie in this.invities" >
            <div v-if="invitie !== this.invities[this.invities.length-1]">
              {{ invitie.name }}; 
            </div>
            <div v-else> 
              {{ invitie.name }}
            </div>
          </div>
        </div>

        <br><br>
        <br><br>
        <br><br>
        <div>
          <p class="form-label left-align-absolute" style="font-size: x-large">Rule Set</p>
          {{ post.rules }}
        </div>
        <br><br>
        <br><br>
        <div>
          <p class="form-label left-align-absolute" style="font-size: x-large">Description</p>
          {{ post.description }}
        </div>
        <br><br>
      </div>
    </div>
    <br><br>
    <div class="align-items-center">
      <div v-if="post.current_user_joined === true">      
        <button class="submit-btn btn btn-dark" @click="disjoin">Disjoin event</button>
      </div>
      <div v-else>
        <button class="submit-btn btn btn-dark" @click="join">Join event</button>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: "EventPostDetail",
  components: {
    
  },
  props: ['id'],
  data() {
    return {
      post: {},
      invitiesSection: 0,
      invities: []
    };
  },
  methods : {
    
      async join() {
        // let len = this.invities.length  
        // this.invities[len++] = "Oscar"  //idk if necessary...
        this.post.current_user_joined = true
        this.post.invities.push({
          'name': "Oscar",
        });
        this.updatePostOnDb(this.post);
        let len = this.invities.length  
        this.invities[len++] = "Oscar" 
        location.reload()

      },

      async disjoin() {
        this.post.invities = this.post.invities.filter( el => el.name !== "Oscar" );        
        this.post.current_user_joined = false
        this.updatePostOnDb(this.post);
        this.invities = this.invities.filter( el => el !== "Oscar" );
        location.reload()
      },
      async updatePostOnDb(post){
        await fetch(`api/event_cards_list/${this.id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(post),
        })
      }
      
  },
  async created() {
    console.log("EventPostDetails")
    const res = await fetch(`api/event_cards_list/${this.id}`)
    const data = await res.json()
    this.post = data
    this.invities = this.post.invities
  },
};

</script>

<style scoped>
.main-detail-container{
  max-height: 100vh;
  max-width: 80vw;
}
.main-image-container{
  max-height: 40vh;
  max-width: 100vw;
  object-fit: contain;
  object-position: center;
}
.main-image{
  max-height: 40vh;
  max-width: 100vw;
  object-fit: contain;
  border: solid 2px #2c3e50;
}
.main-info-container{
  border: solid 2px #2c3e50;
  object-position: left;

}
.match-container{
  height: 40vh;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  padding-left: 0;
  padding-right: 0;

}
.post-title{
  text-align: left;
  object-position: left;
  color: #ab112b;
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 0;
}
.post-description{
  text-align: left;
  object-position: left;
  color: #333333;
  font-size: 1rem;
  font-weight: bold;
}
.comment-text-input{
  overflow: auto;
  min-height: 10vh;
  height: 100%;
  width: 100%;
}

.btn-lg{
  padding: 0 0 0 0;
  align-content: center;
  align-items: center;
  width: 10vw;
  height: 20vh;
}
</style>