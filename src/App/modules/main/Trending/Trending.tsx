import Product from '../../../Layout/common/icons/product.png'
import './Trending.css'

export const Trending = () => {
    return <>
        <div className="container">
            <div className='container__trending'>
                <h2 className="trending__title">Trending</h2>


                <div className="trending__carousel">
                    <div className="trending__carousel__item">
                        <img src={Product} />
                        <h3>Nike ZoomX 2023</h3>
                        <p className='carousel__text'>Sneakers</p>
                        <div className='price'>
                            <div className='price__item'>
                                <p className='color'>99$</p>
                                <p className='full__price'>79$</p>
                            </div>
                            <p className='purchase'>19 people purchased</p>
                        </div>
                    </div>

                    <div className="trending__carousel__item">
                        <img src={Product} />
                        <h3>Nike ZoomX 2023</h3>
                        <p className='carousel__text'>Sneakers</p>
                        <div className='price'>
                            <div className='price__item'>
                                <p className='color'>99$</p>
                                <p className='full__price'>79$</p>
                            </div>
                            <p className='purchase'>19 people purchased</p>
                        </div>
                    </div>

                    <div className="trending__carousel__item">
                        <img src={Product} />
                        <h3>Nike ZoomX 2023</h3>
                        <p className='carousel__text'>Sneakers</p>
                        <div className='price'>
                            <div className='price__item'>
                                <p className='color'>99$</p>
                                <p className='full__price'>79$</p>
                            </div>
                            <p className='purchase'>19 people purchased</p>
                        </div>
                    </div>

                    <div className="trending__carousel__item">
                        <img src={Product} />
                        <h3>Nike ZoomX 2023</h3>
                        <p className='carousel__text'>Sneakers</p>
                        <div className='price'>
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