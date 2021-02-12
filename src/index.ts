import db from "./firebase/config";
import firebase from "firebase";

// CREAR tabla:

    // const usuario = {
    //     nombre: "Rusbert",
    //     activos: true,
    //     nacimiento: 0
    // }

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

// BORRAR campos: (Delete )

    // usuarios_ref.doc("ID del campo a borrar")
    //      .delete();

// SELECCIONAR todos los registros de una tabla: (SELECT * from "tabla")

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
    // Llamada a la función: (Select * from "tabla")
    //     usuarios_ref
    //         .onSnapshot(mostrar_registros);

// SELECCIONAR registros de una tabla por condiciones,
// haciendo referencia a un solo campo:
// (SELECT * from usuarios WHERE nacimiento > 0 AND nacimiento < 10)

    usuarios_ref
            .where("nacimiento",">", 0)
            .where("nacimiento","<", 10)
        .onSnapshot(mostrar_registros);

// SELECCIONAR registros de una tabla por condiciones,
// haciendo referencia a varios campos:
// (SELECT * from usuarios WHERE activos == false AND nacimiento > 0)

       usuarios_ref
            .where("activos","==", false)
            .where("nacimiento",">", 0)
        .onSnapshot(mostrar_registros);

// Nota: primero hay que crear los índices.
