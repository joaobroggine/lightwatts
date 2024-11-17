"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o menu hambúrguer
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white w-full p-3 pl-7 shadow-md fixed top-0 z-50">
      <header>
        <nav className="flex items-center justify-between text-black text-lg font-headerfont">
          {/* Logo */}
          <Link href="/">
            <Image className="cursor-pointer" 
            src="/img/logo.png" alt="Logo LightWatts" width={60} height={60}
            />
          </Link>

          {/* Menu Desktop */}
          <ul id="ulheader" className="hidden lg:flex items-center space-x-8 ml-10">
            <li className="nav-item">
              <Link href="/">Página Inicial</Link>
            </li>
            <li className="nav-item">
              <Link href="/sobre">A LightWatts</Link>
            </li>
            <li className="nav-item">
              <Link href="/fale-conosco">Fale conosco</Link>
            </li>
          </ul>

          {/* Link de Login no Desktop */}
          <ul className="hidden lg:flex ml-auto pr-10">
            <li className="loginlink">
              <Link className="text-xl" href="/auth/login">
                Login ▷
              </Link>
            </li>
          </ul>

          {/* Botão Menu Hambúrguer para telas menores */}
          <button
            onClick={toggleMenu}
            className="lg:hidden ml-auto text-2xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </nav>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="lg:hidden flex flex-col bg-white w-full mt-3">
            <ul className="flex flex-col text-black items-start p-5 space-y-4">
              <li>
                <Link href="/" onClick={toggleMenu}>
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link href="/sobre" onClick={toggleMenu}>
                  A LightWatts
                </Link>
              </li>
              <li>
                <Link href="/fale-conosco" onClick={toggleMenu}>
                  Fale conosco
                </Link>
              </li>
              <li className="pt-3">
                <Link href="/auth/login" onClick={toggleMenu}>
                  Login ▷
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}
