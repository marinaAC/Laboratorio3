declare class Materia {
    private nombre;
    private profesor;
    private horario;
    constructor(nombre: string, profesor: string, horario: string);
    getNombre(): string;
    getProfesor(): string;
    getHorario(): string;
    setNombre(nombre: string): void;
}
