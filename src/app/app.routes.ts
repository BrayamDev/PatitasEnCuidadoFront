import { Routes } from '@angular/router';
import { VacunasComponent } from './Componentes/Vacunas/vacunas.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { FundacionesComponent } from './Componentes/Fundaciones/fundaciones.component';
import { AdoptantesComponent } from './Componentes/adoptantes/adoptantes.component';
import { TipoAnimalComponent } from './Componentes/tipo-animal/tipo-animal.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path:'vacunas',
        component: VacunasComponent
    },
    {
        path:'inicio',
        component: InicioComponent
    },
    {
        path:'fundaciones',
        component: FundacionesComponent
    },
    {
        path:'adoptantes',
        component: AdoptantesComponent
    },
    {
        path:'tipo_animal',
        component: TipoAnimalComponent
    },
];
