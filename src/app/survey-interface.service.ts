import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

export class Survey{
  constructor(){}

  fName : string = '';
  lName : string = '';
  address : string = '';
  city : string = '';
  state : string = '';
  zip : string = '';
  phone : string = '';
  email : string = '';
  date : string = '';

  campus_temp : boolean[] = [false,false,false,false,false,false];
  campus : string = '';
  reason : string = ''; 
  likelihood : string = '';
}

export interface jsonSurvey{
  
  fName : string 
  lName : string 
  address : string 
  city : string 
  state : string 
  zip : string 
  phone : string 
  email : string 
  date : string 

  campus : string 
  reason : string  
  likelihood : string 
}