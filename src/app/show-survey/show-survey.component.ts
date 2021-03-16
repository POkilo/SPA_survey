import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Survey } from '../survey-interface.service';
import { Observable } from 'rxjs';
import { catchError, map, tap, finalize, retry } from 'rxjs/operators';
/*
This component aims to retrieve the data from the DB table and store the data in the 
data structure so it can be used in html file  
*/


@Component({
  selector: 'app-show-survey',
  templateUrl: './show-survey.component.html',
  styleUrls: ['./show-survey.component.css']
})
export class ShowSurveyComponent implements OnInit {
  //the url of api
  url: string = 'https://q30q7d3hbd.execute-api.us-east-1.amazonaws.com/api/survey'
  surveys: Survey[]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getSurvey()
    .subscribe(
      res=>{
        console.log(res);
        this.surveys = res['Items'];
      },
      error=>alert('not able to request the content')
      );
  }

  //the action to send http get request
  getSurvey():Observable<any>{
    return this.http.get(this.url);
  }

}