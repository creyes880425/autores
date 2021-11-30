import { Link } from 'react-router-dom';
import { Button, Col,  Table } from 'reactstrap';
import DeleteButton from './delete';

const AutorList = (props) => {

    return (
        <Col md={{ size: 6 }} sm="12">
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th style={{width:  '30%'}}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list && props.list.sort((a, b) => {
                        if (a.nombre > b.nombre) return 1
                        if (a.nombre < b.nombre) return -1
                        return 0
                    }).map((elem, i) => <tr key={i}>
                        <td>{elem.nombre}</td>
                        <td>
                            <Link to={`/edit/${elem._id}`} style={{ margin: '5px' }}><Button color="success" type="button" style={{ marginRight: '5px'}}>Editar</Button></Link>
                            <DeleteButton eliminar={props.eliminar} id={elem._id}/>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
        </Col>
    )
}

export default AutorList;