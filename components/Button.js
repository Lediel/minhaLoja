import React, { useContext, useEffect } from 'react'
import { ItemContext } from '../context/items';
import styles from '../styles/Button.module.css'
import { FaShoppingCart } from "react-icons/fa";
import CartProduct from './CartProduct';

export default function Button(props) {

  const { items, cart, setCart, pricePix, setPricePix, cartQuantNum, setAllProductNum, allProductNum } = useContext(ItemContext)

  let itemFiltrado = cart.filter(item => props.items.id == item.props.items.id)

  function addItem() {
    console.log(props.items)
    // let preco = Number(props.items.price.replace(',' , '.')) * 100 / 85 

    let precoPix = Number(props.items.price.replace(',', '.'))
    setAllProductNum(allProductNum + 1)
    console.log(allProductNum.num)

    if (itemFiltrado.length == 0) {

      setCart([...cart, <CartProduct cartQuantNum={cartQuantNum} key={props.items.id} items={props.items}></CartProduct>])
      setPricePix(pricePix + precoPix)

    } else {
      itemFiltrado[0].props.cartQuantNum.num++
      setPricePix(pricePix + precoPix)
    }
  }

  return (
    <>
      {itemFiltrado.length == 0 ?
        <button onClick={addItem} className={styles.button}>  <FaShoppingCart className={styles.cartImg} />Comprar</button>
        :
        <button onClick={addItem} className={styles.onButton}>Adicionado ao Carrinho: {itemFiltrado[0].props.cartQuantNum.num}</button>
      }
    </>
  )
}
