import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://plus.unsplash.com/premium_vector-1697729782149-e53d522cb596?fm=jpg&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/2305ray.png" />

                <strong>Diego Fernandes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil</a> 
            </footer>

            
        </aside>
    )
}