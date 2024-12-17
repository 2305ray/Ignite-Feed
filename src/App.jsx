
import { Header } from './components/Header';
import { Post } from './components/Posts';

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
            <Post 
          author="Diego Fernandes"
          content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laudantium officia ipsam magnam. Et excepturi, cum hic vel velit iste vitae animi
          placeat autem voluptatem. Officia suscipit eos blanditiis libero?'
        />

        <Post 
            author="Mayk"
            content=' Quo laudantium officia ipsam magnam. Et excepturi, 
            placeat autem voluptatem. Officia suscipit eos blanditiis libero?'
        />
          </main>
        </div>
    </div>
  )
}

export default App
