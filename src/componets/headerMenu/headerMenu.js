import css from './headerMenu.module.css'
import {NavLink} from "react-router-dom";


function HeaderMenu (){
    return (
        <ul className={css.list}>
            <li>
                <NavLink to="/">
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink to="scrollbar">
                    ScrollBar
                </NavLink>
            </li>
            <li>
                <NavLink to="CONTACTS">
                    CONTACTS
                </NavLink>
            </li>
            <li>
                <NavLink to="ContactForm">
                    Form
                </NavLink>
            </li> 
            <li>
                <NavLink to="PORTFOLIO">
                    PORTFOLIO
                </NavLink>
            </li>
            <li>
                <NavLink to="TodoList">
                    Todo List
                </NavLink>
            </li>
            <li>
                <NavLink to="Post">
                    Posts
                </NavLink>
            </li>
        </ul>
    )
}

export default HeaderMenu ;