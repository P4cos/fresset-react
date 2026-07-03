import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaUserPlus,
} from "react-icons/fa";

import jugo from "../assets/images/products/jugoscombinados.jpg";



import {
    registerUser,
    emailExists,
} from "../services/authService";

import toast from "react-hot-toast";

function Register() {

    const navigate = useNavigate();

    
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);



    const [form, setForm] = useState({
        nombre: "",
        email: "",
        password: "",
        confirmar: "",
    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };

    const registrar = async (e) => {

        e.preventDefault();

        if (
            !form.nombre ||
            !form.email ||
            !form.password ||
            !form.confirmar
        ) {

            toast.error("Complete todos los campos");

            return;

        }

        if (form.password !== form.confirmar) {

            toast.error("Las contraseñas no coinciden");

            return;

        }

        if (await emailExists(form.email)) {

            toast.error("El correo ya está registrado");

            return;

        }

        await registerUser({
            nombre: form.nombre,
            email: form.email,
            password: form.password,
        });

        toast.success("Cuenta creada correctamente");

        navigate("/login");

    };

    return (

        <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-12">

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2">

               

                <div className="hidden md:flex bg-gradient-to-br from-green-600 to-green-400 justify-center items-center p-10">

                    <div className="text-center text-white">

                        <img
                            src={jugo}
                            alt="Fresset"
                            className="rounded-3xl shadow-xl mb-8"
                        />

                        <h2 className="text-4xl font-bold">

                            Únete a Fresset

                        </h2>

                        <p className="mt-4 text-lg">

                            Regístrate y disfruta de nuestros jugos naturales, promociones y pedidos rápidos.

                        </p>

                    </div>

                </div>

               

                <div className="p-10">

                    <h1 className="text-4xl font-bold text-green-600">

                        Crear Cuenta

                    </h1>

                    <p className="text-gray-500 mt-2 mb-8">

                        Completa tus datos para registrarte.

                    </p>

                    <form
                        onSubmit={registrar}
                        className="space-y-5"
                    >

                       

                        <div className="relative">

                            <FaUser className="absolute left-4 top-4 text-gray-400" />

                            <input
                                type="text"
                                name="nombre"
                                placeholder="Nombre completo"
                                value={form.nombre}
                                onChange={handleChange}
                                className="w-full border rounded-xl pl-12 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                            />

                        </div>

                 

                        <div className="relative">

                            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                            <input
                                type="email"
                                name="email"
                                placeholder="Correo electrónico"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border rounded-xl pl-12 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                            />

                        </div>


                        <div className="relative">

                            <FaLock className="absolute left-4 top-4 text-gray-400" />

                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Contraseña"
                                value={form.password}
                                onChange={handleChange}
                                className="w-full border rounded-xl pl-12 pr-12 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-4 text-gray-500"
                            >

                                {showPassword ? <FaEyeSlash /> : <FaEye />}

                            </button>

                        </div>

                

                        <div className="relative">

                            <FaLock className="absolute left-4 top-4 text-gray-400" />

                            <input
                                type={showConfirm ? "text" : "password"}
                                name="confirmar"
                                placeholder="Confirmar contraseña"
                                value={form.confirmar}
                                onChange={handleChange}
                                className="w-full border rounded-xl pl-12 pr-12 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                            />

                            <button
                                type="button"
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="absolute right-4 top-4 text-gray-500"
                            >

                                {showConfirm ? <FaEyeSlash /> : <FaEye />}

                            </button>

                        </div>

                        <button
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl flex justify-center items-center gap-3 font-semibold transition"
                        >

                            <FaUserPlus />

                            Crear Cuenta

                        </button>

                    </form>

                    <div className="text-center mt-8">

                        <p className="text-gray-600">

                            ¿Ya tienes una cuenta?

                        </p>

                        <Link
                            to="/login"
                            className="text-orange-500 font-bold hover:underline"
                        >

                            Iniciar sesión

                        </Link>

                    </div>

                    <div className="text-center mt-5">

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

export default Register;