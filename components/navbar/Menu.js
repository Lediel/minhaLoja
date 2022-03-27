import React, {useContext, useEffect} from "react";
import styles from '../../styles/Navbar.module.css'
import Link from 'next/link';
import { FaShoppingCart } from "react-icons/fa";
import { ItemContext } from '../../context/items';

function Menu(props){
    const {cart, allProductNum} = useContext(ItemContext)

    
    return(
        <ul className={styles.lista}>
            
            <Link href={'/carrinho'}><li><FaShoppingCart/></li></Link>
            {allProductNum > 0 && <div className={styles.cartNumber}>{allProductNum}</div>}
            
            
           
           {/* <li><Link>Login</Link></li> */}
        </ul>)
    
}

export default Menu