import React from 'react'

const Personajes = () => {

    const [personajes, setPersonajes] = React.useState([]);
    const [paginacion, setPaginacion] = React.useState(1);

    const obtenerPersonajes = async () => {
        try {
            console.log(paginacion);
            const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${paginacion}`);
            const { results } = await res.json();
            setPersonajes(results);
            console.log(results);
        } catch (error) {
            console.log(error);
        }
    }

    const siguiente = async () => {
        setPaginacion(paginacion + 1);
        await obtenerPersonajes();
    }

    const anterior = async () => {
        setPaginacion(paginacion - 1);
        if (paginacion <= 1) {
            setPaginacion(1);
        }
        await obtenerPersonajes();
    }

    const limpiar = async () => {
        setPaginacion(1);
        setPersonajes([]);
    }

    return (
        <div>personajes</div>
    )
}

export default Personajes