declare namespace Parcial {
    class RenderTabla {
        private listaADesplegar;
        constructor(lista: string[]);
        cargarTabla(): void;
        cargarColumna(idElement: string, element: any): string;
    }
}
