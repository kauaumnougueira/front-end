/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import imagemWhatsapp from '../assets/whatsapp.png';

export default function Layout() {
  useEffect(() => {
    const whatsappBtn = document.querySelector('#whatsappBtn');

    const interval = setInterval(() => {
      if (whatsappBtn != null) {
        whatsappBtn.classList.toggle('animateWhatsapp');
      }
    }, 4000);

    // Limpar o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-grow flex justify-center items-center bg-gray-50">
        <Outlet />
        {' '}
        {/* Aqui o conteúdo das rotas será renderizado */}
      </main>

      {/* Botão do WhatsApp */}
      <div className="fixed bottom-4 right-4 z-50" id="whatsappBtn">
        <a href="#" className="block">
          <img
            src={ imagemWhatsapp }
            alt="Ícone do WhatsApp"
            className="w-16 h-16 drop-shadow-lg transition-transform
             transform hover:scale-110"
          />
        </a>
      </div>

      <Footer />
    </div>
  );
}
