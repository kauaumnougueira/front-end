import imgVoluntario from './imagens/icon-voluntario.png';
import imgQrCode from './imagens/qrCode.png';
import iconeCard1 from './imagens/icone-card-1.png';
import iconeCard2 from './imagens/icone-card-2.png';
import iconeCard3 from './imagens/icone-card-3.png';
import imagemWhatsapp from './imagens/whatsapp.png';
import './App.css';

function Voluntario() {
  return (
    <>
    <div className='section__voluntario'>
      <div className='container__title'>
        <img src={imgVoluntario} className='image' alt='Icone do voluntário' />
        <h2 className='title'>
          Contribua com o nosso projeto e torne-se um voluntário!
        </h2>
      </div>
      <div className='section__inner'>
        <div className='container__info'>
          <p>
            Participe de um espaço de transformação comunitária e inovação, contribuindo para o desenvolvimento socioeconômico e ambiental das comunidades. Seja um agente de mudança, ajudando a criar soluções e promovendo o bem-estar local.
          </p>
          <div className='card__qrcode'>
            <h3 className='title__qrCode'>
              Escaneie o QR Code
            </h3>
            <img src={imgQrCode} className='img__qrcode' alt='Qr Code' />
          </div>
        </div>
      </div>

      <div className='section__beneficios'>
        <h2 className='title__beneficios'>
          Benefícios:
        </h2>
        <div className='container__cards'>
          <div className='card'>
            <img src={iconeCard1} className='image__card' alt='Icone do benefício' />
            <h3 className='title__card'>
              Desenvolvimento comunitário
            </h3>
          </div>
          <div className='card'>
            <img src={iconeCard2} className='image__card' alt='Icone do benefício' />
            <h3 className='title__card'>
              Certificado de Participação
            </h3>
          </div>
          <div className='card'>
            <img src={iconeCard3} className='image__card' alt='Icone do benefício' />
            <h3 className='title__card'>
              Networking e aprendizado
            </h3>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <div className='container__footer'>
        <button className='btn'>
          Seja voluntário
        </button>
        <div className='links__footer'>
        <h2>Links rápidos</h2>
        <a href='#'>
          Sobre nós
        </a>
        <a href='#'>
          Estações Tech
        </a>
        <a href='#'>
          Seja voluntário
        </a>
        <a href='#'>
          Contato
        </a>
        </div>

        <div className='links__footer'>
          <h2>Duvidas</h2>
          <a href='#'>
            Entre em contato
          </a>
        </div>
      </div>
      <div className='copyright'>
        <h3>©2024  Estação Tech. Todos os direitos reservados</h3>
        <div className='right'>
        <a href='#'>Privacidade e Política</a>
        <a href='#'>Termos e Condições</a>
        </div>
      </div>
    </footer>

    <div className='whatsapp__button' id='whatsappBtn'>
      <a href="#">
        <img src={imagemWhatsapp} alt='Icone do whatsapp' className='img__whatsapp' />
      </a>
    </div>

    </>
  );
}

export default Voluntario;

const whatsappBtn = document.querySelector('#whatsappBtn');

setInterval(() => {
  if(whatsappBtn != null) {
    whatsappBtn.classList.toggle("animateWhatsapp");
  }
}, 4000);