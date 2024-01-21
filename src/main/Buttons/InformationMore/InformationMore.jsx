import { useState } from 'react'
import './InformationMore.scss'

function InformationMore({title, p}) {
    const [visible, setVisible] = useState(false)

    const toogleSee = function () {
        setVisible(!visible)
    }

    return (
        <section className='informationMore'>
            {/* Accion de ejecutar */}
            <button className='informationMore__button' onClick={toogleSee}>{title}</button>

            {
                visible && (
                    <section className='informationMore__p'>
                        {p}
                    </section>
                )    
            }
        
        </section>
    )
}

export default InformationMore
