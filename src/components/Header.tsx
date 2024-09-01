import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header
      className="min-w-full container flex flex-row margin shadow-md items-center"
    >
      <div>
        <img
          src="../../public/logo.png"
          alt=""
          className="max-w-48 px-4"
        />
      </div>
      <nav className="container flex flex-row ">
        <ul className="container flex flex-row justify-evenly justify-items">
          <li>
            <Link to="/">Quem somos</Link>
          </li>
          <li>
            <Link to="/estacoes">Estações Tech</Link>
          </li>
          <li>
            <Link to="/voluntario">Seja Voluntário</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row py-8 px-8 justify-between w-2/6">
        <button
          className="bg-mainGreen text-white rounded-3xl px-8 py-2"
        >
          Gestor
        </button>
        <button
          className="bg-mainGreen text-white rounded-3xl px-8"
        >
          Aluno
        </button>
      </div>
    </header>
  );
}
