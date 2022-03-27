
import styles from '../styles/Home.module.css'
import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { ItemContext } from '../context/items';



export default function Home() {

  const { items } = useContext(ItemContext)

  return (
    <div>
      <div className={styles.productsArea}>
        <div className={styles.products}>
          {items.map((item, index) => <ProductCard key={index} items={item}></ProductCard>)}
        </div>
      </div>
    </div>
  )
}
