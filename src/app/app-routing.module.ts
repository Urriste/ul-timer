import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  
  {
    path:"timer",
    component:MainComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"timer"
    
  },
  {
    path:"**",
    pathMatch:"full",
    component:ErrorComponent
    
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
