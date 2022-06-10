import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutComponent } from './about/about.component';
import { NoPageComponent } from './no-page/no-page.component';
import { SinglePersonComponent } from './single-person/single-person.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{
  path:"user",
  component:UserComponent
},
{
  path:"about",
  component:AboutComponent,
  children:[
    {path:"me",component:AboutMeComponent},
    {path:"company",component:AboutCompanyComponent}
  ]
},
{
  path:"about/:name",
  component:SinglePersonComponent
},
{
  path:"**",
  component:NoPageComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
