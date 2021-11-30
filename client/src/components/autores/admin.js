import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Error from './error';
import AutorForm from './form';
import AutorList from './list';

const AutorAdmin = (props) => {

    const [list, setList] = useState([]);
    const [actualizar, setActualizar] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('/api/autores')
            .then(resp => {
                setList(resp.data.data);
                setLoaded(true);
            })
            .catch(error =>
                console.log('Error', error.message));
    }, [actualizar]);

    const eliminar = id => {
        axios.delete(`/api/autores/${id}`)
            .then(resp => {
                const lista = [...list];
                lista.splice(lista.findIndex(e => e._id === id), 1);
                setList(lista);
            }).catch(error => console.log('Error al eliminar el producto', error?.message));
    }

    return (
        <>
            <h1>Autores Favoritos</h1>
            <Routes>
                <Route index element={
                        <>
                            <Link to={"/new"}> Agregar Autor </Link>
                            {loaded && <AutorList list={list} eliminar={eliminar} />}
                        </>
                    } />
                <Route path="/new" element={<AutorForm list={list} setList={setList}/>} />
                <Route path="/edit/:id" element={<AutorForm actualizar={actualizar} setActualizar={setActualizar} edicion={true}/>} />
                <Route path="/error" element={<Error actualizar={actualizar} setActualizar={setActualizar} edicion={true}/>} />
            </Routes>
        </>
    )
}

export default AutorAdmin;