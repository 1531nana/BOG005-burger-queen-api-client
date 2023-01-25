async function makeRequestPost(pathname, data, token = false) {

  token = localStorage.getItem("loginToken")

  try {
    const url = `http://localhost:8080/${pathname}`
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data),
    });
    if (res.status >= 400) {
      throw new Error('Validación incorrecta')
    }

    const response = await res.json();
    console.log("respuesta json ", response);

    return response;
  } catch (error) {
    console.error('catch request ', error);
    return null
  }
}

async function getProducts(pathname) {

  const token = localStorage.getItem("loginToken")
  const url = `http://localhost:8080/${pathname}`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  });

  const responseData = await response.json()

  return responseData
}

async function makeRequestGet(pathname) {

  const token = localStorage.getItem("loginToken")
  const url = `http://localhost:8080/${pathname}`
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  });

  console.log('response ',response);
  const responseData = await response.json()
  console.log('obtener órdenes ',responseData);
  return responseData
}

const makeRequestDelete = async (pathname, id,) => {
  
  const token = localStorage.getItem("loginToken")

  const url = `http://localhost:8080/${pathname}/${id}`
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      "content-type": "application/json",
      'authorization': `Bearer ${token}`
    },
  });

}

const makeRequestPatch = async (pathname, id, data) => {
  
  const token = localStorage.getItem("loginToken")

  const url = `http://localhost:8080/${pathname}/${id}`
  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      "content-type": "application/json",
      'authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data),
  });
  res.json().then(resul => console.log(resul))
  // console.log('editar función ',res.json());
}

const makeRequestDeleteOrder = async ( id) => {
  
  const token = localStorage.getItem("loginToken")

  const url = `http://localhost:8080/orders/${id}`
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      "content-type": 'application/json',
      'authorization': `Bearer ${token}`
    },
  });

  console.log('res>>>>', res);
  return res

}


export {
  makeRequestPost,
  makeRequestDeleteOrder,
  getProducts,
  makeRequestDelete,
  makeRequestPatch,
  makeRequestGet, 
}