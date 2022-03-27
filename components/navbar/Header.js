import React from "react";
import Menu from "./Menu";
import styles from '../../styles/Navbar.module.css'
import Link from 'next/link';

function Header(props){
    return (
    
    <header className={styles.header}>
        <div className={styles.navbar}>

        <Link href={'/'}>
         <h1 className={styles.logo}>Info<b>Tech</b></h1>
        </Link>

        <Menu links={props.links}></Menu>

        </div>

    </header>
   
)
}



export default Header