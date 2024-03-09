import { makeAutoObservable } from "mobx";
import { CategoriesData } from "../../models/CategoriesData";

class CatalogListStore {

    catalogCategoriesDataState: CategoriesData[] | undefined = undefined

    constructor() {
        makeAutoObservable(this)
    }


    loadCategoties = async () => {
        try {
            const response = await fetch ('https://api.escuelajs.co/api/v1/categories')
            if (response.status === 200 ){
                const data: CategoriesData[] = await response.json()
                this.catalogCategoriesDataState = data
                
            }
        }
        catch(error) {
            console.log('error')
        }
    }

}
export const store = new CatalogListStore()