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
      const data = await response.json();
     
      throw new Error(data.error);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
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
      const data = await response.json();
      throw new Error(data.error);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
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
      const data = await response.json();
      throw new Error(data.error);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
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
      const data = await response.json();
      throw new Error(data.error);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
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
      const data = await response.json();
      throw new Error(data.error);
    }

    // Parsea la respuesta como JSON
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
    throw error; // Puedes manejar el error o relanzarlo según tus necesidades
  }
}