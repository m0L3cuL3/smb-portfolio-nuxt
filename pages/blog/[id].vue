<template>
    <v-container class="blog-post-container" fluid>
        <v-row>
            <v-col cols="12">
                <v-card class="pa-6" outlined>
                    <h1>{{ currentPost.title }}</h1>
                    <p>{{ currentPost.content }}</p>
                </v-card>
            </v-col>
        </v-row>
        <h1 class="mt-8 text-center">Latest Posts</h1>
        <v-row class="" justify="center">
            <v-col cols="12" md="4" v-for="post in topThreePosts" :key="post.$id">
                <v-card outlined class="my-4">
                    <v-card-title class="title-font text-center pa-4">{{ post.title }}</v-card-title>
                    <v-card-actions>
                        <v-btn class="read-more-button text-center" color="blue" :href="'/blog/' + post.$id" variant="text"
                            width="100%">Read More</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { databases } from '~/utils/appwrite';

const config = useRuntimeConfig()

let response = await databases.listDocuments(
    config.public.databaseId,
    config.public.collectionId
);

const blogPosts = response.documents;

const route = useRoute();
const currentPost: any = ref({});

const fetchPostData = () => {
    const postId = route.params.id;
    currentPost.value = blogPosts.find(post => post.$id === postId);
};

onMounted(() => {
    fetchPostData();
});

// Sorting blog posts by date
blogPosts.sort((a, b) => new Date(b.date).getDate() - new Date(a.date).getDate());

// Slicing the array to get the top 3 posts
const topThreePosts = ref(blogPosts.slice(0, 3));
</script>
  
<style scoped>
.blog-post-container {
    padding: 2rem;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
}

p {
    font-size: 1.2rem;
    line-height: 1.6;
}

.title-font {
    font-size: 1.5rem;
    font-weight: bold;
}
</style>
