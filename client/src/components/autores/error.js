import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <p>Lo sentimos, pero no pudimos encontrar el autor que está buscando. ¿Desea agregar este autor a nuestra base de datos?</p>
            <Link to={"/new"}> Agregar Autor </Link>
        </>
    )
}

export default Error;