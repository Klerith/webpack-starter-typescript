import db from "./firebase/config";
import firebase from "firebase"

// CREAR tabla:
    const usuario = {
        nombre: "Rusbert",
        activos: true,
        nacimiento: 0
    }

// Referencia a la tabla: 
    const usuarios_ref = db.collection("Usuarios");


//INSERTAR campo:
    // usuarios_ref
    //     .add(usuario)
    
// ACTUALIZAR o MODIFICAR campos:
    // usuarios_ref.doc("ID del campo a modificar")
    //     .update({
    //         pares de atributos-valor a modificar
    //     })

// BORRAR campos:
    // usuarios_ref.doc("ID del campo a borrar")
    //      .delete();

// SELECCIONAR todos los registros de una tabla:
    const mostrar_registros = (snap: firebase.firestore.QuerySnapshot) => {
            const documentos: any[] = [];
            
            snap.forEach(snap_hijo => {
                documentos.push({
                    id: snap_hijo.id,
                    ...snap_hijo.data()
                });
            });

            console.log(documentos)
            return documentos;
    }
    // Llamada a la función:
        usuarios_ref
            .onSnapshot(mostrar_registros);



