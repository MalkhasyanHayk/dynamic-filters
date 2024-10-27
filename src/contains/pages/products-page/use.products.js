import useForms from "../../../_hooks/use.forms.js";
import {useCallback, useEffect, useState} from "react";
import useGenerateData from "../../../_hooks/use.generate-data.js";
import {Storage} from "../../../utilities/utilities.js";
import {awaitTimeout} from "../../../utilities/services.js";

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * *   --- This is implemented without Redux And API integration, but with Redux and API integration the code would be cleaner ---   * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

const initialFilters = JSON?.parse(Storage?.get("filters")) ?? {
    categories: [],
    brands: [],
    price: [0, 10000],
    rate: 5,
    sortByPrice: true,
    sortByRating: true,
    sort: {
        name: "sortByPrice",
        status: true
    }
}

const useProducts = () => {
    const [progress, setProgress] = useState(true)
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [brands, setBrands] = useState([])


    // This is a simulated API request. The default delay is 0 seconds.
    const {callRequestAll, callProductsRequest, callCategoriesRequest, callBrandsRequest} = useGenerateData(0)


    const {values, onField, onCheckbox} = useForms({
        initial: {...initialFilters},
        callBackEvent: async values => {
            Storage.set("filters", JSON.stringify(values))
            const data = await callProductsRequest(values)
            setProducts(data)
        }
    })

    useEffect(() => {
        async function getProducts() {
            const storageFilters = Storage.get("filters")
            if (storageFilters) {
                const productsData = await callProductsRequest(initialFilters)
                setProducts(productsData)

                const categoriesData = await callCategoriesRequest()
                setCategories(categoriesData)

                const brandsData = await callBrandsRequest()
                setBrands(brandsData)
            } else {
                const {requestProducts, requestCategories, requestBrands} = await callRequestAll()
                setProducts(requestProducts)
                setCategories(requestCategories)
                setBrands(requestBrands)
            }
            await awaitTimeout(1600)
            setProgress(false)
        }

        getProducts().then(r => {
            // Error handling imitation
            if (r) {
                console.log("r", r)
            }
        })
    }, [callBrandsRequest, callCategoriesRequest, callProductsRequest, callRequestAll]);

    const handleListed = useCallback(event => {
        const {name, value, checked} = event.target
        const copied = {...values}
        const copySection = [...copied[name]]

        if (checked) {
            copySection.push(value)
        } else {
            copySection.splice(copySection.indexOf(value), 1)
        }

        onField(name, copySection)
    }, [onField, values])

    return {
        progress,

        products,
        categories,
        brands,

        values,
        onField,
        onCheckbox,
        handleListed,
    }
}

export default useProducts