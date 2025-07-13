import { Outlet } from 'react-router';
import Header from '../../componentes/Header';

function PaginaPadrao() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default PaginaPadrao