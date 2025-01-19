import React from 'react'

const Card = ({ id,name, price, image,addProduct}) => {
    return (
        <div style={{ height: "40vh", width: "35vh", border: '1px solid grey', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
            {name}
            <img src={image} alt={name} style={{ objectFit: 'contain', height: '60%', width: '100%' }} />
            <div
            onClick={()=>addProduct(id,name ,price ,image)}
                role='button'
                style={{ background: 'green', width: '150px', height: '40px', color: 'white', borderRadius: '8px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <span>{price}</span>
            </div>
        </div>
    )
}

export default Card