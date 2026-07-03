import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function ContactInfo() {

  return (

    <div className="bg-green-600 text-white rounded-3xl p-10 h-full">

      <h2 className="text-3xl font-bold mb-8">

        Información

      </h2>

      <div className="space-y-6">

        <div className="flex gap-4">

          <FaMapMarkerAlt className="text-2xl mt-1" />

          <div>

            <h4 className="font-bold">

              Dirección

            </h4>

            <p>

              Calle Las Palmeras 230,
              Los Olivos, Lima

            </p>

          </div>

        </div>

        <div className="flex gap-4">

          <FaPhoneAlt className="text-2xl mt-1" />

          <div>

            <h4 className="font-bold">

              Teléfono

            </h4>

            <p>982 105 663</p>

          </div>

        </div>

        <div className="flex gap-4">

          <FaEnvelope className="text-2xl mt-1" />

          <div>

            <h4 className="font-bold">

              Correo

            </h4>

            <p>contacto@fresset.com</p>

          </div>

        </div>

        <div className="flex gap-4">

          <FaClock className="text-2xl mt-1" />

          <div>

            <h4 className="font-bold">

              Horario

            </h4>

            <p>

              Lunes a Domingo

              <br />

              8:00 am - 10:00 pm

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ContactInfo;