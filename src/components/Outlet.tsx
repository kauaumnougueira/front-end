import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center items-center">
        <Outlet />
        {' '}
        {/* Aqui o conteúdo das rotas será renderizado */}
      </main>
    </div>
  );
}
