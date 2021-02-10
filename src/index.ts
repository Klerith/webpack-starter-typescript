import db from "./firebase/config";

// CREAR tabla:
    const usuario = {
        nombre: "Rusbert",
        activos: true,
        nacimiento: 0
    }

// Referencia a la tabla: 
    const usuarios_ref = db.collection("Usuarios");


//INSERTAR campo:
    //usuarios_ref
    //     .add(usuario)
    
    //     .then(docReft => {
    //             console.log(docReft.delete)
    //         })
    //         .catch(e => console.log("error", e))
    
// ACTUALIZAR campo:
    usuarios_ref.doc("Nmpj380gUTxjBSklLqlJ")
        .update({
            activos: true,
            nacimiento: 5
        })