const data = [
    {id: 1, customer_name: "Chris", staff_name: "Jerry", coffee: {size: "small", sugar: "light", cream: "light", roast: "dark"}},
    {id: 2, customer_name: "Meredith", staff_name: "Jerry", coffee: {size: "small", sugar: "light", cream: "light", roast: "dark"}}
]

const Orders = () => {
    return(
        <div>
            {data.map(order => {
                return(
                    <div>
                        {order.id} - {order.customer_name}
                    </div>
                )
            })}
        </div>
    )
}

export default Orders