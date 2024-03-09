import { BoxSidebar } from "./BoxSidebar"
import { IntProducts } from "./IntProducts"
import { LowPrice } from "./LowPrice"
import { SaleBaner } from "./SaleBaner"
import { Trending } from "./Trending"

export const Home = () => {
    return <>
                <BoxSidebar />

                <Trending /> 

                <IntProducts />

                <SaleBaner />

                <LowPrice />
            </>
}