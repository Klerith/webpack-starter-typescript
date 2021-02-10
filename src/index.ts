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
    
// ACTUALIZAR o MODIFICAR campos:
    // usuarios_ref.doc("ID del campo")
    //     .update({
    //         pares de atributos-valor a modificar
    //     })

// BORRAR campos:
    usuarios_ref.doc("85cse48pui3mSHbW9UMQ")
    .delete()