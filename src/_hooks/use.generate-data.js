import {useCallback, useState} from "react";
import {awaitTimeout} from "../utilities/services.js";

const useGenerateData = (delay) => {
    const [requestProducts] = useState([
        {
            "id": 1,
            "name": "Wireless Headphones",
            "category": "Electronics",
            "brand": "Brand A",
            "price": 99.99,
            "rating": 4.5,
            "imageUrl": "https://www.pngplay.com/wp-content/uploads/13/Noise-Cancelling-Headphones-PNG-Photos.png"
        },
        {
            "id": 2,
            "name": "Bluetooth Speaker",
            "category": "Electronics",
            "brand": "Brand B",
            "price": 49.99,
            "rating": 4.0,
            "imageUrl": "https://pngimg.com/uploads/audio_speakers/audio_speakers_PNG11113.png"
        },
        {
            "id": 3,
            "name": "Running Shoes",
            "category": "Footwear",
            "brand": "Brand C",
            "price": 59.99,
            "rating": 4.2,
            "imageUrl": "https://png.pngtree.com/png-vector/20231230/ourmid/pngtree-dropshipping-men-hole-sole-jogging-shoes-png-image_11389148.png"
        },
        {
            "id": 4,
            "name": "Smartphone",
            "category": "Electronics",
            "brand": "Brand D",
            "price": 499.99,
            "rating": 4.8,
            "imageUrl": "https://pngimg.com/d/smartphone_PNG8519.png"
        },
        {
            "id": 5,
            "name": "Leather Jacket",
            "category": "Clothing",
            "brand": "Brand E",
            "price": 199.99,
            "rating": 4.7,
            "imageUrl": "https://pngimg.com/d/jacket_PNG8047.png"
        },
        {
            "id": 6,
            "name": "Leather Jacket",
            "category": "Clothing",
            "brand": "Brand E",
            "price": 199.99,
            "rating": 1.7,
            "imageUrl": "https://pngimg.com/d/jacket_PNG8047.png"
        },
        {
            "id": 7,
            "name": "Leather Jacket",
            "category": "Clothing",
            "brand": "Brand E",
            "price": 199.99,
            "rating": 2.4,
            "imageUrl": "https://pngimg.com/d/jacket_PNG8047.png"
        }
    ])
    const [requestCategories] = useState([
        {id: 1, option: "Electronics"},
        {id: 2, option: "Footwear"},
        {id: 3, option: "Clothing"},
        {id: 4, option: "Entertainment"},
        {id: 5, option: "Beauty"},
        {id: 6, option: "House"},
        {id: 7, option: "Accessories"},
    ])
    const [requestBrands] = useState([
        {id: 1, option: "Brand A"},
        {id: 2, option: "Brand B"},
        {id: 3, option: "Brand C"},
        {id: 4, option: "Brand D"},
        {id: 5, option: "Brand E"},
        {id: 6, option: "Brand F"},
        {id: 7, option: "Brand G"},
    ])

    const callRequestAll = useCallback(async () => {
        await awaitTimeout(delay)
        return {requestProducts, requestCategories, requestBrands}
    }, [delay, requestBrands, requestCategories, requestProducts])

    const callProductsRequest = useCallback(async ({categories, brands, price, rate, sort}) => {
        let filteredData = [...requestProducts]

        if (sort) {
            if (sort.status) {
                filteredData.sort((f, n) => f[sort.name] < n.rating[sort.name]
                    ? -1
                    : f[sort.name] > n[sort.name]
                        ? 1
                        : 0
                )
            } else {
                filteredData.sort((f, n) => f[sort.name] < n[sort.name]
                    ? 1
                    : f[sort.name] > n[sort.name]
                        ? -1
                        : 0
                )
            }
        }

        if (categories?.length) {
            let init = []
            for (let item of filteredData) {
                if (categories.includes(item.category)) {
                    init.push(item)
                }
            }
            filteredData = init
        }

        if (brands?.length) {
            let init = []
            for (let item of filteredData) {
                if (brands.includes(item.brand)) {
                    init.push(item)
                }
            }
            filteredData = init
        }

        if (rate !== null && rate !== undefined) {
            let init = []
            for (let item of filteredData) {
                if (item.rating <= rate) {
                    init.push(item)
                }
            }
            filteredData = init
        }

        if (price?.length === 2) {
            let init = []
            for (let item of filteredData) {
                if (item.price >= price[0] && item.price <= price[1]) {
                    init.push(item)
                }
            }
            filteredData = init
        }


        await awaitTimeout(delay)
        return filteredData
    }, [delay, requestProducts])

    const callCategoriesRequest = useCallback(async () => {
        await awaitTimeout(delay)
        return requestCategories
    }, [delay, requestCategories])


    const callBrandsRequest = useCallback(async () => {
        await awaitTimeout(delay)
        return requestBrands
    }, [delay, requestBrands])


    return {
        callRequestAll,
        callProductsRequest,
        callCategoriesRequest,
        callBrandsRequest
    }
}

export default useGenerateData