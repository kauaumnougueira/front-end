import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header
      className="min-w-full container flex
      flex-row margin shadow-md items-center bg-mainGray"
    >
      <div>
        <Link to="/"><img src="/logo.png" alt="" className="max-w-48 px-4" /></Link>
      </div>
      <nav className="container flex flex-row">
        <ul className="container flex flex-row justify-evenly justify-items">
          <li>
            <Link to="/sobre">Quem somos</Link>
          </li>
          <li>
            <Link to="/estacoes">Estações Tech</Link>
          </li>
          <li>
            <Link to="/voluntarios">Seja Voluntário</Link>
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
