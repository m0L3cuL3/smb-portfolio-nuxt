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
            <v-col cols="12" md="4" v-for="post in topThreePosts" :key="post.id">
                <v-card outlined class="my-4">
                    <v-card-title class="title-font">{{ post.title }}</v-card-title>
                    <v-card-text class="mb-2">{{ truncateText(post.content, 100) }}</v-card-text>
                    <v-card-actions>
                        <v-btn color="blue" :to="`/blog/${post.id}`" variant="plain">Read More</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const blogPosts = ref([
    {
        id: 1,
        title: 'Modern Design Trends',
        content: 'Discover the latest design trends in web development and user interfaces. Stay updated with the newest innovations in user experience, visual design, and interaction patterns to create modern and engaging websites.',
        date: '2023-10-12',
    },
    {
        id: 2,
        title: 'The Art of Web Typography',
        content: 'Learn how to use typography effectively to enhance your website design. Explore the nuances of font selection, spacing, and formatting to create visually appealing and readable content that amplifies your message and brand identity.',
        date: '2023-10-10',
    },
    {
        id: 3,
        title: 'Mastering Responsive Layouts',
        content: 'Explore the principles of responsive web design and create beautiful layouts for all devices. Dive into the techniques for fluid grids, flexible images, and media queries to ensure your website looks stunning and functions seamlessly across various screen sizes and devices.',
        date: '2023-10-08',
    },
    {
        id: 4,
        title: 'Effective Content Strategy',
        content: 'Craft a content strategy that resonates with your target audience and drives engagement. Understand the importance of compelling storytelling, valuable information, and strategic distribution to establish a strong connection with your users and build a loyal customer base.',
        date: '2023-10-05',
    },
    {
        id: 5,
        title: 'SEO Best Practices',
        content: `Boost your website's visibility in search engines with proven SEO techniques. Learn the essential tactics for keyword research, on-page optimization, link building, and content marketing to improve your search engine rankings and attract organic traffic to your website.`,
        date: '2023-09-30',
    },
    {
        id: 6,
        title: 'Creating Engaging User Experiences',
        content: 'Design user experiences that captivate and retain your website visitors. Dive into the psychology of user behavior, intuitive navigation, and interactive elements to create memorable and enjoyable experiences that keep users coming back for more.',
        date: '2023-09-25',
    },
]);


const route = useRoute();
const currentPost: any = ref({});

const fetchPostData = () => {
    const postId = route.params.id;
    currentPost.value = blogPosts.value.find(post => post.id.toString() === postId);
};

onMounted(() => {
    fetchPostData();
});

// Sorting blog posts by date
blogPosts.value.sort((a, b) => new Date(b.date).getDate() - new Date(a.date).getDate());

// Slicing the array to get the top 3 posts
const topThreePosts = ref(blogPosts.value.slice(0, 3));

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
