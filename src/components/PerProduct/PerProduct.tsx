import { Link, useParams } from 'react-router'
import s from './per-product.module.scss'
import { Paths } from '../../routes/paths'
import CustomBtn from '../UI/CustomBtn/CustomBtn'
import { basketIcon, cartIcon, productImg, starIcon } from '../../utils'
import { useGetPerProduct } from '../../services/products'

const PerProduct = () => {
    const {id} = useParams();
    const {data} = useGetPerProduct(id)
    console.log(data);
    
  return (
    <div className={s.product}>
        <div className={s.product__nav}>
            <Link to={Paths.menu} className={s.product__back}>{'<'}</Link>
            <h2 className={s.product__title}>Наслаждение</h2>
            <CustomBtn text='В корзину' width={143} icon={basketIcon}/>
        </div>
        <div className={s.product__content}>
            <img src={productImg} alt="" className={s.product__img} />
            <div className={s.product__info}>
                <div className={s.product__card}>
                    <h3>Цена</h3>
                    <p>300 <span>₽</span></p>
                </div>
                <div className={s.product__card}>
                    <h3>Рейтинг</h3>
                    <div>4.5 <img src={starIcon} alt="" /></div>
                </div>
                <p className={s.product__desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quos necessitatibus quia atque voluptatibus ullam doloremque sit asperiores inventore libero!</p>
            </div>
        </div>
    </div>
  )
}

export default PerProduct