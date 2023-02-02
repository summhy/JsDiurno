const tbody = document.querySelector("#tb-estudiantes");

curso.estudiantes.forEach(element => {
    
    const estudiante = new Estudiante(element.nombre, element.apellido);
    if(element.edad){ estudiante.setEdad(element.edad); }
    if(element.nacimiento){ estudiante.setNacimiento(element.nacimiento); }
    if(element.hobbies){ estudiante.setHobbies(element.hobbies); }
    tbody.innerHTML += `<tr>
                            <td>${estudiante.nombre}</td>
                            <td>${estudiante.apellido}</td>
                            <td>${estudiante.nombrar()}</td>
                            <td>${estudiante.edad}</td>
                            <td>${estudiante.nacimiento}</td>
                            <td>${estudiante.hobbies}</td>
                       </tr> `;
}); 