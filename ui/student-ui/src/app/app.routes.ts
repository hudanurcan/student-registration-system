import { Routes } from '@angular/router';
import { ReadPageComponent } from './read-page/read-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { ListPageComponent } from './list-page/list-page.component';

export const routes: Routes = [

   // { path: '', component: HomepageComponent },
    { path: '', component: ListPageComponent },
   // { path: 'update-page', component: UpdatePageComponent },
    { path: 'add-page', component: AddPageComponent },
    { path: 'update-page', component: ReadPageComponent },
    { path: 'read-page', component: ListPageComponent},
];
