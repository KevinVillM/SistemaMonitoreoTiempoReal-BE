const myForm = document.getElementById('myForm');
const imput = document.getElementById('file-upload');
const bandera = document.getElementById('bandera');
const cargaIcon = document.getElementById('cargaIcon');

myForm.addEventListener('submit', async(e) => {
  e.preventDefault();


  bandera.innerHTML = "Subiendo archivo...";

  //Hacer visible el div cargaIcon
  cargaIcon.style.visibility = "visible";
  


  const formData = new FormData();
  formData.append('archivo', imput.files[0]);
  console.log(formData);


var requestOptions = {
  method: 'PUT',
  body: formData,
  redirect: 'follow'
};
// Agregar un una pleca que gire mientras se sube el archivo
await fetch("http://localhost:8082/api/uploadCaptura/6541ad3f5401197b927c4948", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  cargaIcon.style.visibility = "hidden";
  bandera.innerHTML = "Archivo subido con exito";
});



