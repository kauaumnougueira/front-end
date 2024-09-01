import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import imagemWhatsapp from '../assets/whatsapp.png'

export default function Layout() {


  const whatsappBtn = document.querySelector('#whatsappBtn');

  setInterval(() => {
    if (whatsappBtn != null) {
      whatsappBtn.classList.toggle("animateWhatsapp");
    }
  }, 4000);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center items-center">
        <Outlet />
        {' '}
        {/* Aqui o conteúdo das rotas será renderizado */}
      </main>
      <div className='whatsapp__button' id='whatsappBtn'>
        <a href="#">
          <img src={imagemWhatsapp} alt='Icone do whatsapp' className='img__whatsapp' />
        </a>
      </div>
      <Footer />
    </div>
  );

}
