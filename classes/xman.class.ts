function importarConsola(constructorClase:Function){
    console.log (constructorClase);
}

@importarConsola
export class Xman{

  constructor ( 
     public alterego:string,
     public nombre:string
  ) 
  {

  } 
  
  imprimir () {
    console.log(`${this.alterego} - ${this.nombre}`) 
  }
}