import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule'},
    { path: 'careers', loadChildren: './careers/careers.module#CareersModule'},
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  ];
