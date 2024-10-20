import { defineStore } from 'pinia';

interface BlogPost {
  id: number;
  content: string;
}

interface BlogState {
  posts: BlogPost[];
}

export const useBlogStore = defineStore('blog', {
  state: (): BlogState => ({
    posts: [],
  }),

  actions: {
    addPost(content: string) {
      const id = this.posts.length + 1;
      this.posts.push({ id, content });
    },
  },
});
