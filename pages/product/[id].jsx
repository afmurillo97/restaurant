import styles from '../../styles/Product.module.css'
import Image from 'next/image'
import { useState } from 'react'

const Product = () => {
        const [size, setSize] = useState(0)
    const dish = {
        id: 1,
        img: '/img/dish3.png',
        name: 'LLANERA MEAT',
        price: [19.9, 23.9, 27.9],
        desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, quis.'
    }
    return <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={dish.img} layout='fill' alt='' objectFit='contain'/>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{dish.name}</h1>
            <span className={styles.price}>${dish.price[size]}</span>
            <p className={styles.desc}>{dish.desc}</p>
            <h3 className={styles.choose}>Choose the size</h3>
            <div className={styles.sizes}>
                <div className={styles.size} onClick={()=>setSize(0)}>
                    <Image src='/img/size.png' layout='fill' alt=''/>
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size} onClick={()=>setSize(1)}>
                    <Image src='/img/size.png' layout='fill' alt=''/>
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size} onClick={()=>setSize(2)}>
                    <Image src='/img/size.png' layout='fill' alt=''/>
                    <span className={styles.number}>Large</span>
                </div>
            </div>
            <h3 className={styles.choose}>Choose additional ingredients</h3>
            <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input 
                        type="checkbox"
                        name="double"
                        id="double"
                        className={styles.checkbox} 
                    />
                    <label htmlFor="double">Double Ingredients</label>
                </div>
                <div className={styles.option}>
                    <input 
                        type="checkbox"
                        name="cheese"
                        id="cheese"
                        className={styles.checkbox} 
                    />
                    <label htmlFor="double">Double Cheese</label>
                </div>
                <div className={styles.option}>
                    <input 
                        type="checkbox"
                        name="spicy"
                        id="spicy"
                        className={styles.checkbox} 
                    />
                    <label htmlFor="double">Spicy Sauce</label>
                </div>
                <div className={styles.option}>
                    <input 
                        type="checkbox"
                        name="garlic"
                        id="garlic"
                        className={styles.checkbox} 
                    />
                    <label htmlFor="double">Garlic Sauce</label>
                </div>
            </div>
            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.quantity}/>
                <button className={styles.button}>Add to Cart</button>
            </div>
        </div>
    </div>
}

export default Product