import Container from '../../components/Container'
import{GoMail} from 'react-icons/go'
import { BsInstagram } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import styles from './Contato.module.css';
function Contatos(){
    return(
    
        <>
        
            <Container>
                
                <section className={styles.contatos}>
                    <h2>Contatos</h2>
                    <h3>Entre em contato</h3>
                    <p>Para que possamos conversar mais sobre.</p>
                    <div className={styles.icones}>
                        <a href='mailto:fernandocsarruda@hotmail.com' target ='_blank' rel='noopener noreferrer'>
                            <GoMail className={styles.icone}/>
                        </a>
                        <a href='https://www.instagram.com/nandocsarruda/' target ='_blank' rel='noopener noreferrer'>
                            <BsInstagram className={styles.icone}/>
                        </a>
                        <a href='https://www.youtube.com/channel/UCa1A_gSIaJOo2IML07nv4-Q' target ='_blank' rel='noopener noreferrer'>
                            <BsYoutube className={styles.icone}/>
                        </a>
                        <a href='https://github.com/fern4ndocsarruda' target ='_blank' rel='noopener noreferrer'>
                            <BsGithub className={styles.icone}/>
                        </a>
                        <a href='https://www.linkedin.com/in/fernandocsarruda/np' target ='_blank' rel='noopener noreferrer'>
                            <BsLinkedin className={styles.icone}/>
                        </a>


                    </div>


                </section>
                
            </Container>
            
        </>
    
    )
    }
    export default Contatos