import { useNavigate } from 'react-router-dom';

function Initial() {
  const navigate = useNavigate();

  return (
    <div className="items-center w-3/4">
      <div className="flex bg-red-700">
        <div
          className="flex items-center w-fit p-8 bg-gray-400
           justify-center rounded-full m-4"
        >
          <img
            src="../../public/estacao-tech.jpeg"
            alt="foto da estacao tech"
            className="h-56 w-full rounded-full"
          />
        </div>
        <div className="justify-between bg-yellow-700">
          <figure className="flex flex-row items-center">
            <img
              src="../../public/figura-001.png"
              alt="Figura de um rapaz com lupa"
              className="px-4 w-1/6 h-1/6"
            />
            <h1 className="px-2 py-4 text-3xl">O que é?</h1>
          </figure>
          <p className="px-4 py-12 text-2xl h-1/2">
            As Estações Tech são mais que centros tecnológicos;
            são espaços de reconhecimento de saberes e desenvolvimento
            comunitário, que, além de ultrapassarem o espaço físico,
            promovem ideias, soluções, e o desenvolvimento
            socioeconômico e ambiental das comunidades locais, apoiando
            o cotidiano.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Initial;
