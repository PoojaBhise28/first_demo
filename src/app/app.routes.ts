import { Routes } from '@angular/router';
import { TaxComponent } from './tax/tax.component';
import { UserComponent } from './user/user.component';

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
,
    {
        path : 'user',
        component : UserComponent,
        title : "User Page"
    }
    ,
    {
        path : 'user/:id',
        component : UserComponent,
        title : "User Page"
    }
];
