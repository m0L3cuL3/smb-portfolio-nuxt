<template>
  <div class="blog-container">
    <div class="blog-header">
      <h1 class="blog-title">Blog Posts</h1>
      <p class="text-yellow font-weight-thin">⚠️ dummy data ⚠️</p>
    </div>
    <div class="blog-posts">
      <div class="blog-post" v-for="post in blogPosts" :key="post.id">
        <v-card class="pa-4" elevation="2">
          <v-card-title class="blog-post-title">{{ post.title }}</v-card-title>
          <v-card-text class="blog-post-content">{{ post.content }}</v-card-text>
          <v-card-actions>
            <v-btn class="read-more-button" color="blue" @click="readMore()">Read More</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const blogPosts = ref([
  {
    id: 1,
    title: 'Modern Design Trends',
    content: 'Discover the latest design trends in web development and user interfaces.',
  },
  {
    id: 2,
    title: 'The Art of Web Typography',
    content: 'Learn how to use typography effectively to enhance your website design.',
  },
  {
    id: 3,
    title: 'Mastering Responsive Layouts',
    content: 'Explore the principles of responsive web design and create beautiful layouts for all devices.',
  },
  {
    id: 4,
    title: 'Effective Content Strategy',
    content: 'Craft a content strategy that resonates with your target audience and drives engagement.',
  },
  {
    id: 5,
    title: 'SEO Best Practices',
    content: `Boost your website's visibility in search engines with proven SEO techniques.`,
  },
  {
    id: 6,
    title: 'Creating Engaging User Experiences',
    content: 'Design user experiences that captivate and retain your website visitors.',
  },
]);

const readMore = () => {
  // Implement your "Read More" logic here
};
</script>

<style scoped>
.blog-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}

.blog-header {
  text-align: center;
}

.blog-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.blog-posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.blog-post {
  width: 600px;
  margin: 1rem;
}

.blog-post-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.blog-post-content {
  margin: 1rem 0;
  color: #6e6e6e;
}

.read-more-button {
  text-transform: uppercase;
  font-weight: bold;
}
</style>