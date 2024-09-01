/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import imgVoluntario from '../assets/icon-voluntario.png';
import imgQrCode from '../assets/qrCode.png';
import iconeCard1 from '../assets/icone-card-1.png';
import iconeCard2 from '../assets/icone-card-2.png';
import iconeCard3 from '../assets/icone-card-3.png';

function Voluntario() {
  return (
    <div className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Seção de Título e Imagem */}
        <div className="text-center mb-12">
          <img src={ imgVoluntario } className="w-24 h-24 mx-auto mb-4" alt="Ícone do voluntário" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Contribua com o nosso projeto e torne-se um voluntário!
          </h2>
        </div>

        {/* Seção de Informações e QR Code */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-12">
          <div className="text-gray-700 sm:w-1/2 sm:pr-8 mb-8 sm:mb-0">
            <p className="leading-relaxed">
              Participe de um espaço de transformação comunitária e inovação, contribuindo para o desenvolvimento socioeconômico e ambiental das comunidades. Seja um agente de mudança, ajudando a criar soluções e promovendo o bem-estar local.
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-end">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Escaneie o QR Code
            </h3>
            <img src={ imgQrCode } className="w-32 h-32" alt="QR Code" />
          </div>
        </div>

        {/* Seção de Benefícios */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8">
            Benefícios:
          </h2>
          <div className="flex flex-col sm:flex-row sm:justify-between">
            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 mb-6 sm:mb-0 sm:w-1/3">
              <img src={ iconeCard1 } className="w-16 h-16 mb-4" alt="Ícone do benefício" />
              <h3 className="text-lg font-semibold text-gray-800">
                Desenvolvimento comunitário
              </h3>
            </div>
            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 mb-6 sm:mb-0 sm:w-1/3">
              <img src={ iconeCard2 } className="w-16 h-16 mb-4" alt="Ícone do benefício" />
              <h3 className="text-lg font-semibold text-gray-800">
                Certificado de Participação
              </h3>
            </div>
            <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 sm:w-1/3">
              <img src={ iconeCard3 } className="w-16 h-16 mb-4" alt="Ícone do benefício" />
              <h3 className="text-lg font-semibold text-gray-800">
                Networking e aprendizado
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Voluntario;
