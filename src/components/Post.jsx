import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/2305ray.png" />
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web developer</span>
                    </div>
                </div>

                <time title='13 de dezembro de 2024' dateTime="2024-12-13 14:20:31">Públicado há 1h</time>
            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p><a href="#">👉 jane.design/doctorcare</a></p>
            <p> <a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea placeholder='Deixe um comentário'></textarea>
                    <button type='submit'>Comentar</button>
            </form>
        </article>

    )
}