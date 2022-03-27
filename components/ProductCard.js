import React, { useContext } from 'react'
import styles from '../styles/ProductCard.module.css'
import Link from 'next/link';
import Button from './Button';
import { ItemContext } from '../context/items';



export default function ProductCard(props) {

  // const { items, cart, setCart, pricePix, setPricePix, cartQuantNum } = useContext(ItemContext)

  
  

  return (

    <div>
      <div className={styles.productCard}>
        <Link href={`/produtos/${props.items.name}`}>
          <div className={styles.productMain}>
            <div>
              <div className={styles.productImage}>

                <img className={styles.icon}
                  src={`assets/images/${props.items.image}`}
                  alt={"props.card.icon"}></img>

              </div>

              <p className={styles.productDesc}>
                {props.items.name}
              </p>


              <div className={styles.productPrice}>

                <span className={styles.oldPriceCard}>R$ {props.items.oldPrice}</span>
                <span className={styles.priceCard}>R$ {props.items.price}</span>
                <span className={styles.priceTextCard}>À vista no PIX</span>
              </div>
            </div>
          </div>
        </Link>
         <Button items={props.items}></Button>
        

      </div>
    </div>

  )
}
