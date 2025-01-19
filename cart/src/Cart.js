import React from 'react'
import Items from './Items'

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto'
  }
}
const Cart = ({ cart }) => {
  return (
    <div style={styles.grid}>
      {
        cart.map(({ id, count, name, image, price }) => <Items id={id} count={count} name={name} image={image} price={price} />)
      }
    </div>
  )
}

export default Cart