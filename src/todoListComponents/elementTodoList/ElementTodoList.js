import {useState} from 'react'
import css from './ElementTodoList.module.css'



function ElementTodoList({ text, setText }) {

    console.log(text);

    const [edit, setEdit] = useState("");

    const [value, setValue] = useState("");


    function deleteTodo (id){
        let NewText = [...text].filter(x => x.id !== id);
        setText(NewText)
    }

    function openClose(id){
        let NewText = [...text].filter(k => {
            if(k.id === id){
                k.logic = !k.logic
            }
            return k
        })
        setText(NewText)
    }

    function editTodo(id, textInfo){
            setEdit(id)
            setValue(textInfo)  
    }

    function saveTodoEditValue(id){
        let newText = [...text].map(elm => {
            if(elm.id === id){
                elm.textInfo = value
            }
            return elm
        })
        setText(newText)
        setEdit("")
    }

    return (
        <div className={css.main}>
            {
                text.map(elm => (
                    <div key={elm.id} className={css.elementContener}>
                        {
                            edit === elm.id ? 
                                <div>
                                    <input  value={value} onChange={(e)=>setValue(e.target.value)} className={css.saveInpute}/>
                                </div> :
                                <div>{elm.textInfo}</div>
                        }
                        {
                             edit === elm.id ?
                                <div className={css.btnAll} >
                                    <button onClick={()=>saveTodoEditValue(elm.id) }  className={css.btn}>Save</button>
                                </div> :
                                <div className={css.btnAll}>
                                    <button onClick={ () => deleteTodo(elm.id)} >Delete</button>
                                    <button onClick={ () => editTodo(elm.id, elm.textInfo)}  className={css.btn}>Edit</button>
                                    <button onClick={ () => openClose(elm.id)} className={css.btn}>Open/Close</button>
                                </div>
                        }
                       
                    </div>
                ))
            }
        </div>
    )
}

export default ElementTodoList;