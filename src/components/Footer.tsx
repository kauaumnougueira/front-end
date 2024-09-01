/* eslint-disable jsx-a11y/anchor-is-valid */
function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-8">
      <div
        className="container mx-auto px-4 flex flex-col sm:flex-row
       justify-between items-start sm:items-center space-y-8 sm:space-y-0"
      >
        {/* Botão "Seja voluntário" */}
        <div>
          <button
            className="bg-mainGreen text-white font-bold py-2 px-6
           rounded-3xl hover:bg-green-600 transition-colors duration-200"
          >
            Seja voluntário
          </button>
        </div>

        {/* Links rápidos */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Links rápidos</h2>

          <a
            href="#"
            className="text-gray-600 hover:text-gray-800
           transition-colors duration-200"
          >
            Sobre nós
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-gray-800
           transition-colors duration-200"
          >
            Estações Tech
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-gray-800
           transition-colors duration-200"
          >
            Seja voluntário
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-gray-800
           transition-colors duration-200"
          >
            Contato
          </a>
        </div>

        {/* Dúvidas */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Dúvidas</h2>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800
          transition-colors duration-200"
          >
            Entre em contato
          </a>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4">
        <div
          className="container mx-auto px-4
         flex flex-col-reverse sm:flex-row justify-between items-center"
        >
          {/* Copyright */}
          <h3 className="text-gray-600 text-center sm:text-left">
            ©2024 Estação Tech. Todos os direitos reservados
          </h3>

          {/* Links de Política e Termos */}
          <div className="flex space-x-4 text-gray-600 mt-4 sm:mt-0">
            <a
              href="#"
              className="hover:text-gray-800
             transition-colors duration-200"
            >
              Privacidade e Política
            </a>
            <a
              href="#"
              className="hover:text-gray-800
             transition-colors duration-200"
            >
              Termos e Condições
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
