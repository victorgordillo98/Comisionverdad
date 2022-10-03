function guardar() {
  db.collection("comentario")
    .add({
      mensaje: document.getElementById("mensaje").value,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      alert("Registro exitoso");
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      alert("Error en el registro");
    });
}
