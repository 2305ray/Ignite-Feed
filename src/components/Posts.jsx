import { format,formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale'

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Posts.module.css';
import { useState } from 'react';







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
        publishedAt: new Date('2024-12-18 08:16:40'),
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

export function Post({ author, publishedAt, content }) { //desestruturação
   // const publishedDateFomated = new Intl.DateTimeFormat('pt-BR', {
   //                          day: '2-digit',
   //                           month: 'long', //por extenso
   //                           hour:'2-digit',
   //                           minute: '2-digit',
   //                           }).format(publishedAt);


// estado = quer q observe quando mudar  as coisas do componente
//ele tem duas funções, um é o valor e a outra é a q avisa ao motor do react quando tiver um novo valor
   const [comments, setComments] = useState([
   'post muito bacana, hein?'
   ])

   const [newCommentText, setNewCmommentText] = useState("")

   const publishedDateFomatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
})

//vai analisar a data relativa a data atual
const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale:ptBR,
    addSuffix: true,
});

function handleCriateNewComment () {
    event.preventDefault()

    const newCommentText = event.target.comment.value;

    //imutabilidade
   setComments([...comments, newCommentText]); //passa qual é o novo valor e n qual quer inserir
    setNewCmommentText('')
   //event.target.comment.value= ''; // programação imperativa

}

function handleNewComment() {
    event.target.setCustomValidity('')
    setNewCmommentText(event.target.value);
}

function handleNewCommentInvalid() {
    //target -> qual é o elemento que aconteceu aquele evento
    event.target.setCustomValidity('Esse campo é obrigatório'); // é um método que muda a mensagem de validação
}

function deleteComment(commentToDelete) {
// imutabilidade -> as variáveis não sofrem mutação, é criado um novo valor, um novo espaço na memória
//criar uma nova lista de comentários sem o comentario que quer deletar
//o filter percorre cada comentario e se retornar true ele mantém na lista, false ele remove
    const commentsWithoutDeletedOne = comments.filter(comment => {
        return comment !== commentToDelete; //mater na lista os comentarios que forem diferentes do comentario q quer deletar
    });
    setComments(commentsWithoutDeletedOne);
}

const isNweCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <Avatar  //  hasBorder se for true é só omitir o valor
                    src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFomatted} dateTime={publishedAt.toISOString()}>
                   {publishedDateRelativeToNow}
                </time>

            </header>

            <div className={styles.content}>
            {content.map(line => {
                if (line.type === 'paragraph') {
                    return <p key={line.content}>{line.content}</p>
                }else if (line.type === 'link') {
                    return <p key={line.content}><a href='#'>{line.content}</a></p>
                }
            })}
            </div>

            <form onSubmit={handleCriateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea 
                value={newCommentText} //vai sempre refletir o valor dessa variavel
                name='comment'
                placeholder='Deixe um comentário'
                onChange={handleNewComment} 
                onInvalid={handleNewCommentInvalid} //chamada sempre que o html identifica que tentamso realizar o submit só q o texto era invalido
                required //valida o formulário
                />
                

                <footer>
                     <button type='submit' disabled={isNweCommentEmpty}>
                        Publicar
                     </button> 
                </footer>      
            </form>

            <div className={styles.commentList} > 
                {comments.map(comment => {
                    return (
                    <Comment 
                    key={comment} 
                    content={comment} 
                    onDeleteComment={deleteComment}
                    />)
                })}
                
            </div>
        </article>

    )
}