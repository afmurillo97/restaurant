import Image from "next/image";
import styles from "../styles/DishCard.module.css";

const DishCard = () => {
    return (
        <div className={styles.container}>
            <Image src='/img/dish1.png' alt='' width='500' height='500'/>
            <h1 className={styles.title}>LLANERA MEAT</h1>
            <span className={styles.price}>$19.90</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
        </div>
    )
}

export default DishCard