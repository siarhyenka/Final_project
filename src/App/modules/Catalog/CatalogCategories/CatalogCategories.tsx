import { useEffect } from "react"
import { store } from "./store/CatalogCategoriesStore"

export const CatalogCategories = () => {
    const { loadCategoties, catalogCategoriesDataState } = store

    useEffect(()=> {
        loadCategoties()
    }, [])

    console.log(catalogCategoriesDataState);
    

    return <h2>CatalogCategories</h2>
}