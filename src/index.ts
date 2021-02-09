import db from "./firebase/config";

const usuario = {
    nombre: "Rusbert",
    activos: true,
    nacimiento: 0
}

db.collection("Usuarios")
    .add(usuario)
    .then(docReft=>{
        console.log(docReft.delete)
    })
    .catch(e=>console.log("error", e))