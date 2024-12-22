export interface IResponseVacunas {
  error: boolean;
  status: number;
  message: string;
  data: {
    NombreTipoAnimal: string;
    Descripcion: string;
  }[];
}
