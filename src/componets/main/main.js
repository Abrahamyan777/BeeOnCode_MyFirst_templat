import css from './main.module.css'
import {Route, Routes} from 'react-router-dom'
import Home  from '../../pag/home/home';
import Contacts from '../../pag/contacts/contacts';
import Portfolio from '../../pag/portfolio/portfolio';
import TodoList from '../../pag/TodoList/TodoList';
import Posts from '../../pag/Post/Post';
import Scrollbar from '../../pag/Scrollbar/Scrollbar';
import Hidenlogin from '../hidenLogin/hidenLogin';
import ContactForm from '../../pag/form/ContactForm';


function Main ({text, setText}) {
    
    return (
        <div className={css.main}>
            <Hidenlogin />
        <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/scrollbar" element={<Scrollbar />}/>
                <Route path="/CONTACTS" element={<Contacts />}/>
                <Route path="/ContactForm" element={<ContactForm />}/>
                <Route path="/PORTFOLIO" element={<Portfolio />}/>
                <Route path="/TodoList" element={<TodoList text={text} setText={setText}/>}/>
                <Route path="/Post" element={<Posts />} />
            </Routes>
        </div>
    )
}

export default Main;