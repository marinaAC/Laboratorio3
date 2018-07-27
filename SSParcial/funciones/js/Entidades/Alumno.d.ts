declare class Alumno {
    private nombre;
    private apellido;
    private nota;
    private materia;
    constructor(nombre: string, apellido: string, nota: number, materia: Materia);
    getNombre(): string;
    getAepllido(): string;
    getNota(): number;
}
