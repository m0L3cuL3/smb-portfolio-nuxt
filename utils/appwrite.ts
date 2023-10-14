import { Client, Databases } from 'appwrite';
export const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('652a9df2a294b175c1b6');
    
export const databases = new Databases(client);
