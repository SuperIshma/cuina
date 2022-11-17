export interface Receta {
    id: number;
    nombre: string;
    comensales: number;
    ingredientes: {
        ingredienteId: number;
        unidad: number;
        cantidad: number;
        opcional: boolean;
        sustitutos?: {
            ingredienteId: number;
        }[]
    }[]
}