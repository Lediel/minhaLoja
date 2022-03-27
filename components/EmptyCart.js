import React from 'react'
import styles from '../styles/EmptyCart.module.css'
import Link from 'next/link';

export default function EmptyCart() {
    return (
        <div className={styles.emptyCart}>
            <h1>Seu carrinho esta vazio</h1>
            <Link href={'/'}>
                <button> Continuar comprando</button>
            </Link>
            
            <img src="assets/images/carrinho/carrinho.png" alt="Carrinho de Compras Vazio" />
        </div>
    )
}


