import { NavLink } from "react-router-dom"
import './Layout.css'
import ReactComponent  from './common/icons/cart.svg'
import Logo from './common/icons/logo.svg'
import Like from './common/icons/like.svg'
import Glass from './common/icons/glass.svg'
import Baner from './common/icons/computer.png'
import { Sidebar } from "../modules/main/Sidebar"
import { Trending } from "../modules/main/Trending"
import { IntProducts } from "../modules/main/IntProducts"
import { SaleBaner } from "../modules/main/SaleBaner"

export const Layout = () => {
    return <>
                <header className="header">
                    <div className="container">
                        <div className="nav__panel">
                            <div className="logo">
                                <img src={Logo}/>
                            </div>
                            <nav className="nav">
                                <ul className="nav__items">
                                    <li className="nav__item"><NavLink to='/'>Home</NavLink></li>
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
                    <div className="container">
                        <div className="box__sidebar">
                            <div className="menu">
                                <Sidebar />
                            </div>
                            <div className="baner">
                                <div className="baner__title">
                                    <h2>BIG SALE 20%</h2>
                                </div>
                                <div className="baner__content">
                                    <h3>the bestseller of 2022 </h3>
                                    <h1>LENNON r2d2 with NVIDIA 5090 TI</h1>
                                    <button className="baner__btn">Shop Now</button>
                                </div>
                                <div className="baner__img">
                                   <img src={Baner} />
                                </div>

                                
                            </div>
                        </div>
                        
                    </div>  

                    <Trending /> 

                    <IntProducts />

                    <SaleBaner />
                </main>

                <footer className="footer">
                    <div className="container">
                        2024
                    </div>
                </footer>

            </>
}