function Estudiante(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = "";
    this.hobbies = "";
    this.nacimiento = "";

    this.nombrar = () => { return `${this.apellido}, ${this.nombre}`; }

    this.setEdad = (edad) => { this.edad = edad; }

    this.setNacimiento = (nacimiento) => { this.nacimiento = nacimiento; }

    this.setHobbies = (hobbies) => { this.hobbies = hobbies; }

    this.getEdad = function () {
        const hoy = new Date();
        console.log(hoy.getFullYear());
        if (this.edad) {
            return this.edad
        }
        else {
            if (this.nacimiento) {
                return hoy.getFullYear() - this.nacimiento;
            } else {
                return 0
            }

        }


    }

}