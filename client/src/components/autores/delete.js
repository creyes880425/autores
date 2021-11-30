import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

const DeleteButton = (props) => {

    const navigate = useNavigate();

    const eliminarFromView = (e) => {
        e.stopPropagation();
        props.eliminar(props.id);
        if (props.redirect) {
            navigate('../');
        }
    }

    return (
        <Button color="danger" type="button" onClick={eliminarFromView} style={{ marginRight: '10px'}}>Eliminar</Button>
    )
}

export default DeleteButton;