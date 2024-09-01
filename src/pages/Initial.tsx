import Map from '../components/Map';


function Initial() {
  return (
    <div className="items-center w-3/4 bg-mainGray shadow-custom rounded-2xl mt-20">
      <div className="flex">
        <div
          className="flex items-center w-4/5
           justify-center p-8 mx-8 rounded-full "
        >
          <img
            src="../../public/estacao-tech (1).jpeg"
            alt="foto da estacao tech"
            className="rounded-full"
          />
        </div>
        <div className="justify-between bg-yellow-700 pt-8">
          <figure className="flex flex-row items-center">
            <img
              src="../../public/figura-001.png"
              alt="Figura de um rapaz com lupa"
              className="px-4 w-1/6 h-1/6"
            />
            <h1 className="px-2 py-4 text-3xl">O que é?</h1>
          </figure>
          <p className="px-4 py-12 text-xl h-1/2">
            As Estações Tech são mais que centros tecnológicos;
            são espaços de reconhecimento de saberes e desenvolvimento
            comunitário, que, além de ultrapassarem o espaço físico,
            promovem ideias, soluções, e o desenvolvimento
            socioeconômico e ambiental das comunidades locais, apoiando
            o cotidiano.
          </p>
        </div>
      </div>
      <div>
        <Map />

      </div>
    </div>
  );
}

export default Initial;
