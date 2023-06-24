import css from './TodoList.module.css'
import HeaderTodo from '../../todoListComponents/Header/HeaderTodo';
import AddTodoList from '../../todoListComponents/addTodoList/AddTodoList';
import ElementTodoList from '../../todoListComponents/elementTodoList/ElementTodoList';

function TodoList({text, setText}) {

    
    return (

        <div className={css.wrapper}>
            <HeaderTodo />
            <AddTodoList text={text} setText={setText}/>
            <ElementTodoList  text={text} setText={setText} />
        </div>
    )
}

export default TodoList;