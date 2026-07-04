const URL = "https://my-json-server.typicode.com/P4cos/fresset-react/usuarios";


export const getUsers = async () => {
  const response = await fetch(URL);
  return await response.json();
};


export const loginUser = async (email, password) => {

  const response = await fetch(URL);

  const usuarios = await response.json();

  const usuario = usuarios.find(
    (u) =>
      u.email.trim().toLowerCase() === email.trim().toLowerCase() &&
      u.password === password
  );

  return usuario || null;

};



export const emailExists = async (email) => {
  const response = await fetch(URL);

  const usuarios = await response.json();

  return usuarios.some(
    (u) =>
      u.email.trim().toLowerCase() ===
      email.trim().toLowerCase()
  );
};


export const registerUser = async (usuario) => {

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });

  return await response.json();

};



export const updateUser = async (id, datos) => {

  const response = await fetch(`${URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  });

  return await response.json();

};