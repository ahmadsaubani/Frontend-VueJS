<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    
                        
                            <card type="secondary" shadow
                                header-classes="bg-white pb-5"
                                body-classes="px-lg-5 py-lg-5"
                                class="border-0">
                                
                                <template>
                                    <div class="text-center text-muted mb-4">
                                        <h1>Add Post</h1>
                                    </div>
                                    <form role="form">
                                        <div v-if="!submitted">
                                            <div class="form-group">
                                                <label for="title">Title</label>
                                                <input type="text" class="form-control" id="title" required v-model="post.title"  name="title">
                                            </div>
                                        
                                            <div class="form-group">
                                                <label for="description">Description</label>
                                                <textarea type="text" class="form-control" id="description" required v-model="post.description"  name="description"> </textarea>
                                            </div>
                                            <div class="text-center">
                                                
                                            </div>
                                            <button v-on:click.prevent="savePost" class="btn btn-success">Submit</button>
                                        </div>

                                        <div v-else>
                                            <h4>You submitted successfully!</h4>
                                                <button class="btn btn-success" v-on:click="newPost">Add</button>
                                        </div>
                                    </form>
                                </template>
                            </card>
                        
                    
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import http from "../http-common";

export default {
  name: "add-post",
  data() {
    return {
      post: {
        id: 0,
        title: "",
        description: ""
      },
      submitted: false
    };
  },
  methods: {
    savePost() {
      var data = {
        title: this.post.title,
        description: this.post.description
      };

      http
        .post("/post", data)
        .then(response => {
          this.post.id = response.data.id;
          this.$router.push('/posts');
        })
        .catch(e => {
          console.log(e);
        });

      this.submitted = true;
    },
    newPost() {
      this.submitted = false;
      this.post = {};
    }
  }
};
</script>
<style>
</style>
