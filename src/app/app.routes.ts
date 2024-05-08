import { Routes } from '@angular/router';
import { TaxComponent } from './tax/tax.component';

export const routes: Routes = [
    {
        path : 'tax/:id',
        component : TaxComponent,
        title : "Tax Page"
    },
    {
        path : 'tax',
        component : TaxComponent,
        title : "Tax Page"
    }
];
