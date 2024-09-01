function Sobre() {
  return (
    <div
      className="bg-mainGray shadow-custom rounded-2xl mt-8
     mb-8 mx-4 sm:mx-auto sm:w-3/4 p-4 sm:p-8"
    >
      <div className="flex flex-col sm:flex-row items-center">
        {/* Imagem da Estação Tech */}
        <div className="flex justify-center w-full sm:w-1/2 mb-4 sm:mb-0">
          <img
            src="/estacao-tech (1).jpeg"
            alt="foto da estacao tech"
            className="rounded-full w-40 h-40 sm:w-64 sm:h-64"
          />
        </div>

        {/* Conteúdo Descritivo */}
        <div className="w-full sm:w-1/2 bg-yellow-700 p-4 sm:p-8 rounded-lg">
          <figure className="flex flex-col sm:flex-row items-center mb-6">
            <img
              src="/figura-001.png"
              alt="Figura de um rapaz com lupa"
              className="w-16 h-16 sm:w-24 sm:h-24 mb-4 sm:mb-0"
            />
            <h1 className="text-2xl sm:text-3xl font-bold">
              O que é?
            </h1>
          </figure>
          <p className="text-base sm:text-xl">
            As Estações Tech são mais que centros tecnológicos;
            são espaços de reconhecimento de saberes e desenvolvimento
            comunitário, que, além de ultrapassarem o espaço físico, promovem
            ideias, soluções, e o desenvolvimento socioeconômico e ambiental das
            comunidades locais, apoiando o cotidiano.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
