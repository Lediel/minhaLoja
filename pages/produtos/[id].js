import React, { useContext } from 'react';
import { useRouter } from 'next/router'
import Product from '../../components/productPage/Product'
import { ItemContext } from '../../context/items';





export async function getStaticPaths() {

  return{
    paths: [{
      params:{
        id:"1"
      }
    },{
      params:{
        id: '2'
      }
    }],
    fallback: 'blocking'
  }  
}

export async function getStaticProps(context) {
  const id = context.params.id 
  return {
    props:{
      id: id
    }
  }
}


export default function Produtos(props) {



  const { items } = useContext(ItemContext)

      
    const item = items.filter((atual)=>{
        
        return atual.name.includes(props.id)
    })

  return (
    <div>        
        <Product items={item[0]}></Product>  
    </div>
  )
}
