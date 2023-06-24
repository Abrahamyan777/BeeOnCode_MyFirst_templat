import css from './header.module.css'
import HeaderMenu from '../headerMenu/headerMenu';
import Registration from '../registration/registration';



function Header() {
    return (
        <>
        <div className={css.header}>
            <div>Logo</div>
            <HeaderMenu/>
            <Registration/>   
        </div>
        </>
    )
}

export default Header; 