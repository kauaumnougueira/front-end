import { Link } from 'react-router-dom';

export default function Header() {
  const estacoes = [
    { id: 1, nome: "Forquilha" },
    { id: 2, nome: "Itapera" },
    { id: 3, nome: "Maracanã" },
    { id: 4, nome: "Nova Vida" },
    { id: 5, nome: "Vila São José II" }
  ];

  const handleEstacaoClick = (id:any) => {
    localStorage.setItem('estacaoId', id);
  };

  return (
    <header className="min-w-full container flex flex-row margin shadow-md items-center bg-mainGray">
      <div>
        <img src="../../public/logo.png" alt="" className="max-w-48 px-4" />
      </div>
      <nav className="container flex flex-row">
        <ul className="container flex flex-row justify-evenly justify-items">
          <li>
            <Link to="/">Quem somos</Link>
          </li>
          <li className="relative group">
            <button className="flex items-center">
              <Link to="/estacoesTech">Estações Tech</Link>
              {/* Adicionando a setinha para baixo */}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown Menu */}
            <ul className="absolute hidden group-hover:block bg-white shadow-md rounded-lg mt-2">
              {estacoes.map((estacao) => (
                <li
                  key={estacao.id}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleEstacaoClick(estacao.id)}
                >
                  <Link to={`/estacoes`}>{estacao.nome}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/voluntario">Seja Voluntário</Link>
          </li>
          <li>
            <Link to="/apoie">Apoie</Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row py-8 px-8 justify-between w-2/6 font-bold">
        <button className="bg-mainGreen text-white rounded-3xl px-8 py-2">Gestor</button>
        <button className="bg-mainGreen text-white rounded-3xl px-8">Aluno</button>
      </div>
    </header>
  );
}
