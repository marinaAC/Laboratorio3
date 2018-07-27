namespace Parcial {
  export class Filtrado {
    private listFilter: ObjJson[];
    private objView: any;
    private objHidden: any;

    constructor() {
      this.listFilter = [];
    }

    public filterElementJson(original: string[], key: string): string[] {
      let auxArray = original.filter(element => key);
      return auxArray;
    }
  }
}
