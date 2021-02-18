import React from 'react'

const Orders = (props) => {
    const editCoffee = () => {
        props.setCurrentCoffee(props.coffee.id)
    }

    return(
        <div className="card">
            <h4>Order Number - {props.coffee.id}</h4>
            <br/>
            <h5>Size - {props.coffee.size}</h5>
            <br/>
                <h6>{props.coffee.roast} Roast</h6>
                <h6>{props.coffee.cream}</h6>
                <h6>{props.coffee.sugar}</h6>
            

            <button onClick={() => editCoffee()}>Edit Coffee</button>
            <button>Complete Order</button>
        </div>
    )
    
}

export default Orders