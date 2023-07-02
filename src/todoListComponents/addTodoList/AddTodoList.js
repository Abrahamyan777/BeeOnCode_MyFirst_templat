import {useState} from 'react'
import css from './AddTodoList.module.css'
import {v4 as uuidv4} from 'uuid'




function AddTodoList ({text, setText}) {

    const [saveInput, setSaveInput] = useState("");


    function saveNewTodoList(){
        if(saveInput !== ""){
            setText([
                ...text,
                {
                    id: uuidv4(),
                    textInfo: saveInput,
                    logic: false
                }
            ])
            setSaveInput("")
        }
    }

    return (
        <div className={css.addTodoListContener}>
            <div className={css.addTodoFlex}>
                <input placeholder='' value={saveInput} onChange={ (e) => setSaveInput(e.target.value)}/>
                <button onClick={saveNewTodoList} className={css.todoBtn}>Add</button>
            </div>
        </div>
    )
}

export default AddTodoList;