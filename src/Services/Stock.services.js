const apiUrl = import.meta.env.VITE_API_URL;

export async function chargeByUsername(
  browserToken,
  url = apiUrl + "/stock/GetStock"
) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserToken}`,
    },
  };
  //de momento sin parametro de usuario
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error cargando tu stock: ${response.statusText}`);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    // Puedes hacer algo con el token, por ejemplo, almacenarlo en el estado o en una cookie
    //console.log("Token recibido:", token);

    return data;
  } catch (error) {
    console.error("Error en la solicitud de cargar tu stock:", error.message);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}
export async function chargeAllProducts(
  browserToken,
  url = apiUrl + "/productTool/GetProducts"
) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserToken}`,
    },
  };
  //de momento sin parametro de usuario

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error cargando tu stock: ${response.statusText}`);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    // Puedes hacer algo con el token, por ejemplo, almacenarlo en el estado o en una cookie
    //console.log("Token recibido:", token);

    return data;
  } catch (error) {
    console.error("Error en la solicitud de cargar tu stock:", error.message);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}
export async function addStockService(
  SKU,
  talla,
  precio,
  browserToken,
  url = apiUrl + "/stock/AddStock"
) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserToken}`,
    },
    body: JSON.stringify({
      SKU,
      talla,
      precio,
    }),
  };
  //de momento sin parametro de usuario
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error cargando tu stock: ${response.statusText}`);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    // Puedes hacer algo con el token, por ejemplo, almacenarlo en el estado o en una cookie
    //console.log("Token recibido:", token);

    return data;
  } catch (error) {
    console.error("Error en la solicitud de cargar tu stock:", error.message);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}
export async function deleteStockService(
  browserToken,
  _id,
  url = apiUrl + "/stock/DeleteStock/"
) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserToken}`,
    },
  };
  try {
    const response = await fetch(url + _id, options);

    if (!response.ok) {
      throw new Error(`Error cargando tu stock: ${response.statusText}`);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    // Puedes hacer algo con el token, por ejemplo, almacenarlo en el estado o en una cookie
    //console.log("Token recibido:", token);

    return data;
  } catch (error) {
    console.error("Error al eliminar stock:", error.message);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}
export async function updateStockService(
  browserToken,
  SKU,
  url = apiUrl + "/hb/update/"
) {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserToken}`,
    },
  };
  try {
    const response = await fetch(url + SKU, options);

    if (!response.ok) {
      throw new Error(`Error cargando tu stock: ${response.statusText}`);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    // Puedes hacer algo con el token, por ejemplo, almacenarlo en el estado o en una cookie
    //console.log("Token recibido:", token);

    return data;
  } catch (error) {
    console.error("Error al eliminar stock:", error.message);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}
