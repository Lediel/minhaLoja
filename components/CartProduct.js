import React, { useState, useEffect , useContext } from 'react'
import styles from '../styles/CartProduct.module.css'
import { IoIosArrowBack, IoIosArrowForward, IoMdTrash } from "react-icons/io";

import { ItemContext } from '../context/items';
import Product from './ProductCard';



export default function CartProduct(props) {
    
    

    const { items, cart, setCart, pricePix, setPricePix, setAllProductNum, allProductNum } = useContext(ItemContext)


    const [quant, setQuant] = useState(props.cartQuantNum.num)

    
    

    let preco = Number(props.items.price.replace(',' , '.')) * 100 / 85 
    let precoPix = Number(props.items.price.replace(',' , '.')) 
    let precoPix2 = Number(props.items.price.replace(',' , '.')) * quant

    // const [thisPrice, setThisPrice] = useState(precoPix)



  
    function addQuant() {
        
        props.cartQuantNum.num++
        setQuant(quant + 1)
        setPricePix(pricePix + precoPix)
        setAllProductNum(allProductNum + 1)
    }

    function subQuant() {
       if (quant > 1) {
        props.cartQuantNum.num--
        setQuant(quant - 1)
        setPricePix(pricePix - precoPix)
        setAllProductNum(allProductNum - 1)
       }
        
    }

    function deleteItem() {
        
        let filteredItems = cart.filter(item => item.props.items.id != props.items.id)
        setCart(filteredItems)
        setPricePix(pricePix - precoPix2.toFixed(2))
        setAllProductNum(allProductNum - quant)


        if(cart.length == 1){
            setPricePix(0)
        }  
    }

    

    return (

        <>
           

            <div className={styles.container}>
                <hr />
                <div className={styles.mainContainer}>


                    <div>
                        <img className={styles.icon}
                            src={`assets/images/${props.items.image}`}
                            alt={"props.card.icon"}></img>

                        <div className={styles.info}>
                            <p>{props.items.brand}</p>
                            <span>{props.items.name}</span>
                            <span>
                                <div>Com desconto no PIX: <b>R$ {props.items.price}</b>  </div>
                                <div>Parcelado no cartão em até 12x sem juros: <b>R$ {preco.toFixed(2).replace('.' , ',')}</b> </div>
                            </span>
                        </div>
                    </div>

                    <div className={styles.btn}>
                        <p>Quant:</p>
                        <span>
                            {quant == 1? 
                            <button  style={{color:"Silver", cursor: "default"}} onClick={subQuant}><IoIosArrowBack /></button> 
                            :
                            <button   onClick={subQuant}><IoIosArrowBack /></button> 
                            }
                            
                                {quant}
                            <button onClick={addQuant}><IoIosArrowForward /></button> </span>
                        <button onClick={deleteItem}> <span><IoMdTrash /></span> REMOVER</button>
                    </div>

                    <div className={styles.price}>
                        <span>Preço à vista no PIX:</span>
                        <h3>R$ {precoPix2.toFixed(2).replace('.' , ',')}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
