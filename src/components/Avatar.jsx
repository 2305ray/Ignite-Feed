import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src}) { //quer buscar somente as propriedades
    
 //    DESESTRUTURAÇÃO
// const user = { name: 'diego'}
// const { name } = user; //  que arrancar o nome de dentro do objeto

//const hasBorder = props.hasBorder !== false; //default

    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        src={src} />
    );
}