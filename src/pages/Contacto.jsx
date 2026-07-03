import SectionTitle from "../components/Contact/SectionTitle";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";

function Contacto() {
  return (
     
    <section className="max-w-7xl mx-auto px-6 py-16">

      <SectionTitle

        title="Contáctanos"

        subtitle="Estamos listos para ayudarte. Escríbenos y responderemos lo antes posible."

      />

      <div className="grid lg:grid-cols-2 gap-10">

        <ContactForm />

        <ContactInfo />

      </div>

    </section>


  );
}

export default Contacto;
