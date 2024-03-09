import BanerComputer from '../../../../Layout/common/icons/computer.png'

export const Baner = () => {
    return <>
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
                       <img src={BanerComputer} />
                    </div>   
                </div>
            </>
}