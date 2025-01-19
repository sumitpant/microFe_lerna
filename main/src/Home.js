import React from 'react'
import Card from './Card'

const items = [
    {
        id: 0,
        name: "Product1",
        price: 10,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        id: 1,
        name: "Product2",
        price: 20,
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"

    },
    {
        id: 2,
        name: "Product3",
        price: 30,
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    }
]

const Home = ({ add }) => {
    function addToCart(id, name, price, image) {
        add(id, name, price, image)
    }
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }} >
            {items.map(({ id, name, price, image }) => <Card name={name} price={price} image={image} key={id} addProduct={addToCart} id={id} />)}
        </div>
    )
}

export default Home