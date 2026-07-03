import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  FaShoppingCart,
  FaUser,
  FaBars,
  FaHeart,
  FaSignOutAlt,
} from "react-icons/fa";

import toast from "react-hot-toast";

import TopBar from "./TopBar";

import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const { totalItems } = useCart();

  const {
    user,
    logout,
    isAuthenticated,
  } = useAuth();

  const navigate = useNavigate();

  const cerrarSesion = () => {

    toast.success(`Hasta pronto ${user.nombre}`);

    setOpenUserMenu(false);

    logout();

    navigate("/");

  };

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Productos", path: "/productos" },
    { name: "Promociones", path: "/ofertas" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (

    <>
      <TopBar />

      <nav className="bg-white shadow-md sticky top-0 z-50">

        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">


          <NavLink
            to="/"
            className="logo-font text-4xl text-green-600"
          >
            Fresset
          </NavLink>

    

          <ul className="hidden lg:flex items-center gap-8">

            {links.map((link) => (

              <li key={link.path}>

                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-600 font-semibold border-b-2 border-green-600 pb-1"
                      : "hover:text-green-600 transition"
                  }
                >
                  {link.name}
                </NavLink>

              </li>

            ))}

          </ul>

    

          <div className="hidden lg:flex items-center gap-5">

            <NavLink
              to="/carrito"
              className="relative text-2xl hover:text-green-600 transition"
            >

              <FaShoppingCart />

              {totalItems > 0 && (

                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">

                  {totalItems}

                </span>

              )}

            </NavLink>

      

            <div className="relative">

              {!isAuthenticated ? (

                <NavLink
                  to="/login"
                  className="text-2xl hover:text-green-600"
                >

                  <FaUser />

                </NavLink>

              ) : (

                <button
                  onClick={() => setOpenUserMenu(!openUserMenu)}
                  className="flex items-center gap-2 cursor-pointer hover:text-green-600"
                >

                  <FaUser />

                  <span className="font-semibold">

                    {user.nombre}

                  </span>

                </button>

              )}

            </div>

          </div>


          <div className="flex lg:hidden items-center gap-5">

            <NavLink
              to="/carrito"
              className="relative text-2xl"
            >

              <FaShoppingCart />

              {totalItems > 0 && (

                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">

                  {totalItems}

                </span>

              )}

            </NavLink>

            {!isAuthenticated ? (

              <NavLink
                to="/login"
                className="text-2xl"
              >

                <FaUser />

              </NavLink>

            ) : (

              <button
                onClick={() => setOpenUserMenu(!openUserMenu)}
                className="text-2xl cursor-pointer"
              >

                <FaUser />

              </button>

            )}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl cursor-pointer"
            >

              <FaBars />

            </button>

          </div>

        </div>


        {openUserMenu && (

          <div className="absolute right-6 mt-2 w-56 bg-white rounded-xl shadow-xl border z-50">

            <button
              onClick={() => {

                navigate("/profile");
                setOpenUserMenu(false);

              }}
              className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-100"
            >

              <FaUser />

              Mi Perfil

            </button>

            <button
              onClick={() => {

                navigate("/favoritos");
                setOpenUserMenu(false);

              }}
              className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-100"
            >

              <FaHeart />

              Favoritos

            </button>

            <button
              onClick={cerrarSesion}
              className="w-full flex items-center gap-3 px-5 py-3 text-red-600 hover:bg-red-50"
            >

              <FaSignOutAlt />

              Cerrar sesión

            </button>

          </div>

        )}


        {menuOpen && (

          <div className="lg:hidden bg-white border-t">

            {links.map((link) => (

              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 border-b hover:bg-gray-100"
              >

                {link.name}

              </NavLink>

            ))}

            <NavLink
              to="/carrito"
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 border-b hover:bg-gray-100"
            >

              Carrito

            </NavLink>

            {isAuthenticated && (

              <>
                <NavLink
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 border-b hover:bg-gray-100"
                >

                  Mi Perfil

                </NavLink>

                <NavLink
                  to="/favoritos"
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 border-b hover:bg-gray-100"
                >

                  Favoritos

                </NavLink>

                <button
                  onClick={() => {

                    cerrarSesion();
                    setMenuOpen(false);

                  }}
                  className="w-full text-left px-6 py-4 text-red-600 hover:bg-red-50"
                >

                  Cerrar sesión

                </button>
              </>

            )}

          </div>

        )}

      </nav>

    </>

  );

}

export default Navbar;