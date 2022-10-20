function Alumno (dni, nombre, estudios, curso, año){
    this.dni = dni.toUpperCase()
    this.nombre = inicialMayuscula(nombre)
    this.estudios = estudios
    this.curso = curso
    this.año = año 
}