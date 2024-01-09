// import React from 'react'
import { useEffect } from "react";

// rfc -> shortcut untuk create react functional component

// berisi product hp 

export default function SectionHero() {
    let data = null

    async function getProducts() {
        const endpoint = 'https://dummyjson.com/products';
        const res = await fetch(endpoint);
        const products = await res.json();
        data = products
    }
    // getProducts()

    // mounting
    useEffect(() => {
        console.log("mounting")
        getProducts()
    }, [])


    return (
        <div>
            {
                data !== null
                    ? data.products.map(product => {
                        product.title
                    })
                    : "kosong"
            }
        </div>
    )
}
