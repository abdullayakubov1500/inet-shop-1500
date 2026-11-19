import type { FC } from 'react'
import { basketIcon, starIcon } from '../../utils'
import s from './products.module.scss'
import type { IProduct } from '../../types'
import { Link } from 'react-router'
import { Paths } from '../../routes/paths'

const ProductsItem: FC<IProduct> = ({image, price, rating, title, description, id}) => {
  return (
    <div className={s.products__item}>
        <Link to={Paths.product + `/${id}`}>
            <img src={image} alt="" className={s.products__img} />
        </Link>
        <p className={s.products__price}>
            {price} <span>₽</span>
        </p>
        <button className={s.products__btn}>
            <img src={basketIcon} alt="" />
        </button>
        <p className={s.products__rating}>
            {rating}
            <img src={starIcon} alt="" />
        </p>
        <h3 className={s.products__name}>{title}</h3>
        <p className={s.products__desc}>{description}</p>
    </div>
  )
}

export default ProductsItem