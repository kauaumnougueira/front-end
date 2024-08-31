import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="p-4 container flex flex-row">
      <div>
        <img
          src="../../public/logo.png"
          alt=""
          className="max-w-48"
        />
      </div>
      <nav className="container flex flex-row bg-red-700">
        <ul className="container flex flex-row justify-evenly">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
