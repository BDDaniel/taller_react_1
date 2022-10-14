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
        <div class="container text-center bg-primary bg-gradient">
            <div class="row align-items-start">
                <div class="col mb-3 mt-3">
                    <h1>PERSONAJES DE RICK AND MORTY</h1>
                </div>
            </div>
            <div class="row align-items-start">
                <div class="col text-start">
                    <button type="button" class="btn btn-primary m-2" onClick={obtenerPersonajes}>Traer Personajes</button>
                    <button type="button" class="btn btn-primary m-2" onClick={limpiar}>Limpiar</button>
                </div>
                <div class="col text-end">
                    <button type="button" class="btn btn-primary m-2" onClick={anterior}>Anterior</button>
                    <button type="button" class="btn btn-primary m-2" onClick={siguiente}>Siguiente</button>
                </div>
            </div>
        </div>
    )
}

export default Personajes