import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/51982105663"
      target="_blank"
      rel="noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-50
      w-16
      h-16
      rounded-full
      bg-green-500
      hover:bg-green-600
      shadow-xl
      text-white
      flex
      items-center
      justify-center
      text-4xl
      hover:scale-110
      transition"
    >
      <FaWhatsapp />
    </a>
  );
}

export default FloatingWhatsapp;