import React, { useContext, useEffect } from 'react'
import { ItemContext } from '../context/items';
import styles from '../styles/Cart.module.css'
import { IoMdTrash } from "react-icons/io";
import { IoBasket } from "react-icons/io5";
import EmptyCart from '../components/EmptyCart';
import Link from 'next/link';



export default function carrinho() {

  const { items, cart, setCart, pricePix, setPricePix, setAllProductNum } = useContext(ItemContext)
  
  let otherPrice = pricePix * 100 / 85
  let parcelas = otherPrice / 12
  let sobra = otherPrice - pricePix


  

  function removeAll() {
    setCart([])
    setPricePix(0)
    setAllProductNum(0)
  }

  return (

    <div className={styles.container}>

      <div className={styles.mainContainer}>
        
        
      {cart.length >=1 && <div>
          <h1><IoBasket/> Produtos</h1>
          <button className={styles.btnRemove} onClick={removeAll}> <IoMdTrash/> REMOVER TODOS OS PRODUTOS</button>
        </div>}

        <div>
          {cart.length >= 1 ? cart : <EmptyCart></EmptyCart>}         
        </div>
      </div>

      {cart.length >=1 && <div className={styles.resume}>

        <h1>RESUMO</h1>
        <div>Valor dos Produtos:</div>
        <hr />

        <div className={styles.price}>

          <div className={styles.price1}>
            Frete:
            <b>R$ 0,00</b>
          </div>

          <div className={styles.total}>
            <div>
              <span>Total à prazo: </span> <b>R$ {otherPrice.toFixed(2).replace('.' , ',')}</b>
               

            </div>

            <div className={styles.parcelas}>
              <p>(em até <b>12x</b> de <b>R$ {parcelas.toFixed(2).replace('.' , ',')} sem juros</b>)</p>
            </div>
          </div>

        </div>


        <div className={styles.pix}>
          <h4>Valor no <b>PIX</b></h4>
          <div>
            <h1><b>R$ {pricePix.toFixed(2).replace('.' , ',')}</b></h1>
            <h5>Economize: <b>(R$ {sobra.toFixed(2).replace('.' , ',')})</b></h5>
          </div>
        </div>

        <button onClick={()=>console.log(pricePix)} className={styles.btnPagamento}>IR PARA O PAGAMENTO</button>
        <Link href={"/"}>
        <button className={styles.btnVoltar}>CONTINUAR COMPRANDO</button>
        </Link>
      </div>}
    </div>
  )
}
