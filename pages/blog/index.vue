<template>
  <Head>
    <Title>Blog</Title>
  </Head>
  <div class="blog-container">
    <div class="blog-header">
      <h1 class="blog-title">Blog Posts</h1>
    </div>
    <div class="blog-posts">
      <div class="blog-post" v-for="post in blogPosts" :key="post.$id">
        <v-card class="pa-4 " elevation="2">
          <v-card-subtitle class="date-text">Uploaded {{ formatDate(post.$createdAt) }}.</v-card-subtitle>
          <v-card-title class="blog-post-title">{{ post.title }}</v-card-title>
          <v-card-text class="blog-post-content">{{ truncateText(post.content, 500) }}</v-card-text>
          <v-card-actions>
            <v-btn class="read-more-button text-center" color="blue" :href="'/blog/' + post.$id" variant="text"
              width="100%">Read More</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment';
import { databases } from '~/utils/appwrite';
const config = useRuntimeConfig();

let response = await databases.listDocuments(
  config.public.databaseId,
  config.public.collectionId
);

const blogPosts = response.documents;

const formatDate = (date: any) => {
  return moment(date).fromNow();
};

// Function to truncate text
const truncateText = (text: any, length: any) => {
  if (text.length > length) {
    return text.substring(0, length) + '...';
  } else {
    return text;
  }
};
</script>

<style scoped>
.blog-container {
  padding: 1rem;
}

.blog-header {
  text-align: center;
  margin-bottom: 1rem;
}

.blog-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.blog-posts {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blog-post {
  width: 100%;
  margin: 1rem 0;
}

.blog-post-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.blog-post-content {
  margin: 0.5rem 0;
  color: #6e6e6e;
}

.read-more-button {
  text-transform: uppercase;
  font-weight: bold;
  width: 100%;
}

.date-text {
  text-align: right;
  font-size: 0.8rem;
  color: #9e9e9e;
  margin-top: 0.5rem;
}
</style>