namespace Parcial {
  export class RenderTabla {
    private listaADesplegar: string[];

    constructor(lista: string[]) {
      this.listaADesplegar = lista;
    }

    //Pensar en como resolverlo dinamicco para aplicarle los filtros
    public cargarTabla() {
      //recibo la lista, logica y muestro las columnas segun la logca
      for (let item of this.listaADesplegar) {
      }
    }

    public cargarColumna(idElement: string, element: any): string {
      let columna = "<td id= " + idElement + ">" + element + "</td>";
      return columna;
    }
  }
}
