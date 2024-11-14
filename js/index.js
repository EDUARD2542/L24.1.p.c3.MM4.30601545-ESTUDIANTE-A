/*ESTUDIANTE-A
Se tiene de varios estudiantes su nombre, semestre y nota. También se sabe que la nota
máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
Toda esta información de estudiantes se carga en un arreglo, y se necesita una función que
retorne los estudiantes de un semestre dado.
La estructura de un objeto estudiante es, p.ej.: {nombre: ‘Luis’, semestre: 5, nota: 14}
Función: estudiantesSemestre.
Parámetros: estudiantes (array de objetos estudiante), semestre (un número).
Retorno: array de objetos estudiante que pertenecen al semestre indicado.*/


const estudSemestre = (estudiantes, semestre) => {
    let estudSemestre = [];
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].semestre == semestre) {
            estudSemestre.push(estudiantes[i])
        }
    }
    return estudSemestre
}

const estudiantes = [
    { nombre: 'Luis', semestre: 5, nota: 14 },
    { nombre: 'Ana', semestre: 6, nota: 16 },
    { nombre: 'Sofia', semestre: 7, nota: 18 },
    { nombre: 'Jorge', semestre: 5, nota: 12 },
    { nombre: 'Marta', semestre: 6, nota: 15 },
    { nombre: 'Andrea', semestre: 7, nota: 19 },

  ];
  
  let salida = document.getElementById('salida')

  salida.innerHTML = "LOS ESTUDIANNTES DEL SEMESTRE 5: " + JSON.stringify(estudSemestre(estudiantes, 5));