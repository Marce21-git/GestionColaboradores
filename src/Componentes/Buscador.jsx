const Buscador = ({ data, datafilter }) => {


    const inputHandler = (e) => {
        e.preventDefault();
        const buscarPalabra = e.target.value.toLowerCase();
        console.log('dataB',data)
        const resultado = data.filter((colaborador) =>
            /*colaborador.id.includes(buscarPalabra) || */
            colaborador.nombre.toLowerCase().includes(buscarPalabra) || 
            colaborador.correo.toLowerCase().includes(buscarPalabra) || 
            colaborador.edad.includes(buscarPalabra) || 
            colaborador.cargo.toLowerCase().includes(buscarPalabra) || 
            colaborador.telefono.includes(buscarPalabra)
            
        )

        datafilter(resultado)
    }


    return (
        <input
            className="form-control"
            type="text"
            placeholder="Buscador"
            onChange={inputHandler}>
        </input>
    )
};

export default Buscador