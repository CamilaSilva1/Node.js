/*Criado por Camila Silva em 21/02/2022*/
/*pagina que irá gerenciar as mensagens UI do projeto*/

//layouts
import styles from '../layouts/Message.module.css'

//js
import {useState, useEffect} from 'react'

//recebendo o tipo da mensagem e o texto da mensagem
function Message({ type, msg}){

    //alterando a visiabilidade da mensagem
    const [visible, setVisible] = useState(false)

    //controlando a exibição da mensagem
    useEffect(() => {

        //se a mensagem não existe, nao retorna uma msg
            if(!msg){
                setVisible(false)
                return
            }//senao
            setVisible(true)

            //excluindo a mensagem depois de 3s
            const timer = setTimeout(() => {

                    setVisible(false)

            }, 3000)

            //finalizando o tempo
            return () =>clearTimeout(timer)

    }, [msg])

    return( 
        <>
            {visible && (
                <div className={` ${styles.message} ${styles[type]}`}>
                    {msg}
                </div>
            )}
        </>

    )
}

export default Message