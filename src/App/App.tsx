import { Route, Routes } from "react-router-dom"
import { Layout } from "./Layout"
import { Home } from "./modules/Home"
import { Catalog } from "./modules/Catalog"
import { Contacts } from "./modules/Contacts"


export const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/Catalog/*" element={<Catalog />} />
                    <Route path="/Contacts" element={<Contacts />} />
                </Route>
            </Routes>
        </>
    )
}