<script lang="ts">
import PostCard from '../components/PostCard.vue';

export default {
  components: {
    PostCard,
  },
};
</script>

<template>
   <section class="bg-gray-100 text-gray-600 py-20">
    <div class="container mx-auto flex px-5 items-center justify-center flex-col">
        <div class="text-center lg:w-2/3 w-full">
            <h1 class="text-3xl sm:text-4xl mb-4 font-medium text-gray-800">
                Articles
            </h1>
            <p class="mb-8 leading-relaxed">
                We publish articles on a number of topics.
                <br>
                We encourage you to read our posts and let us know your feedback. It would be really help us to move forward.
            </p>

        </div>
    </div>
    </section>
    <section class="bg-white text-gray-600 p-6 sm:p-20">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <PostCard
    url="https://example.com/article/1"
    name="Exciting News"
    image="https://picsum.photos/200/300"
  >
    <p>This is a short description of the exciting news article.</p>
  </PostCard>
  <PostCard
    url="https://example.com/article/1"
    name="Exciting News"
    image="https://picsum.photos/200/300"
  >
    <p>This is a short description of the exciting news article.</p>
  </PostCard>
    </div>
    </section>

    
</template>
  
  