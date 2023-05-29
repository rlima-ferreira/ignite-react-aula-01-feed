import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { IPost, postApi } from './api/post.api';
import Header from './components/Header';
import Post from './components/Post';
import Sidebar from './components/Sidebar';

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    postApi.findAll().then(({ data }) => setPosts(data));
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} data={post} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
