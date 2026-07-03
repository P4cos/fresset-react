import { useState } from "react";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
  FaPaperPlane,
} from "react-icons/fa";

import toast from "react-hot-toast";

import ContactInput from "./ContactInput";

import { enviarMensaje } from "../../services/contactService";

function ContactForm() {

  const [form, setForm] = useState({

    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",

  });

  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });

  };

  const enviar = async (e) => {

    e.preventDefault();

    if (

      !form.nombre ||
      !form.email ||
      !form.telefono ||
      !form.asunto ||
      !form.mensaje

    ) {

      toast.error("Complete todos los campos");

      return;

    }

    await enviarMensaje(form);

    toast.success("Mensaje enviado correctamente");

    setForm({

      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",

    });

  };

  return (

    <form
      onSubmit={enviar}
      className="bg-white rounded-3xl shadow-xl p-8 space-y-5"
    >

      <ContactInput
        icon={<FaUser />}
        name="nombre"
        placeholder="Nombre completo"
        value={form.nombre}
        onChange={handleChange}
      />

      <ContactInput
        icon={<FaEnvelope />}
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
      />

      <ContactInput
        icon={<FaPhone />}
        name="telefono"
        placeholder="Teléfono"
        value={form.telefono}
        onChange={handleChange}
      />

      <ContactInput
        icon={<FaCommentDots />}
        name="asunto"
        placeholder="Asunto"
        value={form.asunto}
        onChange={handleChange}
      />

      <ContactInput
        textarea
        name="mensaje"
        placeholder="Escribe tu mensaje..."
        value={form.mensaje}
        onChange={handleChange}
      />

      <button
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-3 transition"
      >

        <FaPaperPlane />

        Enviar mensaje

      </button>

    </form>

  );

}

export default ContactForm;