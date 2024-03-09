import { NavLink } from "react-router-dom"
import './Sidebar.css'
import { store } from "../../../Catalog/CatalogCategories/store/CatalogCategoriesStore"
import { useEffect } from "react"
import { observer } from "mobx-react-lite"

export const Sidebar = observer(() => {
    const { loadCategoties, catalogCategoriesDataState } = store

    useEffect(()=> {
        loadCategoties()
    }, [])

    return <>
        <div className="sidebar">
            <div className="title__sidebar">Categories</div>
            <nav>
                <ul className="sidebar__items">
                {catalogCategoriesDataState && catalogCategoriesDataState.map((product)=>
                            <li className="sidebar__item" key={product.id}>
                                <NavLink to={""}>{product.name}</NavLink>
                            </li>
                        
                        )}
                    
                </ul>
            </nav>
        </div>
    </>
})