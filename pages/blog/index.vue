<template>
  <Head>
    <Title>Blog</Title>
  </Head>
  <div class="blog-container">
    <div class="blog-header">
      <h1 class="blog-title">Blog Posts</h1>
      <p class="text-yellow font-weight-thin">⚠️ dummy data ⚠️</p>
    </div>
    <div class="blog-posts">
      <v-row dense>
        <v-col cols="12" md="6" lg="4" v-for="post in blogPosts" :key="post.id">
          <v-card class="mx-auto my-4" max-width="400" outlined>
            <v-card-title class="blog-post-title">{{ post.title }}</v-card-title>
            <v-card-text class="blog-post-content">{{ post.content }}</v-card-text>
            <v-card-subtitle class="date-text">Uploaded {{ formatDate(post.date) }}.</v-card-subtitle>
            <v-card-actions>
              <v-btn class="text-center" color="blue" :href="'/blog/' + post.id" width="100%" variant="text">Read
                More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment';
import { ref } from 'vue';

const blogPosts = ref([
  {
    id: 1,
    title: 'Modern Design Trends',
    content: 'Discover the latest design trends in web development and user interfaces.',
    date: '2023-10-12',
  },
  {
    id: 2,
    title: 'The Art of Web Typography',
    content: 'Learn how to use typography effectively to enhance your website design.',
    date: '2023-10-10',
  },
  {
    id: 3,
    title: 'Mastering Responsive Layouts',
    content: 'Explore the principles of responsive web design and create beautiful layouts for all devices.',
    date: '2023-10-08',
  },
  {
    id: 4,
    title: 'Effective Content Strategy',
    content: 'Craft a content strategy that resonates with your target audience and drives engagement.',
    date: '2023-10-05',
  },
  {
    id: 5,
    title: 'SEO Best Practices',
    content: `Boost your website's visibility in search engines with proven SEO techniques.`,
    date: '2023-09-30',
  },
  {
    id: 6,
    title: 'Creating Engaging User Experiences',
    content: 'Design user experiences that captivate and retain your website visitors.',
    date: '2023-09-25',
  },
]);

const formatDate = (date: any) => {
  return moment(date).fromNow();
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

.blog-post-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.blog-post-content {
  margin: 0.5rem 0;
  color: #6e6e6e;
}

.date-text {
  text-align: center;
  font-size: 0.8rem;
  color: #9e9e9e;
  margin-top: 0.5rem;
}
</style>