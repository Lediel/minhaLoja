import React, { useContext } from 'react'
import styles from '../../styles/Product.module.css'
import { ItemContext } from '../../context/items';
import Button from '../Button';


export default function Product(props) {

    const { items, cart, setCart, pricePix, setPricePix, cartQuantNum } = useContext(ItemContext)
    


    return (


        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <h1 className={styles.title}>{props.items.name}</h1>

                <div className={styles.main}>
                    <div className={styles.productImages}>

                        <div className={styles.images}>

                            <div className={styles.imagesIcons}>
                                <button className={styles.btnImage}></button>
                                <button className={styles.btnImage}></button>
                                <button className={styles.btnImage}></button>
                                <button className={styles.btnImage}></button>
                                <button className={styles.btnImage}></button>
                            </div>

                            <div className={styles.bigImage}>
                                <img className={styles.mainImage} src={`../assets/images/${props.items.image}`}></img>
                            </div>

                        </div>

                        <div className={styles.cep}>

                            <h3 className={styles.h3}><b>Consultar frete e prazo de entrega</b></h3>
                            <form onSubmit={e => e.preventDefault()} >
                                <input className={styles.input} placeholder='Insira seu CEP' type="text" />
                                <button className={styles.btnCep}>OK</button>
                                <a className={styles.linkCep} href="https://buscacepinter.correios.com.br/app/endereco/index.php?t">Não lembro meu CEP</a>
                            </form>
                        </div>

                    </div>

                    <div className={styles.productPrices}>


                        <div className={styles.otherText}>
                            <p>Vendido e entregue por <b>InfoTech</b> | <b className={styles.inventory}>Em estoque</b></p>
                        </div>

                        <div className={styles.cardPrice}>
                            <div className={styles.divPrice}>
                                <span className={styles.oldPrice}>R$ {props.items.oldPrice}</span>
                                <h1 className={styles.price}>R$ {props.items.price}</h1>
                                <span>À vista no PIX com até <b>15% OFF</b> </span>
                            </div>

                            <div className={styles.divButton}>

                                <div className={styles.buttonSize}>
                                    <Button items={props.items}></Button>
                                </div>

                            </div>
                        </div>

                        <div className={styles.otherText}>
                            <p> <b>R$ 199,88</b><br />
                                Em até 12x de <b>R$ 16,65 sem juros no cartão <br />
                                    Ou em 1x no cartao com até <b>10% OFF</b></b></p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
