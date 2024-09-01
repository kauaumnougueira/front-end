import { Route, Routes } from 'react-router-dom';
import Initial from './pages/Initial';
import Apoie from './pages/Apoie';
import Estacoes from './pages/Estacoes';
import Sobre from './pages/Sobre';
import Layout from './components/Outlet';
import Voluntario from './pages/voluntario';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Initial /> } />
        <Route path="sobre" element={ <Sobre /> } />
        <Route path="apoie" element={ <Apoie /> } />
        <Route path="estacoes" element={ <Estacoes /> } />
        <Route path="voluntarios" element={ <Voluntario /> } />
      </Route>
    </Routes>
  );
}

export default App;
