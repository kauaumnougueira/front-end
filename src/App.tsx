import { Route, Routes } from 'react-router-dom';
import Initial from './pages/Initial';
import Layout from './components/Outlet';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Initial /> } />
      </Route>

    </Routes>
  );
}

export default App;
