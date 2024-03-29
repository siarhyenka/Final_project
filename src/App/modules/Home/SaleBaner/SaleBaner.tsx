import ProductSaleSneakers from '../../../Layout/common/icons/product-sale.png'
import ProductSaleConsole from '../../../Layout/common/icons/product-sale2.png'
import BackgroundSale from '../../../Layout/common/icons/background-sale.png'
import './SaleBaner.css'

export const SaleBaner = () => {
    return <>
                <div className="container">
                    <div className="sale__baner">
                        <div className="left__part">
                            {/* <div className='left__part__title'> */}
                                <h3>NEW YEAR</h3>
                                <h2>SALE</h2>
                            {/* </div> */}
                            <button>See more</button>
                            <img src={ProductSaleSneakers} className='sale1'/>
                            <img src={ProductSaleConsole} className='sale2'/>
                        </div>
                        <div className="right__part">
                            <img src={BackgroundSale} />
                            <p>save up to <span>50%</span> off</p>
                        </div>
                    </div>
                </div>
            </>
}