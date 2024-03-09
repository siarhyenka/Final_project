import { useEffect } from "react"
import { store } from "./store/CatalogCategoriesStore"
import { observer } from "mobx-react-lite"
import './CatalogCategories.css'

export const CatalogCategories = () => {
    const { loadCategoties, catalogCategoriesDataState } = store

    useEffect(()=> {
        loadCategoties()
    }, [])

    console.log(catalogCategoriesDataState);
    

    return <>
                <div className="container">
                    <div className="catalog__products">
                        {catalogCategoriesDataState && catalogCategoriesDataState.map((product)=>
                            <div key={product.id} className="catalog__product">
                                <img src={product.image} className="product__img" />
                                <div className="product__title">{product.name}</div>
                            </div>
                        
                        )}
                    </div>
                </div>
                
    
            </>
}