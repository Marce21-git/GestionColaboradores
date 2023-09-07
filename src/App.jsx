import './App.css'
import './login.css'
import Listado from './componentes/Listado';
import { BaseColaboradores } from './componentes/db'
import { useState } from 'react';
import Buscador from './componentes/Buscador';
import Formulario from './componentes/Formulario';

function App() {

  const [data, setData] = useState(BaseColaboradores)
  const [dataFilter, setDataFilter] = useState(data)

  const [alert, setAlert] = useState({
    error: false,
    msg: '',
    color: '',
  });

  return (
    <>
      <Buscador data={data} datafilter={setDataFilter} />
      <Listado
        data={data}
        setData={setData}
        dataFilter={dataFilter}
        setDataFilter={setDataFilter} />
      <Formulario
        data={data}
        setDatax={setData}
        dataFilter={dataFilter}
        setDataFilter={setDataFilter}
        alert={alert}
        setAlert={setAlert} />

    </>
  )
}
export default App;
