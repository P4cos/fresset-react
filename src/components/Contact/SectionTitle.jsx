function SectionTitle({ title, subtitle }) {

  return (

    <div className="text-center mb-12">

      <h1 className="text-5xl font-bold text-green-700">

        {title}

      </h1>

      <p className="text-gray-500 mt-4 text-lg">

        {subtitle}

      </p>

    </div>

  );

}

export default SectionTitle;