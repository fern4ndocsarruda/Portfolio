import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { BsArrowRightSquareFill } from "react-icons/bs";
import styles from './Card.module.css'


function Card({name, description, html_url}) {
    return (
        <section className={styles.Card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                </div>

                <a href={html_url} target="blank" rel="nopenner noreferrer" className={styles.botao}>
                    <BsArrowRightSquareFill />
                </a>
            </div>
        </section>
    )
}

export default Card