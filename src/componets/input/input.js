import css from './input.module.css'

function Input ({inputType, placeholder}){
    return (
        <input type={inputType}  className={css.inputStyle} placeholder={placeholder}/>
    )
}

export default Input;