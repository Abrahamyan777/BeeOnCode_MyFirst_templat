import css from './header.module.css'
import HeaderMenu from '../headerMenu/headerMenu';
import Registration from '../registration/registration';



function Header() {

    let obj = {};

    function A() { return obj; }
    function B() { return obj; }

    console.log(new A() == new B());
    let x = {
    }
    let y = {
    }
    console.log(x == y);


    return (
        <>
            <div className={css.header}>
                <div>Logo</div>
                <HeaderMenu />
                <Registration />
            </div>
        </>
    )
}

export default Header; 