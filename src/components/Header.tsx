import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="w-full container mx-auto flex
       flex-wrap items-center justify-between p-4 bg-mainGray shadow-md"
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <div className="block lg:hidden">
        <button
          onClick={ () => setIsOpen(!isOpen) }
          className="text-mainGreen focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={ `${
          isOpen ? 'block' : 'hidden'
        } w-full lg:flex lg:items-center lg:w-auto` }
      >
        <ul className="lg:flex lg:justify-between lg:items-center mt-4">
          <li className="lg:mx-4 my-2 lg:my-0">
            <Link
              to="/sobre"
              className="text-mainGreen
              hover:text-green-600 transition-colors duration-200"
            >
              Quem somos
            </Link>
          </li>
          <li className="lg:mx-4 my-2 lg:my-0">
            <Link
              to="/estacoes"
              className="text-mainGreen
              hover:text-green-600 transition-colors duration-200"
            >
              Estações Tech
            </Link>
          </li>
          <li className="lg:mx-4 my-2 lg:my-0">
            <Link
              to="/voluntarios"
              className="text-mainGreen
              hover:text-green-600 transition-colors duration-200"
            >
              Seja Voluntário
            </Link>
          </li>
          <li className="lg:mx-4 my-2 lg:my-0">
            <Link
              to="/apoie"
              className="text-mainGreen
              hover:text-green-600 transition-colors duration-200"
            >
              Apoie
            </Link>
          </li>
        </ul>
      </nav>

      {/* Buttons */}
      <div
        className="hidden lg:flex flex-row py-2 px-4
         justify-between w-auto font-bold space-x-4"
      >
        <button
          className="bg-mainGreen text-white rounded-3xl px-8 py-2
           hover:bg-green-600 transition-colors duration-200"
        >
          Gestor
        </button>
        <button
          className="bg-mainGreen text-white rounded-3xl px-8 py-2
         hover:bg-green-600 transition-colors duration-200"
        >
          Aluno
        </button>
      </div>
    </header>
  );
}
