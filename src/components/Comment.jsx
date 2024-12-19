import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
    const [likeCount, SetLikeCount] = useState(0); // iniciar o estado com  mesmo tipo de info q vai ser armazenada

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        SetLikeCount(likeCount + 1);

        setLikeCount((statte) => {
            return state + 1
        });
    } 

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} // como ta trabalhando com booleans tem qcolocar as chaves
            //todos os eventos esperam um a função como propriedade 
            src="https://github.com/maykbrito.png" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='13 de dezembro de 2024' dateTime="2024-12-13 14:20:31">Cerca de 1 hora atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash  size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                
                <footer>
                    <button onClick={handleLikeComment}> 
                        <ThumbsUp />
                        Aplaudir<span>{likeCount}</span>
                    </button> 
                </footer>
            </div>
        </div>

        
    )
}  