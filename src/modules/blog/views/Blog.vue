<template>
    <div class="min-h-screen bg-gray-100 p-8">
      <div class="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 class="text-2xl font-bold mb-4">Blog Posts</h1>
        <ul>
          <li 
            v-for="post in posts" 
            :key="post.id" 
            class="py-2 border-b border-gray-300"
          >
            {{ post.content }}
          </li>
        </ul>
  
        <input
          v-model="newPost"
          placeholder="Write a new post"
          class="w-full mt-4 p-2 border border-gray-300 rounded"
        />
        <button
          @click="addNewPost"
          class="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Post
        </button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useBlogStore } from '../stores/blogStore';
  
  export default defineComponent({
    setup() {
      const blogStore = useBlogStore();
      const newPost = ref<string>('');
  
      const addNewPost = () => {
        if (newPost.value.trim()) {
          blogStore.addPost(newPost.value);
          newPost.value = '';
        }
      };
  
      return {
        posts: blogStore.posts,
        newPost,
        addNewPost,
      };
    },
  });
  </script>
  