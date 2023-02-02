//console.log(curso);
curso.estudiantes.forEach(element => {
    //console.log(element);
    const estudiante = new Estudiante(element.nombre, element.apellido);

    console.log(estudiante.nombrar());

}); 