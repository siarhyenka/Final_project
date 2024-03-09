import { NavLink, Outlet } from "react-router-dom"
import './Layout.css'
import ReactComponent  from './common/icons/cart.svg'
import Logo from './common/icons/logo.svg'
import Like from './common/icons/like.svg'
import Glass from './common/icons/glass.svg'
import { observer } from "mobx-react-lite"


export const Layout = observer(() => {
    return <>
                <header className="header">
                    <div className="container">
                        <div className="nav__panel">
                            <div className="logo">
                                <img src={Logo}/>
                            </div>
                            <nav className="nav">
                                <ul className="nav__items">
                                    <li className="nav__item"><NavLink to='/Home'>Home</NavLink></li>
                                    <li className="nav__item"><NavLink to='/Catalog'>Catalog</NavLink></li>
                                    <li className="nav__item"><NavLink to='/Contacts'>Contacts</NavLink></li>
                                </ul>
                            </nav>
                            <form className="form">
                                <input className="form__input" type="text" placeholder="искать товар..." />
                                <button type="submit" className="form__btn">
                                    <img src={ Glass }/>
                                </button>
                            </form>

                            <div className="like">
                                <button className="like__btn">
                                    <img src={Like} alt="Like" />
                                </button>
                            </div>

                            <div className="cart">
                                <button className="cart__btn">
                                    <img src={ReactComponent} alt="Cart" />
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </header>
                <main className="main">
                    <Outlet />  
                </main>

                <footer className="footer">
                    <div className="container">
                        2024
                    </div>
                </footer>

            </>
})