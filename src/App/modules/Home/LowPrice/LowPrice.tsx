import Product from '../../../Layout/common/icons/product.png'
import './LowPrice.css'

export const LowPrice = () => {
    return <>
                <div className="container">
                    <div className='container__low__price'>
                    <h2 className="low__price__title">Trending</h2>


                        <div className="low__price__carousel">
                            <div className="low__price__carousel__item">
                                <img src={Product} />
                                <h3>Nike ZoomX 2023</h3>
                                <p className='low__price__text'>Sneakers</p>
                                <div className='low__price'>
                                    <div className='price__item'>
                                        <p className='color'>99$</p>
                                        <p className='full__price'>79$</p>
                                    </div>
                                    <p className='purchase'>19 people purchased</p>
                                </div>
                            </div>
                          

                        
                            <div className="low__price__carousel__item">
                                <img src={Product} />
                                <h3>Nike ZoomX 2023</h3>
                                <p className='low__price__text'>Sneakers</p>
                                <div className='low__price'>
                                    <div className='price__item'>
                                        <p className='color'>99$</p>
                                        <p className='full__price'>79$</p>
                                    </div>
                                    <p className='purchase'>19 people purchased</p>
                                </div>
                            </div>
                          

                        
                            <div className="low__price__carousel__item">
                                <img src={Product} />
                                <h3>Nike ZoomX 2023</h3>
                                <p className='low__price__text'>Sneakers</p>
                                <div className='low__price'>
                                    <div className='price__item'>
                                        <p className='color'>99$</p>
                                        <p className='full__price'>79$</p>
                                    </div>
                                    <p className='purchase'>19 people purchased</p>
                                </div>
                            </div>
                         

                        
                            <div className="low__price__carousel__item">
                                <img src={Product} />
                                <h3>Nike ZoomX 2023</h3>
                                <p className='low__price__text'>Sneakers</p>
                                <div className='low__price'>
                                    <div className='price__item'>
                                        <p className='color'>99$</p>
                                        <p className='full__price'>79$</p>
                                    </div>
                                    <p className='purchase'>19 people purchased</p>
                                </div>
                            </div>
                        </div> 
                        <div className='leveling__btn'>
                            <button className="trending__btn">See more</button>
                        </div>
                    </div> 
                </div>
            </>
}