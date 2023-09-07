import React from 'react'


const Listado = ({ data, setData, dataFilter, setDataFilter }) => {

    const borrarColaborador = (idColaborador) => {
        //const idColaborador = e.target.value

        const colaboradores = data.filter(colaborador =>
            colaborador.id !== idColaborador
        )
        setData(colaboradores)

        const colaboradoresFiltrados = dataFilter.filter(colaborador =>
            colaborador.id !== idColaborador
        )
        setDataFilter(colaboradoresFiltrados)

    }


    const bodyTabla = dataFilter.map((colaborador) => (
        <tr key={colaborador.id}>
            <th scope="row">{colaborador.id}</th>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td>

                <button 
                className="btn btn-primary" 
                type="button"
                onClick={e => borrarColaborador(colaborador.id)}
                >Borrar</button>
            </td>
        </tr>
    ));

    return (
        <table className="table ">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">nombre</th>
                    <th scope="col">correo</th>
                    <th scope="col">Edad</th>
                    <th scope="col">cargo</th>
                    <th scope="col">telefóno</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {bodyTabla}
            </tbody>
        </table>
    )
}



export default Listado