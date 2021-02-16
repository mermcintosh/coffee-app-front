const Customer = () => {
    return(
        <div>
        <h1>Create your perfect beverage below!</h1>

        <form>
        <table>
            <tr>
                <th>Size</th>
                <th>Roast</th>
                <th>Cream</th>
                <th>Sugar</th>
            </tr>

            <tr>
                <td>
                    <select>
                         <option value="small">Small</option>
                         <option value="medium">Medium</option>
                         <option value="large">Large</option>
                         <option value="extra large">Extra Large</option>  
                    </select>
                </td>
                <td>
                    <select>
                         <option value="light">Light</option>
                         <option value="medium">Medium</option>
                         <option value="medium dark">Medium Dark</option>
                         <option value="dark">Dark</option>
                         <option value="decaf">Decaf</option>
                    </select>
                </td>
                <td>
                    <select>
                         <option value="no cream">No Cream</option>
                         <option value="light cream">Light Cream</option>
                         <option value="medium cream">Medium Cream</option>
                         <option value="heavy cream">Heavy Cream</option>
                    </select>
                </td>
                <td>
                    <select>
                         <option value="no sugar">No Sugar</option>
                         <option value="light sugar">Light Sugar</option>
                         <option value="medium sugar">Medium Sugar</option>
                         <option value="heavy sugar">Heavy Sugar</option>
                    </select>
                </td>
                <button>Add Drink</button>
            </tr>
        </table>
        </form>
        </div>
    )
}

export default Customer