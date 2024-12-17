
import { Header } from './components/Header';
import { Post, posts } from './components/Posts';

import './global.css'
import styles from './App.module.css';
import { Sidebar } from './components/sidebar';

function App() {
  return (
    <div>

      <Header />
        

        <div className={styles.wrapper}>
          <Sidebar />

          <main>
            {posts.map(post => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publisehdAt={post.publishedAt}
                />
              )
            })}
          </main>
        </div>
    </div>
  )
}

export default App