import { Route, Routes } from 'react-router-dom';
import Initial from './pages/Initial';
import Apoie from './pages/Apoie';
import Layout from './components/Outlet';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Initial /> } />
        <Route path="apoie" element={ <Apoie /> } />
      </Route>
    </Routes>
  );
}

export default App;
