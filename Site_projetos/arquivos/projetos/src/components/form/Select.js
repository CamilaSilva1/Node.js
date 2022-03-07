//JS criado por Camila Silva em 18/02/2022
//responsável pelo gerenciamento dos selects do projeto de forma dinamica

//layouts
import styles from '../layouts/Select.module.css'

//input de seleção para selecionar as opções no projeto
function Select({text, name, options, handleOnChange, value}){
    return(
        <div className={styles.select_control}>
            <label htmlFor={name}>
                {text}:
            </label>

            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option>
                    Selecione uma opção
                </option>

                {/**imprimindo as opções criada em json */}
                {options.map((option) => (
                    <option value={option.id}  key={option.id}>
                       {option.name}
                    </option>
                ))}
                
            </select>
        </div>
    )
}

export default Select