import { Baner } from "./Baner"
import { Sidebar } from "./Sidebar"


export const BoxSidebar = () => {
    return <>
                <div className="container">
                    <div className="box__sidebar">
                        <div className="menu">
                                <Sidebar />
                        </div>
                        <Baner />     
                    </div>    
                </div>  

            </>
}