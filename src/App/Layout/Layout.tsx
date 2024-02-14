import { NavLink } from "react-router-dom"
import './Layout.css'
import ReactComponent  from './common/icons/icon-cart.svg'

export const Layout = () => {
    return <>
                <header className="header">
                    <div className="container">
                        <div className="nav__panel">
                            <nav className="nav">
                                <ul className="nav__items">
                                    <li className="nav__item"><NavLink to={'/'}>Home</NavLink></li>
                                    <li className="nav__item"><NavLink to={'/Catalog'}>Catalog</NavLink></li>
                                    <li className="nav__item"><NavLink to={'/Posts'}>Posts</NavLink></li>
                                    <li className="nav__item"><NavLink to={'/Contacts'}>Contacts</NavLink></li>
                                </ul>
                            </nav>
                            <form className="form">
                                <input type="text" placeholder="искать товар" />
                                <button>Найти</button>
                            </form>
                            <div>
                                <button>
                                    <img src={ReactComponent} alt="" />
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </header>
                <main className="main">Main</main>
                <footer className="footer">2024</footer>

            </>
}