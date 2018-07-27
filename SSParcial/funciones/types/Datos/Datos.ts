namespace Parcial {
  export class Datos {
    private objJson: ObjJson;

    constructor(obj: ObjJson) {
      this.objJson = obj;
    }

    public getObjJson(): ObjJson {
      return this.objJson;
    }

    public setObjJson(obj: ObjJson) {
      this.objJson = obj;
    }

    public encodeJsonAlumno(alumno: Alumno): ObjJson {
      let aux = {
        nombre: alumno.getNombre(),
        apellido: alumno.getAepllido(),
        nota: alumno.getNota().toString(),
        nombreProf: alumno.getMateria().getNombre(),
        apellidoProf: alumno.getMateria().getProfesor(),
        horarioMateria: alumno.getMateria().getHorario()
      };
      return aux;
    }

    public decodeJsonAlumno(json: ObjJson): Alumno {
      let aux = new Alumno(
        json.nombre,
        json.apellido,
        Number(json.nota),
        new Materia(json.nombreProf, json.apellidoProf, json.horarioMateria)
      );
      return aux;
    }

    public guardarLocalStorageOneElement(objJson: string, tipoDato: string) {
      let dataLocalStorage = this.getLocalStorage(tipoDato);
      let retorno = false;
      if (dataLocalStorage == null) {
        let listDato = [];
        listDato.push(objJson);
        localStorage.setItem(tipoDato, JSON.stringify(listDato));
        retorno = true;
      } else {
        dataLocalStorage.push(objJson);
        localStorage.setItem(tipoDato, JSON.stringify(dataLocalStorage));
        retorno = true;
      }
      return retorno;
    }

    public getLocalStorage(name: string): string {
      let itemsLocal = localStorage.getItem(name);
      if (itemsLocal != null) {
        this.objJson = JSON.parse(itemsLocal);
      }
      return this.objJson;
    }
  }
}
