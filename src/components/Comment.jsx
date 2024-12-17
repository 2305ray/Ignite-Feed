import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/2305ray.png" alt="" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                </div>
                    <div>
                        <p>Muito bom dwev, paravens</p>
                    </div>
                <footer>
                    Aplaudir
                </footer>
            </div>
        </div>

        
    )
}