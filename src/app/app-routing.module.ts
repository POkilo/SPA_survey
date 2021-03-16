import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyFormComponent } from './survey-form/survey-form.component';
import { ShowSurveyComponent } from './show-survey/show-survey.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'survey-form',
    component: SurveyFormComponent
  } ,
  {
    path:'show-survey',
    component: ShowSurveyComponent
  } ,
  {
    path:'home',
    component: HomeComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
