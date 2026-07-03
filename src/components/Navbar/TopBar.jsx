import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

function TopBar() {
  return (
    <div className="bg-orange-500 text-white text-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-2">

        <p>
          Bienvenido a <span className="font-semibold">Fresset</span>
        </p>

        <p className="hidden md:flex items-center gap-2">
          <FaMapMarkerAlt />
          Calle Las Palmeras 230, Los Olivos
        </p>

        <div className="flex items-center gap-3">
          <span>Síguenos</span>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >

            <FaFacebookF className="cursor-pointer hover:text-yellow-200 transition" /></a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >

            <FaInstagram className="cursor-pointer hover:text-yellow-200 transition" /></a>
        </div>

      </div>
    </div>
  );
}

export default TopBar;