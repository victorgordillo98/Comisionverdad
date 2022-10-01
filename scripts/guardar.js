function guardar() {
  db.collection("comentario")
    .add({
      mensaje: document.getElementById("mensaje"),
    })
    .then((docRef) => {
      alert("Registro exitoso");
    })
    .catch((error) => {
      alert("Error en el registro");
    });
}
