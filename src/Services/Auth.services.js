const apiUrl = import.meta.env.VITE_API_URL;

export async function login(
  email,
  password,
  remember,
  url = apiUrl + "/auth/login"
) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      remember: remember,
    }),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error login: ${response.statusText}`);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    // Aquí manejas el token
    const token = data.token;

    // Puedes hacer algo con el token, por ejemplo, almacenarlo en el estado o en una cookie
    //console.log("Token recibido:", token);

    return token;
  } catch (error) {
    console.error("Error en la solicitud de inicio de sesión:", error.message);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}

export async function logout(browserToken, url = apiUrl + "/auth/disconnect") {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserToken}`,
    },
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error logout: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en la función verify:", error);
    throw error; // Puedes optar por volver a lanzar el error si es necesario
  }

  return response.json("OK");
} //funcion para el logout

export async function verify(browserToken, url = apiUrl + "/auth/verify") {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserToken}`,
    },
  };
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error al registrar: ${response.statusText}`);
    }

    //console.log(response)
    const data = await response.json();
    return data;
  } catch (error) {
    // Manejar el error de manera adecuada (puedes imprimirlo en la consola o realizar alguna otra acción)
    console.error("Error en la función verify:", error);
    throw error; // Puedes optar por volver a lanzar el error si es necesario
  }
}
export async function register(
  email,
  password,
  fullname,
  username,
  url = apiUrl + "/auth/register"
) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      fullName: fullname,
      username: username,
    }),
  };
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error al registrar: ${response.statusText}`);
    }

    //console.log(response)
    const data = await response.json();
    return data;
  } catch (error) {
    // Manejar el error de manera adecuada (puedes imprimirlo en la consola o realizar alguna otra acción)
    console.error("Error al registrar:", error);
    throw error; // Puedes optar por volver a lanzar el error si es necesario
  }
}

export async function update(
  email = null,
  password = null,
  fullname = null,
  browserToken,
  url = apiUrl + "/auth/update"
) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserToken}`,
    },
    body: JSON.stringify({
      email: email,
      password: password,
      fullName: fullname,
    }),
  };
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`Error al registrar: ${response.statusText}`);
    }

    //console.log(response)
    const data = await response.json();
   
    return data;
  } catch (error) {
    // Manejar el error de manera adecuada (puedes imprimirlo en la consola o realizar alguna otra acción)
    console.error("Error al registrar:", error);
    throw error; // Puedes optar por volver a lanzar el error si es necesario
  }
}

export async function forgotpassword(
  email,
  url = apiUrl + "/auth/ForgotPassword"
) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`No se encontró: ${response.statusText}`);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    if (data) {
      return true;
    }

    // Puedes hacer algo con el token, por ejemplo, almacenarlo en el estado o en una cookie
    //console.log("Token recibido:", token);
  } catch (error) {
    console.error("Error en la solicitud de inicio de sesión:", error.message);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}
export async function updatepassword(
  email,
  password,
  url = apiUrl + "/auth/UpdatePass"
) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error cambiando la contraseña: ${response.statusText}`);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    if (data) {
      return true;
    }

    // Puedes hacer algo con el token, por ejemplo, almacenarlo en el estado o en una cookie
    //console.log("Token recibido:", token);
  } catch (error) {
    console.error("Error en la solicitud de inicio de sesión:", error.message);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}
