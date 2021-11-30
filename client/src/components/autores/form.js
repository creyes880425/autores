import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Row, Form, Col, FormGroup, Label, Input, Button } from 'reactstrap';

const initialState = {
    nombre: ''
}

const AutorForm = (props) => {

    const [inputs, setInputs] = useState(initialState);
    const { id } = useParams();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const volver = e => {
        e.stopPropagation();
        setInputs(initialState);
        navigate('/');
    }

    const actualizarValor = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const guardar = e => {
        e.preventDefault();
        const data = { ...inputs };
        data._id = id;

        if (props.edicion) {
            axios.put(`/api/autores/${data._id}`, data)
                .then(resp => {
                    props.setActualizar(!props.actualizar)
                    navigate('/');
                })
                .catch(err => {
                    const errorResponse = err.response.data.errors;
                    console.log(errorResponse)
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    console.log(errorArr);
                    setErrors(errorArr);
                });
        } else {
            axios.post('/api/autores', data)
                .then(resp => {
                    props.setList([
                        ...props.list,
                        resp.data.data
                    ]);
                    setInputs(initialState);
                    navigate('/');
                }).catch(err => {
                    const errorResponse = err.response.data.errors;
                    console.log(errorResponse)
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                    }
                    console.log(errorArr);
                    setErrors(errorArr);
                });
        }
    }

    useEffect(() => {
        if (id) {
            axios.get(`/api/autores/${id}`)
                .then(resp => setInputs(resp.data.data))
                .catch(error => {
                    console.log('Error al obtener autor');
                    navigate('/error');
                });
        }
    }, [id])

    return (
        <>
            <Link to={"/"}> Inicio </Link>
            <Col md={{ size: 4 }} sm="12">
                <Row>
                    <h3>{props.edicion ? 'Editar el autor' : 'Creando un nuevo autor'}</h3>
                </Row>
                <Row>
                    <Form onSubmit={guardar}>
                        {errors.map((err, index) => <p key={index} style={{ color: 'red' }}>{err}</p>)}
                        <Row>
                            <Col xs={12}>
                                <FormGroup>
                                    <Label>Nombre:</Label>
                                    <Input type="text" required name="nombre" value={inputs.nombre} onChange={actualizarValor} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={3}>
                                <Button type="button" onClick={volver}>Cancelar</Button>
                            </Col>
                            <Col xs={3} style={{ marginRight: '10px' }}>
                                <Button type="submit" color='primary'>Guardar</Button>
                            </Col>
                        </Row>
                    </Form>
                </Row>
            </Col>
        </>
    )
}

export default AutorForm;