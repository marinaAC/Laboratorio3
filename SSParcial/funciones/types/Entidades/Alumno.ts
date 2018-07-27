namespace Parcial {
  export class Alumno {
    private nombre: string;
    private apellido: string;
    private nota: number;
    private materia: Materia;

    constructor(
      nombre: string,
      apellido: string,
      nota: number,
      materia: Materia
    ) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.nota = nota;
      this.materia = materia;
    }

    public getNombre(): string {
      return this.nombre;
    }

    public getAepllido(): string {
      return this.apellido;
    }

    public getNota(): number {
      return this.nota;
    }

    public getMateria(): Materia {
      return this.materia;
    }
  }
}
