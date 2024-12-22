export interface IResponseVacunas {
    error: boolean;
    status: number; 
    message: string;
    data: {
        NombreVacuna: string;
        FechaCaducidad: Date;
    }[];
}
