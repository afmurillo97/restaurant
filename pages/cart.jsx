import styles from '../styles/Cart.module.css'
import Image from 'next/image'
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.trTitle}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    {cart.products.map((product) => (
                        <tr className={styles.tr} key={product._id}>
                            <td>
                                <div className={styles.imgContainer}>
                                    <Image src='/img/dish3.png' layout='fill' alt='' objectFit='cover'/>
                                </div>
                            </td>
                            <td>
                                <span className={styles.name}>FELIPE</span>
                            </td>
                            <td>
                                <span className={styles.extras}>
                                    Double ingredient, spicy sauce
                                </span>
                            </td>
                            <td>
                                <span className={styles.price}>$19.90</span>
                            </td>
                            <td>
                                <span className={styles.quantity}>2</span>
                            </td>
                            <td>
                                <span className={styles.total}>$39.80</span>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totaText}>
                        <b className={styles.totaTextTitle}>Subtotal:</b>$79.60
                    </div>
                    <div className={styles.totaText}>
                        <b className={styles.totaTextTitle}>Disscount:</b>$0.00
                    </div>
                    <div className={styles.totaText}>
                        <b className={styles.totaTextTitle}>Total:</b>$79.60
                    </div>
                    <button className={styles.button}>CHECKOUT NOW!!!</button>
                </div>
            </div>
        </div>
    )
}

export default Cart