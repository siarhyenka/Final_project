import { NavLink } from "react-router-dom"
import './Sidebar.css'

export const Sidebar = () => {
    return <>
        <div className="sidebar">
            <div className="title__sidebar">Categories</div>
            <nav>
                <ul className="sidebar__items">
                    <li className="sidebar__item">
                        <NavLink to={""}>Link</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </>
}