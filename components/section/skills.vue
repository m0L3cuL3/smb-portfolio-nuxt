<template>
    <section class="ma-2 pa-2">
        <h1 class="text-center text-h3 ma-4 pa-4">Skills</h1>
        <v-container>
            <v-row no-gutters align-content="center">
                <v-col v-for="item in lists" cols="12" sm="2" align-self="center">
                    <v-card class="ma-2 pa-2" height="250">
                        <v-card-title class="text-center">
                            <img :src="item.icon" class="w-25 h-25" />
                        </v-card-title>
                        <v-card-subtitle class="text-center pa-2">
                            {{ item.skill }}
                        </v-card-subtitle>
                        <v-divider></v-divider>
                        <v-card-text class="text-center">{{ item.description }}</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">
let show = false;
const lists = [
    {
        skill: 'C++',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
        description: 'Created desktop applications and dynamic linked-libraries.'
    },
    {
        skill: 'C# .NET',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        description: 'Created desktop applications for daily use like management systems.'
    },
    {
        skill: 'Angular',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
        description: 'Created web applications and static websites.'
    },
    {
        skill: 'VueJS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        description: 'Created web applications and static websites.'
    },
    {
        skill: 'MySQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        description: 'Designed, developed, and maintained databases.'
    },
    {
        skill: 'Redis',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
        description: 'Currently practicing this technology, still it possesses great possibilities in my upcoming projects.'
    },
    {
        skill: 'Appwrite',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg',
        description: 'Developed a simple blog post backend using Appwrite.'
    },
    {
        skill: 'NodeJS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        description: 'Developed and deployed web servers, APIs, and more.'
    },
    {
        skill: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        description: 'Developed a simple to do list using MongoDB.'
    },
    {
        skill: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        description: 'Developed scripts to automate tedious tasks. In addition, currently using python as to start my journey in cyber security.'
    },
    {
        skill: 'DigitalOcean',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',
        description: 'Deployed and managed applications and droplets using DigitalOcean. In fact, this website is deployed in DigitalOcean.'
    },
    {
        skill: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        description: 'Used Git to version control my projects.'
    },
    {
        skill: 'Java',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        description: 'Developed management systems using Java.'
    },
    {
        skill: 'GraphQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
        description: 'Used GraphQL to centralized different APIs that I use.'
    },
]
</script>