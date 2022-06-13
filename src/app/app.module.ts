import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckComponent } from './check/check.component';
import { StudentListComponent } from './student-list/student-list.component';
import {UserAuthModule} from "./user-auth/user-auth.module"
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms"
import { ChildComponent } from './child/child.component';
import { ReuseChildComponent } from './reuse-child/reuse-child.component';
import { ChildtoParentComponent } from './childto-parent/childto-parent.component';
import { InrtoUsdPipe } from './inrto-usd.pipe';
import { RedeleDirective } from './reddirect/redele.directive';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { SinglePersonComponent } from './single-person/single-person.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { HttpClientModule } from '@angular/common/http';
import { LazyCompoComponent } from './lazy-compo/lazy-compo.component';
import {PublicLibModule} from '@dhruvambaliya1112/counter';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component'
@NgModule({
  declarations: [
    AppComponent,
    CheckComponent,
    StudentListComponent,
    ChildComponent,
    ReuseChildComponent,
    ChildtoParentComponent,
    InrtoUsdPipe,
    RedeleDirective,
    UserComponent,
    AboutComponent,
    SinglePersonComponent,
    NoPageComponent,
    AboutMeComponent,
    AboutCompanyComponent,
    LazyCompoComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PublicLibModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
