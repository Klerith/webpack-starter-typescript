import db from "./firebase/config";
import firebase from "firebase";

// CREAR tabla:
// Create table usuario { 
//     nombre: varchar ("Rusbert"),
//     activos: boolean (true),
//     nacimiento: int (0)
// }

    // const usuario = {
    //     nombre: "Rusbert",
    //     activos: true,
    //     nacimiento: 20
    // }

// Referencia a la tabla: 

    const usuarios_ref = db.collection("Usuarios");

//INSERTAR campo o registro:
// (Insert into usuarios)

    // usuarios_ref
    //     .add(usuario)
    
// ACTUALIZAR o MODIFICAR campos:
// (Update usuarios set activos = false where id = identificador)

    // usuarios_ref.doc("ID del campo a modificar")
    //     .update({
    //         pares de atributos-valor a modificar
    //         (activos = false)
    //     })

// BORRAR campos: 
// (Delete from usuarios where id = identificador)

    // usuarios_ref.doc("ID del campo a borrar")
    //      .delete();

// SELECCIONAR todos los registros de una tabla: 
// (SELECT * from "tabla")

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

    // usuarios_ref
    //         .where("nacimiento",">", 0)
    //         .where("nacimiento","<", 10)
    //     .onSnapshot(mostrar_registros);

// SELECCIONAR registros de una tabla por condiciones,
// haciendo referencia a varios campos:
// (SELECT * from usuarios WHERE activos == false AND nacimiento > 0)

    //    usuarios_ref
    //         .where("activos","==", false)
    //         .where("nacimiento",">", 0)
    //     .onSnapshot(mostrar_registros);

// Nota: primero hay que crear los índices.

// ORDENAR registros seleccionados:
// (SELECT * from usuarios ORDER BY nombre)

    usuarios_ref
        .orderBy("nombre")
        .orderBy("nacimiento", "desc")
        .onSnapshot(mostrar_registros);

// Nota: si un registro tiene vacío el campo como referente, este no se mostrará.
// Para ordenar de forma descendente colocamos "desc" al final del .orderBy().