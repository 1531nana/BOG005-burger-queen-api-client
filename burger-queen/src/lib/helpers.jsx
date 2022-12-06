function filterAtributteList(filterKeys, listElements) {
  const newListElements = listElements.map((element) => {
    return Object.keys(element)
      .filter((key) => {
        if (filterKeys.some((keyFilter) => key.includes(keyFilter))) {
          return key;
        }
      })
      .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: element[key],
        });
      }, {});
  });
  return newListElements;
}

const onChangeImg = async (e, setFunction) => {
  const uploadedFile = await e.target.files[0]

  const reader = new FileReader();
  reader.readAsDataURL(uploadedFile);
  reader.onload =   () =>  setFunction(reader.result);

  return uploadedFile

}

async function uploadImgWeb (img) {

  const form = new FormData();
  form.append('image', img);
  console.log('img helpers ', typeof img);

  const apiKey = 'c04d608433763cbe2f5981c6f6bf2eb5'

  const url = `https://api.imgbb.com/1/upload?key=${apiKey}`

  const petition = {
      method: 'POST',
      body: form
  }

  const response = await fetch(url,petition) 
  console.log('response helpers ', response);
  const dataResponse = await response.json()

  console.log('URL IMAGEN >>>>', dataResponse.data.url )
  return dataResponse.data.url

}

const logOut = () => {
  localStorage.clear();
  window.location.pathname = '/'
}

export {
  filterAtributteList,
  uploadImgWeb, 
  onChangeImg,
  logOut
}