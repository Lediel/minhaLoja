import React from 'react'
import Header from './navbar/Header'

export default function ({children}) {
  return (
      <>
      <Header nome="Logo" links={["Carrinho", "Login"]}></Header>
      <div>{children}</div>
      </>
    
  )
}
