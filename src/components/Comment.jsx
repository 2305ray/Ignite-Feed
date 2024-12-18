import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} // como ta trabalhando com booleans tem qcolocar as chaves
            src="https://github.com/maykbrito.png" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='13 de dezembro de 2024' dateTime="2024-12-13 14:20:31">Cerca de 1 hora atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash  size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir<span>20</span>
                    </button> 
                </footer>
            </div>
        </div>

        
    )
}