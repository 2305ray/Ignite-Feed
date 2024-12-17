import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Posts.module.css'

// infos que variam de um post para outro
// author: { avatar_url:'', name:'', role:''}
// publishedAt: date
// content: string
 export const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Fernandes',
            role: 'CTO @Rocketseat',
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋'},
            { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: '👉 jane.design/doctorcare' },
            { type: 'link', content: '#novoprojeto #nlw #rocketseat' },   
        ],
        publishedAt: new Date('2022-05-03 20:00:00'),
    },

    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/maykbrito.png',
            name: 'Mayk Brito',
            role: 'Educator @Rocketseat'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋'},
            { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: '👉 jane.design/doctorcare' },
            { type: 'link', content: '#novoprojeto #nlw #rocketseat' },   
        ],
        publishedAt: new Date('2022-05-30 20:00:00'),
    },

    
]

export function Post(props) {
    return (
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <Avatar  //  hasBorder se for true é só omitir o valor
                    src={props.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>

                <time title='13 de dezembro de 2024' dateTime="2024-12-13 14:20:31">Públicado há 1h</time>
            </header>

            <div className={styles.content}>
            
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea placeholder='Deixe um comentário'></textarea>

                <footer>
                     <button type='submit'>Publicar</button> 
                </footer>      
            </form>

            <div className={styles.commentList} > 
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>

    )
}