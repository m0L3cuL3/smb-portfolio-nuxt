<template>
    <v-container fluid>
        <h1 class="text-center py-4 mb-4 display-1 text-uppercase">Skills</h1>
        <v-row align-content="center" justify="center">
            <v-col v-for="item in lists" :key="item.skill" cols="12" sm="6" md="4" lg="3">
                <v-card class="ma-2 skill-card" height="100%">
                    <v-card-title class="text-center">
                        <div class="d-flex justify-center">
                            <v-img :src="item.icon" max-height="100" max-width="100"></v-img>
                        </div>
                    </v-card-title>
                    <v-card-subtitle class="text-center pa-2">{{ item.skill }}</v-card-subtitle>
                    <v-card-text class="text-center">{{ item.description }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<style scoped>
.skill-card {
    transition: background-color 0.2s, box-shadow 0.2s;
}

.skill-card:hover {
    background-color: #292929;
    /* Change to your desired hover background color */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    /* Add a subtle shadow on hover */
}
</style>

<script setup lang="ts">
const lists = [
    {
        skill: 'C++',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        description: 'Proficient in C++ with experience in creating desktop applications and dynamic linked-libraries.'
    },
    {
        skill: 'C# .NET',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        description: 'Skilled in C# .NET, specializing in the development of user-friendly desktop applications and management systems.'
    },
    {
        skill: 'Angular',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        description: 'Adept at using Angular to develop dynamic web applications and engaging static websites.'
    },
    {
        skill: 'VueJS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        description: 'Experienced in VueJS, creating interactive web applications and visually appealing static websites.'
    },
    {
        skill: 'MySQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        description: 'Skilled in database design, development, and maintenance using MySQL.'
    },
    {
        skill: 'Redis',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
        description: 'Actively exploring Redis and its potential in upcoming projects.'
    },
    {
        skill: 'Appwrite',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg',
        description: 'Developed a robust blog post backend system using Appwrite.'
    },
    {
        skill: 'NodeJS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        description: 'Proficient in NodeJS, developing and deploying web servers, APIs, and more.'
    },
    {
        skill: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        description: 'Developed a feature-rich to-do list application using MongoDB.'
    },
    {
        skill: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        description: 'Expert in Python, using it for task automation and currently embarking on a journey in cybersecurity.'
    },
    {
        skill: 'DigitalOcean',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',
        description: 'Skilled in deploying and managing applications and droplets using DigitalOcean. This website is hosted on DigitalOcean.'
    },
    {
        skill: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        description: 'Proficient in Git version control for tracking and managing projects.'
    },
    {
        skill: 'Java',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        description: 'Experienced in Java for developing comprehensive management systems.'
    },
    {
        skill: 'GraphQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
        description: 'Proficient in using GraphQL to centralize and optimize various APIs.'
    },
];
</script>