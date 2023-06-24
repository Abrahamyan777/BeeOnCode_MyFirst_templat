import css from './hidenLogin.module.css'
import Input from '../input/input';
import Button from '../button/button';
import svg from '../../imges/img.svg'
import React, {useState} from 'react';


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
            <Button text='Регистрация'/> 
        </form>
    )
}

export default Hidenlogin;