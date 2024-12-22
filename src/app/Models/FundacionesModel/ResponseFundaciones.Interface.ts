export interface IResponseVacunas {
    error: boolean;
    status: number; 
    message: string;
    data: {
        nombreFundacion: string;
        estado: boolean;
        Nit: string;
        Descripcion: string;
    }[];
}
