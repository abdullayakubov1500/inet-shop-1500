import { NavLink } from 'react-router';
import { Paths } from '../../routes/paths';
import { cartIcon, logoutIcon, menuIcon, productImg, userIcon, userPhoto } from '../../utils';
import s from './user.module.scss'
import CustomBtn from '../UI/CustomBtn/CustomBtn';
import { userStore } from '../../store/userStore';
import UserSkeleton from './UserSkeleton';
const links = [
    {url: Paths.menu, title: 'Меню', icon: menuIcon},
    {url: Paths.cart, title: 'Корзина', icon: cartIcon},
    {url: Paths.profile, title: 'Профиль', icon: userIcon},
]

const User = () => {
    const {logout, user} = userStore()
    const logoutUser = ()=>{
        logout()
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
    }
    let userImg = user?.avatar ? import.meta.env.VITE_IMG_URL + user.avatar : userPhoto
  return (
    <div className={s.user}>
        {
            user ? (
            // false ? (
            <>
                <div className={s.user__info}>
                    <img src={userImg} alt="" className={s.user__img} />
                    <h3 className={s.user__name}>{user?.username}</h3>
                    <p className={s.user__email}>{user?.email}</p>
                </div>
                <ul className={s.user__menu}>
                    {
                        links.map((elem)=>(
                            <li key={elem.url}>
                                <NavLink to={elem.url} className={s.user__link}>
                                    <img src={elem.icon} alt="" />
                                    {elem.title}
                                    {
                                        elem.url == Paths.cart
                                        ?
                                        <span className={s.user__count}>10</span>
                                        :
                                        ''
                                    }
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <CustomBtn
                    text='Выйти'
                    icon={logoutIcon}
                    width={117}
                    onClick={logoutUser}
                />
            </>
            ) :
            <UserSkeleton/>
        }
    </div>
  )
}

export default User