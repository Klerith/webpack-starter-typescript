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
    usuarios_ref
        .onSnapshot(snap => {
            const usuarios: any[] = [];
            
            snap.forEach(snap_hijo => {
                usuarios.push({
                    id: snap_hijo.id,
                    ...snap_hijo.data()
                });
            });

            console.log(usuarios)
        });


