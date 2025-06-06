import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/src/assets/logo.png';
import ThemeToggle from '../ThemeControl/ThemeControl';

const logout = () => {
    sessionStorage.removeItem('authToken');
    window.location.href = '/HTML_PI_2';
}
const Navbar = ({ isAdmin, isLoggedIn, isEmployee, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation(); // Captura a URL atual

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Condições para exibir a navbar simples ou com botões adicionais
    const isCitizenRoutes = location.pathname === '/home' || location.pathname === '/service-selection' || location.pathname === '/service-request';
    const isEmployeeRoutes = location.pathname === '/add-new-service' || location.pathname === '/register-employee' || location.pathname === '/home-employee' || location.pathname === '/data-service';

    return (
        <div className="navbar bg-base-100 shadow-md flex items-center justify-between p-2">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
                <span className="font-bold text-sm flex items-center">
                    Portal Zeladoria<br />de São Vicente
                </span>
            </div>
            <div className='ml-auto'>
                <ThemeToggle />
            </div>

            <div className="flex-none md:hidden">
                <button className="btn btn-square btn-ghost" onClick={toggleMenu}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute bg-base-100 w-full z-10 shadow-md mt-12 flex justify-center">
                    <div className="menu p-2 text-center">
                        <button className="btn btn-square btn-ghost absolute top-0 right-0 m-2" onClick={closeMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-5 w-5 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <ul>
                            {isCitizenRoutes ? (
                                // Navbar do cidadão com botão Home

                                <>
                                    <li><Link to="/home" className="btn btn-ghost">Home</Link></li>
                                    <button className="btn btn-ghost" onClick={logout}>Encerrar Sessão</button>
                                </>

                            ) : isEmployeeRoutes ? (
                                // Navbar do funcionário com botões adicionais
                                <>
                                    <li><Link to="/home-employee" className="btn btn-ghost">Página Inicial</Link></li>
                                    <li><Link to="/add-new-service" className="btn btn-ghost">Adicionar Novo Serviço</Link></li>
                                    <li><Link to="/register-employee" className="btn btn-ghost">Cadastrar Funcionário</Link></li>
                                    <button className="btn btn-ghost" onClick={logout}>Encerrar Sessão</button>

                                </>
                            ) : null}
                        </ul>
                    </div>
                </div>
            )}

            <div className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {isCitizenRoutes ? (
                        // Navbar do cidadão com botão Home
                        <>
                            <li><Link to="/home" className="btn btn-ghost">Página Inicial</Link></li>
                            <li><button className="btn btn-outline btn-neutral ml-4" onClick={logout}>Sair</button></li>

                        </>

                    ) : isEmployeeRoutes ? (
                        // Navbar do funcionário com botões adicionais
                        <>
                            <li><Link to="/home-employee" className="btn btn-ghost">Página Inicial</Link></li>
                            <li><Link to="/add-new-service" className="btn btn-ghost">Adicionar Novo Serviço</Link></li>
                            <li><Link to="/register-employee" className="btn btn-ghost">Cadastrar Funcionário</Link></li>
                            <li><button className="btn btn-outline btn-neutral ml-4" onClick={logout}>Sair</button></li>
                        </>
                    ) : null}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
