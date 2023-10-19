export const API_URL = "http://localhost:3000";

/*____________________________ USERS___________________________________ */

export const createUser = async (data) => {
  const customer = {
    ...data,
    user: {
      email: data.email,
      password: data.password,
      role: "customer",
    },
  };
  delete customer.password;
  delete customer.email;

  try {
    const res = await fetch(`${API_URL}/api/v1/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const login = async (data) => {
  try {
    const res = await fetch(`${API_URL}/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};
export const removeToken = async (token) => {
  try {
    const res = await fetch(`${API_URL}/api/v1/auth/login`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const reqNewAccessToken = async (refreshToken) => {
  try {
    const res = await fetch(`${API_URL}/api/v1/auth/token`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    const json = await res.json();
    return json;
  } catch (err) {
    return { error: err };
  }
};

export const retrieveUserInfo = async (accessToken) => {
  try {
    /* const response = await fetch(`${API_URL}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      return json.body;
    } */
    console.log({ accessToken });
  } catch (err) {
    return { error: err };
  }
};
/*_____________________________CLIENTES___________________________________ */

export const getClients = async () => {
  try {
    const res = await fetch(`${API_URL}/api/v1/cliente`);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    const json = await res.json();
    return json;
  } catch (err) {
    return { error: err };
  }
};

export const getClientInfo = async (id) => {
  try {
    const res = await fetch(`${API_URL}/api/v1/cliente/${id}`);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    const json = await res.json();

    return json;
  } catch (err) {
    return { error: err };
  }
};

/*_____________________________TRANSPORTADORAS___________________________________ */

export const getTransportadoras = async () => {
  try {
    const res = await fetch(`${API_URL}/api/v1/transportadora`);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    const json = await res.json();

    return json;
  } catch (err) {
    return { error: err };
  }
};

/*_____________________________GUIAS___________________________________ */

export const crearGuia = async (data) => {
  try {
    const res = await fetch(`${API_URL}/api/v1/guia`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok)
      throw {
        status: res.status,
        statusText: res.statusText,
      };
    const json = await res.json();
    return json;
  } catch (err) {
    return { error: err };
  }
};
export const getGuias = async () => {
  try {
    const res = await fetch(`${API_URL}/api/v1/guia`);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    const json = await res.json();

    return json;
  } catch (err) {
    return { error: err };
  }
};

export const patchGuia = async (id, data) => {
  try {
    const res = await fetch(`${API_URL}/api/v1/guia/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok)
      throw {
        status: res.status,
        statusText: res.statusText,
      };
    const json = await res.json();
    return json;
  } catch (err) {
    return { error: err };
  }
};

/*_____________________________DOCUMENTOS___________________________________ */
export const getDocumentos = async () => {
  try {
    const res = await fetch(`${API_URL}/api/v1/documento`);
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    const json = await res.json();

    return json;
  } catch (err) {
    return { error: err };
  }
};
