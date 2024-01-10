import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";

export default function Products() {
    // let data = null
    const [data, setData] = useState(null)

    async function getProducts() {
        const endpoint = 'https://dummyjson.com/products';
        const res = await fetch(endpoint);
        const products = await res.json();
        // data = products
        setData(products)
    }
    // getProducts()

    // mounting
    useEffect(() => {
        console.log("mounting")
        getProducts()
    }, [])
    return (
        <div className="grid grid-cols-4 gap-10">
            {
                data !== null
                    ? data.products.map((product) => {
                        return <CardProduct key={product.id} data={product} />
                    })
                    : "kosong"
            }
        </div>
    )
}
