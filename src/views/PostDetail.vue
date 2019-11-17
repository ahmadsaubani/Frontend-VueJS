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
                                        <h1>Detail Post</h1>
                                    </div>
                                    <form role="form">
                                        
                                            <div class="form-group">
                                                <label for="title">title</label>
                                                <input type="text" class="form-control" id="title" v-model="post.title"  name="title">
                                            </div>
                                        
                                            <div class="form-group">
                                                <label for="description">Description</label>
                                                <textarea type="text" class="form-control" id="description" v-model="post.description" name="description"> </textarea>
                                            </div>
                                            <button v-on:click.prevent="updatePost(post.id)" class="btn btn-primary">Update</button>
                                            <button v-on:click.prevent="deletePost(post.id)" class="btn btn-danger">Delete</button>
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
    name: "post-details",
    data() {
        return {
            post: {},
        };
    },
    methods: {
        updatePost(id) {
            var data = {
                id: id,
                title: this.post.title ,
                description: this.post.description 
            };
            console.log(data);
            http
                .put("/post/" + this.post.id, data)
                .then(response => {
                    this.post.title = response.data.title;
                    this.post.description = response.data.description;
                    this.$router.push('/posts');
                })
                .catch(e => {
                    console.log(e);
                });
        },
        retrievePosts() {

        http
            .get("/post/" + this.$route.params.id)
            .then(response => {
                this.post = response.data; 
            })
            .catch(e => {
                console.log(e);
            });
        },
        refreshList() {
            this.retrievePosts();
        },
        deletePost(id) {

        http
            .delete("/post/"+id)
            .then(response => {
                this.$emit("refreshData");
                this.$router.push('/posts');
            })
            .catch(e => {
                console.log(e);
            });
        }
    },
    mounted() {
        this.retrievePosts();
    }
};
</script>
