
const data = [
    {
        brand: 'Samsung',
        model: 'S24',
        price: 550,
    },
    {
        brand: 'Samsung',
        model: 'S26 Ultra',
        price: 1890,
    },
    {
        brand: 'iPhone',
        model: '13 Pro',
        price: 700,
    },
    {
        brand: 'iPhone',
        model: 'SE',
        price: 380,
    }
]
//                 0            1               2

function Shop () {
    return (
        <>
            <h1>Shop</h1>
            <ul>
                {
                    data.map( ({brand, model, price}) => {
                       
                        return (
                            <>
                                <li> {brand} {model}: {price}$ </li>
                            </>
                        )
                    } )
                }
                {/* <li> {data[0]} </li>
                <li> {data[1]} </li>
                <li> {data[2]} </li> */}
            </ul>
        </>
    )
}

export default Shop