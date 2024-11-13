import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAdmin, isLoggedIn, isEmployee, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="navbar bg-base-100 shadow-md flex items-center justify-between p-4">
            <div className="flex items-center">
                <img src="/src/assets/logo.png" alt="Logo" className="h-10 w-10 mr-2" />
                <span className="text-xl font-bold">Portal Zeladoria de São Vicente</span>
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
                            {isEmployee || isAdmin ? (
                                <li><Link to="/HTML_PI_2/home-employee" className="btn btn-ghost">Home</Link></li>
                            ) : (
                                <li><Link to="/HTML_PI_2/home" className="btn btn-ghost">Home</Link></li>
                            )}
                            {isAdmin && (
                                <>
                                    <li><Link to="/HTML_PI_2/add-new-service" className="btn btn-ghost">Adicionar Novo Serviço</Link></li>
                                    <li><Link to="/HTML_PI_2/register-employee" className="btn btn-ghost">Cadastrar Funcionário</Link></li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            )}

            <div className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {isEmployee || isAdmin ? (
                        <li><Link to="/HTML_PI_2/home-employee" className="btn btn-ghost">Home</Link></li>
                    ) : (
                        <li><Link to="/HTML_PI_2/home" className="btn btn-ghost">Home</Link></li>
                    )}
                    {isAdmin && (
                        <>
                            <li><Link to="/HTML_PI_2/add-new-service" className="btn btn-ghost">Adicionar Novo Serviço</Link></li>
                            <li><Link to="/HTML_PI_2/register-employee" className="btn btn-ghost">Cadastrar Funcionário</Link></li>
                        </>
                    )}
                </ul>
                {isLoggedIn && (
                    <button className="btn btn-accent ml-4" onClick={onLogout}>Sair</button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
