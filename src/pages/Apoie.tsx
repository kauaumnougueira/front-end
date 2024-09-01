const Apoie = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        {/* Aumentando o tamanho do card */}
        <div className="p-12 rounded-lg shadow-lg max-w-2xl w-full bg-mainGray -mt-20"> {/* Ajuste o max-w e o padding */}
          <div className="flex items-center mb-6 justify-center space-x-4">
            {/* Ajuste da Imagem e Título */}
            <img src="/older_placed.png" alt="Contact Image" className="w-20" />
            <h2 className="text-2xl font-semibold text-gray">Apoie uma Estação Tech</h2>
          </div>
  
          <form className="space-y-6"> {/* Ajuste o espaçamento entre os elementos do formulário */}
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Nome completo"
                className="w-1/2 p-3 border border-secondaryGray rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-1/2 p-3 border border-secondaryGray rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
  
            <textarea
              placeholder="Escreva sua mensagem aqui..."
              className="w-full p-3 border border-secondaryGray rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
  
            <button
              type="submit"
              className="w-full p-4 bg-mainGreen text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Apoie;
  