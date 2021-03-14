import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AngularFirstAppComponent} from './components/courses/components/angular-first-app/angular-first-app.component';
import {HomeComponent} from './components/home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'angular-pierwsza-aplikacja',
    component: AngularFirstAppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // useHash: true,
    // anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
