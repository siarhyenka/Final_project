import { Route, Routes } from "react-router-dom"
import { CatalogCategories } from "./CatalogCategories"

export const Catalog = () => {
    return <>
                <Routes>
                    <Route index element={<CatalogCategories />} />
                </Routes>
           </>
}