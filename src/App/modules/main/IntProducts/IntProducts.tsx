import intproduct from '../../../Layout/common/icons/intproduct.png'
import './IntProducts.css'

export const IntProducts = () => {
    return <>
                <div className="container">
                    <div className="interesting__products">
                        <h2>Worth seeing</h2>

                        <div className='interesting__products__items'>
                            <div className="interesting__product">
                                <img src={intproduct} />
                                <p>Sneakers</p>
                            </div>
                            <div className="interesting__product">
                                <img src={intproduct} />
                                <p>Sneakers</p>
                            </div>
                            <div className="interesting__product">
                                <img src={intproduct} />
                                <p>Sneakers</p>
                            </div>
                            <div className="interesting__product">
                                <img src={intproduct} />
                                <p>Sneakers</p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
    </>
}