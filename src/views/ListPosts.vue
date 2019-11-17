<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">List Post
                                    <span>List all post in our database</span>
                                </h1>
                                <div class="btn-wrapper">
                                    <base-button tag="a"
                                                href="https://github.com/ahmadsaubani"
                                                class="mb-3 mb-sm-0"
                                                type="info"
                                                icon="fa fa-github">
                                        Github
                                    </base-button>
                                    <base-button tag="a"
                                                href="https://gitlab.com/ahmadsaubani"
                                                class="mb-3 mb-sm-0"
                                                type="white"
                                                icon="fa fa-gitlab">
                                        Gitlab
                                    </base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div  v-for="(post, index) in posts" :key="index" class="col-lg-4">
                                <card  class="border-0 mt-3" hover shadow body-classes="py-5">
                                    <div class="form-group">
                                        <h6 id="title" class="text-primary text-uppercase">

                                        {{post.title}}

                                        </h6>
                                    </div>
                                    <div class="form-group">
                                        <label for="description">Description</label>
                                        <p id="description" class="description mt-2">{{post.description}}</p>
                                    </div>

                                    <button class="btn btn-primary mt-2" v-on:click="detailPost(post.id)">Detail</button>
                                </card>
                                <div class="col-md-6">
                                    <router-view @refreshData="refreshList"></router-view>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </section>

    </div>
</template>

<script>

import http from "../http-common";
 
export default {
    name: "posts-list",
    data() {
        return {
        posts: []
        };
    },
    methods: {
        retrievePosts() {
        http
            .get("/posts")
            .then(response => {
                this.posts = response.data;
            })
            .catch(e => {
                console.log(e);
            });
        },
        refreshList() {
            this.retrievePosts();
        },
        detailPost(id) {
            this.$router.push('/post/' + id);
        }
    },
    mounted() {
        this.retrievePosts();
    },
    
};
</script>
