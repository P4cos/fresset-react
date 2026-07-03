import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
} from "react-icons/fa";

import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import jugo from "../assets/images/products/jugoscombinados.jpg";

import toast from "react-hot-toast";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();

  const navigate = useNavigate();

  const ingresar = async (e) => {

    e.preventDefault();

    const usuario = await loginUser(email, password);

    if (usuario) {

      login(usuario);

      toast.success(`¡Bienvenido ${usuario.nombre}!`);

      navigate("/");

    } else {

      toast.error("Correo o contraseña incorrectos");

    }

  };

  return (

    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">

      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">

      

        <div className="hidden md:flex bg-gradient-to-br from-green-600 to-green-400 items-center justify-center p-10">

          <div className="text-center text-white">

            <img
              src="/src/assets/images/products/jugoscombinados.jpg"
              alt="Fresset"
              className="rounded-3xl shadow-xl mb-8"
            />

            <h2 className="text-4xl font-bold">

              Bienvenido a Fresset

            </h2>

            <p className="mt-4 text-lg">

              Disfruta de los mejores jugos naturales preparados al instante.

            </p>

          </div>

        </div>

  

        <div className="p-10">

          <h1 className="text-4xl font-bold text-green-600 mb-2">

            Iniciar Sesión

          </h1>

          <p className="text-gray-500 mb-8">

            Ingresa con tu cuenta para continuar.

          </p>

          <form
            onSubmit={ingresar}
            className="space-y-6"
          >

           

            <div className="relative">

              <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />

            </div>

         

            <div className="relative">

              <FaLock className="absolute left-4 top-4 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-xl pl-12 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-gray-500"
              >

                {showPassword ? <FaEyeSlash /> : <FaEye />}

              </button>

            </div>

            <button
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-3 transition"
            >

              <FaSignInAlt />

              Ingresar

            </button>

          </form>

         

          <div className="mt-8 text-center">

            <p className="text-gray-600">

              ¿Aún no tienes una cuenta?

            </p>

            <Link
              to="/register"
              className="text-orange-500 font-bold hover:underline"
            >

              Crear una cuenta

            </Link>

          </div>

     

          <div className="mt-6 text-center">

            <button
              onClick={() => navigate("/")}
              className="text-green-600 hover:underline"
            >

              ← Volver al Inicio

            </button>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Login;