import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'firstChild',
  },
  {
    path: 'firstChild',
    component: FirstChildComponent,
  },
  {
    path: 'secondChild',
    component: SecondChildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
