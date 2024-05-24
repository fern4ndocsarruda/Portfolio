import styles from './Sobre.module.css'
import html from './imagens/icon-html.svg'
import css from './imagens/icon-css.svg'
import js from './imagens/icon-js.svg'
import node from './imagens/icon-node.svg'
import react from './imagens/icon-react.svg'
import sql from './imagens/icon-sql.svg'
import avatar from './imagens/avatar.jpg'


function Sobre() {
    return (
        <>
        <section className={styles.sobre}>
        <div className={styles.bio}>
            <img src={avatar} className={styles.avatar}/>
        <div className={styles.texto}>
          
            
                <h2>Sobre</h2>
                <p>Sou
                    <span> Fernando Arruda </span>
                    <strong>Desenvolvedor Full Stack</strong>
                </p>
                <p>
                    Trabalho com desenvolvimento web desde 2024.
                </p>
                <p>
                    Sou um grande entusiasta de soluções tecnológicas para problemas do dia a dia, apaixonado por tecnologia.
                </p>
                <p>
                    Pronto para realizar criações de aplicações dinâmicas e intuitivas.
                </p>
            
            </div>
            </div>
            <div className={styles.techs}>
                <h3> Techs</h3>
            </div>
            <div className={styles.icones}>
                <img src={html} alt = 'Ícone do html'/>
                <img src={css} alt = 'Ícone do css'/> 
                <img src={js} alt = 'Ícone do js'/>
                <img src={node} alt = 'Ícone do node'/>
                <img src={react} alt = 'Ícone do react'/>
                <img src={sql} alt = 'Ícone do sql'/>
            
            </div>

            
            </section>
        </>
    )
}
export default Sobre