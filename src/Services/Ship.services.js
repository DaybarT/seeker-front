const apiUrl = import.meta.env.VITE_API_URL;
export async function addShips(
  browserToken,
  shipName,
  shipTrack,
  slug,
  shipDestino,
  shipOrigen,
  shipCpostal,
  shipFenvio,
  url = apiUrl + "/ships/newTracking"
) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserToken}`,
    },
    body: JSON.stringify({
      shipName,
      shipTrack,
      slug,
      shipDestino,
      shipOrigen,
      shipCpostal,
      shipFenvio,
    }),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error añadiendo tu envio: ${response.statusText}`);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error general:", error);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}

export async function chargeShips(
  browserToken,
  url = apiUrl + "/ships/getTrackings"
) {
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
      throw new Error(`Error cargando tus envios: ${response.statusText}`);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error general:", error);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}
export async function deleteShips(
  browserToken,
  _id,
  url = apiUrl + "/ships/deleteTracking/"
) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserToken}`,
    },
  };

  try {
    const response = await fetch(url+_id, options);

    if (!response.ok) {
      throw new Error(`Error eliminando tu envio: ${response.statusText}`);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error general:", error);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}
export async function fetchId(
  browserToken,
  _id,
  url = apiUrl + "/ships/goTrack/"
) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserToken}`,
    },
  };

  try {
    const response = await fetch(url+_id, options);

    if (!response.ok) {
      throw new Error(`Error eliminando tu envio: ${response.statusText}`);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error general:", error);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}
export async function getData(
  browserToken,
  _id,
  url = apiUrl + "/ships/getTracking/"
) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${browserToken}`,
    },
  };

  try {
    const response = await fetch(url+_id, options);

    if (!response.ok) {
      throw new Error(`Error consultando tu envio: ${response.statusText}`);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error general:", error);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}