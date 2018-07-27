namespace Parcial {
  export class Materia {
    private nombre: string;
    private profesor: string;
    private horario: string;

    constructor(nombre: string, profesor: string, horario: string) {
      this.nombre = nombre;
      this.profesor = profesor;
      this.horario = horario;
    }

    public getNombre(): string {
      return this.nombre;
    }

    public getProfesor(): string {
      return this.profesor;
    }

    public getHorario(): string {
      return this.horario;
    }

    public setNombre(nombre: string): void {
      this.nombre = nombre;
    }
  }
}
