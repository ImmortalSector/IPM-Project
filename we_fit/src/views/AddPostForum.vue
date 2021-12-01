<template>
  <div class="container">
    <form @submit="OnSubmit">
      <div class="form-group pb-3">
        <p class="form-label">Title:</p>
        <input v-model="this.title" type="text" class="form-control form-title" id="titleInput" aria-describedby="titleHelp" placeholder="Enter an interesting title">
        <small id="titleHelp" class="form-text text-muted"></small>
      </div>
      <div class="form-group mx-3">
        <p class="form-label">Description:</p>
        <textarea v-model="this.description"  class="form-control form-desc" id="descInput" aria-describedby="descInput" placeholder="Enter an appropriate description"/>
        <small id="descHelp" class="form-text text-muted"></small>
      </div>
      <div class="form-group flex-row end-row mx-3">
        <div class="form-group">
          <input type="checkbox" class="form-check-input  mx-2" id="notif">
          <label class="form-check-label" for="notif">Notify me!</label>
        </div>
        <div class="form-group mx-3">
          <input v-model="this.post_anonimously" type="checkbox" class="form-check-input mx-2" id="anon">
          <label class="form-check-label" for="anon">Submit Anonymously</label>
        </div>
        <button  type="submit" class="btn">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default{
  name : "AddPostForum",
  components: {

  },
  data(){
    return {
      title: '',
      description: '',
      post_anonimously: false,
    }
  },
  methods: {
    async OnSubmit(e){
      e.preventDefault();
      const id = await this.calcIndex();
      console.log(this.post_anonimously, this.title, this.description, id)
      const foo = (this.post_anonimously)? 'anonymous' : this.title;
      const newPost = {
       'id': id,
       'title': foo,
       'votes': 1,
       'description': this.description,
       'img_path': "logo.png",
       'my_vote': 1,
       'comments': []
      };
      const res = this.addPostOnDb(newPost);
      console.log("out of addPostOnDb with res ", res.ok)
      if(!(await res).statusCode === 201){
        return
      }else{
        await this.$router.push({path: "/forum"});
      }
      this.title = '';
      this.description = '';
    },

    async addPostOnDb(post) {

      const res = await fetch('api/post_cards_list', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(post),
      });
      console.log(res)
      return res;
    },

    async calcIndex(){
      const res = await fetch('api/post_cards_list')
      const data = await res.json()
      return data.length
    }
  },
  created() {
  }
}
</script>

<style scoped>
.form-label{
  text-align: left!important;
  object-position: left;
  font-size: 2rem;
}
.form-title{
  height: 5vh;
  width: 60vw;
  display: flex;
  align-self: flex-end;
}

.form-desc{
  height: 30vh;
  width: 60vw;
}

.end-row{
  background-color: #333333;
  font-size: 1.25rem;
  color: #FFFFFF;
  width: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
}
.btn{
  background-color: #5F0B19;
  color: #FFFFFF;
}
.my-container{
  display: flex;
  align-items: flex-start;
}
</style>