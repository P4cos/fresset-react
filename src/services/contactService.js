const URL = "https://my-json-server.typicode.com/P4cos/fresset-react/mensajes";


export const enviarMensaje = async (mensaje) => {

  const response = await fetch(URL, {

    method: "POST",

    headers: {

      "Content-Type": "application/json",

    },

    body: JSON.stringify({

      ...mensaje,

      fecha: new Date().toLocaleString(),

    }),

  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  return await response.json();

};