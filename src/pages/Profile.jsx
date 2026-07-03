import { useState } from "react";
import { FaUserCircle, FaSave } from "react-icons/fa";
import toast from "react-hot-toast";

import { useAuth } from "../context/AuthContext";
import { updateUser } from "../services/authService";

function Profile() {

  const { user, login } = useAuth();

  const [nombre, setNombre] = useState(user.nombre);
  const [telefono, setTelefono] = useState(user.telefono || "");
  const [direccion, setDireccion] = useState(user.direccion || "");

  const guardar = async (e) => {

    e.preventDefault();

    const actualizado = await updateUser(user.id, {

      nombre,
      telefono,
      direccion,

    });

    login(actualizado);

    toast.success("Perfil actualizado correctamente");

  };

  return (

    <div className="max-w-4xl mx-auto py-14 px-6">

      <div className="bg-white rounded-3xl shadow-xl p-10">

        <div className="flex flex-col items-center">

          <FaUserCircle
            className="text-green-600"
            size={120}
          />

          <h1 className="text-3xl font-bold mt-4">

            Mi Perfil

          </h1>

          <p className="text-gray-500">

            Administra tu información personal

          </p>

        </div>

        <form
          onSubmit={guardar}
          className="mt-10 grid md:grid-cols-2 gap-6"
        >

          <div>

            <label className="font-semibold">

              Nombre

            </label>

            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="w-full border rounded-xl p-3 mt-2"
            />

          </div>

          <div>

            <label className="font-semibold">

              Correo

            </label>

            <input
              value={user.email}
              disabled
              className="w-full border rounded-xl p-3 mt-2 bg-gray-100"
            />

          </div>

          <div>

            <label className="font-semibold">

              Teléfono

            </label>

            <input
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="w-full border rounded-xl p-3 mt-2"
            />

          </div>

          <div>

            <label className="font-semibold">

              Dirección

            </label>

            <input
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              className="w-full border rounded-xl p-3 mt-2"
            />

          </div>

          <div className="md:col-span-2 flex justify-center mt-6">

            <button
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl flex items-center gap-3"
            >

              <FaSave />

              Guardar cambios

            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default Profile;