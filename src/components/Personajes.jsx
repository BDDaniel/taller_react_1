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
        <div class="bg-dark">
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
            <div class="container border border-primary bg-light">
                <div class="row">
                    {
                        personajes.map(({ id, name, image, gender, species, status }) => {
                            if (gender === "Male") {
                                gender = "Masculino"
                            } else if (gender === "Female") {
                                gender = "Femenino"
                            } else if (gender === "unknown") {
                                gender = "Desconocido"
                            }
                            if (species === "Human") {
                                species = "Humano"
                            } else if (species === "unknown") {
                                species = "Desconocido"
                            } else if (species === "Disease") {
                                species = "Enfermedad"
                            } else if (species === "Humanoid") {
                                species = "Humanoide"
                            } else if (species === "Mythological Creature") {
                                species = "Criatura Mitologica"
                            }
                            if (status === "Alive") {
                                status = "Vivo"
                            } else if (status === "Dead") {
                                status = "Muerto"
                            } else if (status === "unknown") {
                                status = "Desconocido"
                            }
                            return (
                                <div class="col">
                                    <div class="card border border-primary m-2 mt-3" style={{ width: "18rem" }} key={id}>
                                        <img src={image} class="card-img-top" alt={name} />
                                        <div class="card-body text-start">
                                            <h4 class="card-title">{id} - {name}</h4>
                                            <p class="card-text pt-3">Género: {gender}</p>
                                            <p class="card-text">Especie: {species}</p>
                                            <p class="card-text">Estado: {status}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Personajes