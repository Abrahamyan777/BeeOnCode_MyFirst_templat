import css from './hidenLogin.module.css'
import Input from '../input/input';
// import Button from '../button/button';
import svg from '../../imges/img.svg'
import React, {useState} from 'react';
import Button from '../../common/button/Button';


function Hidenlogin (){

    const [open , setOpen] = useState(false)

    function OpenLogin () {
        setOpen(!open)
    }

    return (
        <form className={open ? css.shownForm : css.hidenLogin}>

            <img className={open ? css.imgesO : css.imgesC} src={svg} onClick={OpenLogin} alt='' />
            <h3 className={css.reg}>Регистрация</h3>
            <Input type = "text" placeholder="Имя"/>
            <Input type = "text" placeholder="Фамилия"/>
            <Input type = "text" placeholder="Номер мобильного телефона"/>
            <Input type = "text" placeholder=" эл. адрес"/>
            <Button width="200px" height='50px'>Регистрация</Button>
        </form>
    )
}

export default Hidenlogin;