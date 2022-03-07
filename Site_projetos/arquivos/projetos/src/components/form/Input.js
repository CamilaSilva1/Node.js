//JS criado por Camila Silva em 17/02/2022
//Js para configurar e armazenar os inputs dos formularios

//layouts
import styles from '../layouts/Input.module.css'

//atribuindo valores ao input que será passado no js principal
function Input({type, text, name, placeholder, handleOnChange, value}){
    return(
        <div className={styles.form_control}>{/**chamando css */}

            {/**passando os elementos name e text pre definido na props de forma dinamica */}
            <label htmlFor={name}>
                {text}:
            </label>

            {/**passando os dados de forma dinamica */} 
            <input type={type}
                   name={name}
                   id={name} 
                   placeholder={placeholder} 
                   onChange={handleOnChange}
                   value={value}
                 />

        </div>
    )
}

export default Input