function Estudiante(nombre, apellido){
    this.nombre =  nombre;
    this.apellido =  apellido;
    this.edad = "";
    this.hobbies = "";
    this.nacimiento = "";

    this.nombrar = ()=>{ return `${this.apellido}, ${this.nombre}`; }

    this.setEdad = (edad) =>{ this.edad =  edad; }
   
    this.setNacimiento = (nacimiento) =>{ this.nacimiento =  nacimiento; }

    this.setHobbies = (hobbies) =>{ this.hobbies =  hobbies; }

    this.getEdad = function (){
         /* si edad retorna edad, sino si nacimiento calcular edad, sino 0 */
    }

}