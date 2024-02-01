import React from 'react'
import useClima from '../hooks/useClima'

const Resultado = () => {

    const { resultado } = useClima()
    const {name, main} = resultado
    const {temp, temp_max, temp_min} = main
    const kelvin = 273.15
    return (
        <div className='contenedor clima'>
            <h2>El clima de {name} es:</h2>
            <p>
                {parseInt(temp- kelvin)} <span>°C</span>
            </p>

            <div className='temp_min_max'>
                <p>
                    Mín: {parseInt(temp_min - kelvin)} <span>°C</span>
                </p>
                <p>
                    Máx: {parseInt(temp_max - kelvin)} <span>°C</span>
                </p>
            </div>
        </div>
    )
}

export default Resultado
