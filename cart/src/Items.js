import React from 'react'

const styles={
    container:{
        display:'flex',
        gap:'0.5em',
        alignItems:'center',
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        width: 'fit-content',
        padding: '10px'

    },
    image:{
        width:'50px',
        height:'50px',
        objectFit:'contain',
        border:'1px solid black'
    }
}

const Items = ({ id, count, name, image ,price}) => {

    return (
        <div style={styles.container}>
       
            <div>
                <img src={image} alt={name}  style={styles.image}/>
            </div>
            <span>{name}</span>
            <span>{count}</span>
            <span>Total :  {count * price}</span>
            <button >Remove</button>
        </div>
    )
}

export default Items