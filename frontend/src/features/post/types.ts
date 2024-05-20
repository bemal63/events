export interface Post {
  id: number;
  title: string;
}

export interface PostsState {
  items: Post[]
  status: 'loading' | 'loaded' | 'error';
}