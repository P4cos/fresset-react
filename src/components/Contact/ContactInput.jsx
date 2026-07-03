function ContactInput({

  icon,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  textarea = false,

}) {

  return (

    <div className="relative">

      {!textarea && (

        <div className="absolute left-4 top-4 text-gray-400">

          {icon}

        </div>

      )}

      {textarea ? (

        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={5}
          className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none"
        />

      ) : (

        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full border rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-green-500 outline-none"
        />

      )}

    </div>

  );

}

export default ContactInput;

