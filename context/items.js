import React, { createContext, useState } from 'react'


export const ItemContext = createContext()

export default function ItemProvider({ children }) {

  const items = [

    {
      id: 1,
      image: "mouse-gamer-redragon.jpg",
      name: "Mouse Gamer Redragon King Cobra 2, RGB Chroma, 24000DPI, Sensor Óptico, USB, Preto - M711-FPS-1ular",
      oldPrice: "312,02",
      price: "169,90",
      brand: "Redragon",
    },

    {
      id: 2,
      image: "headphone-bluetooth-sennheise.jpg",
      name: "Fone de Ouvido Sem Fio Sennheiser HD 250BT, Bluetooth 5.0, com Microfone, Preto - 509179",
      oldPrice: "514,90",
      price: "259,90",
      brand: "Sennheiser",
    },

    {
      id: 3,
      image: "smartphone-tectoy-on-128gb.jpg",
      name: "Smartphone Tectoy On, 128GB, RAM 4GB, Octa-Core, Câmera Tripla 48MP, Azul Camaleão, Fone de Ouvido Bluetooth + Película e Capa Protetora",
      oldPrice: "1051,58",
      price: "799,00",
      brand: "Tectoy",
    },

    {
      id: 4,
      image: "mousepad-gamer-husky-black-avalanche.jpg",
      name: "Mousepad Gamer Husky Black Avalanche, Speed, Extra Grande (890x400mm) - MP-HAV-BK",
      oldPrice: "105,76",
      price: "49,90",
      brand: "Husky",
    },

    {
      id: 5,
      image: "fone-de-ouvido-bluetooth-edifier.jpg",
      name: "Fone de Ouvido Bluetooth Edifier TWS X3, Recarregável, Resistente a Água, Preto",
      oldPrice: "209,90",
      price: "189,90",
      brand: "Edifier",
    },

    {
      id: 6,
      image: "teclado-mecanico-gamer-t-dagger.jpg",
      name: "Teclado Mecânico Gamer T-Dagger Bora, RGB, Switch Outemu Blue, ABNT2 - T-TGK315-BLUE",
      oldPrice: "352,82",
      price: "189,90",
      brand: "T-Dagger",
    },

    {
      id: 7,
      image: "webcam-logitech-c270-hd.jpg",
      name: "Webcam HD Logitech C270, 720p, 30 FPS, Microfone Integrado, USB 2.0 - 960-000694",
      oldPrice: "352,82",
      price: "179,90",
      brand: "Logitech",
    },

    {
      id: 8,
      image: "pendrive.jpg",
      name: "Pen Drive Multilaser Twist, USB 2.0, 16GB, Preto e Prata - PD588",
      oldPrice: "26,94",
      price: "19,90",
      brand: "Multilaser",
    }
  ]

  const cartQuantNum = {num: 1}


  const [cart, setCart] = useState([])
  const [pricePix, setPricePix] = useState(0)
  const [allProductNum, setAllProductNum] = useState(0)

  return (<ItemContext.Provider value={
    { items, cart, setCart, pricePix, setPricePix, cartQuantNum, allProductNum, setAllProductNum }

  }>{children}</ItemContext.Provider>
  )
}
