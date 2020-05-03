import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
