import styles from '../styles/Footer.module.css';
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src='/img/bg.png' layout='fill' alt='' />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES, WE DID. THE LLANERA MEAT, WELL BAKED SLICE OF MEAT
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
                    <p className={styles.text}>
                        1358 R. Don Road #296.
                        <br /> Los Angeles, 36427
                        <br /> (301) 413-8939
                    </p>
                    <p className={styles.text}>
                        2967 Park Av #566.
                        <br /> California, 77824
                        <br /> (301) 413-8940
                    </p>
                    <p className={styles.text}>
                        3456 Dallas Airport #789.
                        <br /> Dallas, 36427
                        <br /> (301) 413-8941
                    </p>
                    <p className={styles.text}>
                        9878 k. Boulevard #234.
                        <br /> Texas, 63454
                        <br /> (301) 413-8942
                    </p>
                    <p className={styles.text}>
                        7839 H. Don Road #786.
                        <br /> Missisipi, 58769
                        <br /> (301) 413-8943
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br /> 9:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 - 24:00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer