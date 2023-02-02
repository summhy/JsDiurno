function Estudiante(nombre, apellido){
    this.nombre =  nombre;
    this.apellido =  apellido;
    this.edad;
    this.hobbies;
    this.nacimiento;

    this.nombrar = ()=>{
        return `El nombre del estudiante es ${this.nombre} ${this.apellido}`;
       
    }


}