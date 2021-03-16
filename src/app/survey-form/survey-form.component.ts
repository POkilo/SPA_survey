import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Survey } from '../survey-interface.service';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { CheckboxRequiredValidator } from '@angular/forms';
/*
This component aims to handle the new survey submitted by user
*/


@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})

export class SurveyFormComponent implements OnInit {
  //restful api url
  url: string = 'https://q30q7d3hbd.execute-api.us-east-1.amazonaws.com/api/survey'
  message:Survey = new Survey()
  campus_value:string[] = ['students','location','campus','dorm rooms','atmosphere','sports'] 
  today: string = new Date().toDateString();
  
  constructor( private http:HttpClient, private router:Router) { }
  
  ngOnInit(): void {
  }

  //parse the check-box truth false array to corresponding selection in string
  campusParse (b:boolean[]):string{
    let temp=' ';
    b.forEach((value, index) => {
      value?(temp=temp+'  '+this.campus_value[index]):temp=temp;
    });
    return temp;
  }

  //check whether the user fillin all personal info text-box 
  checkInfo():boolean{
    return this.message.fName==''||this.message.lName==''||this.message.address==''||this.message.email==''||this.message.city==''||
    this.message.state==''||this.message.phone==''||this.message.date==''||this.message.zip=='';
  }

  //action taken after user click submit button
  onClickSubmit():void {  
    this.message.date = this.today;

    let jsonBody = { 
      fName:this.message.fName,
      lName:this.message.lName,
      address:this.message.address,
      city:this.message.city,
      state:this.message.state,
      zip:this.message.zip,
      phone:this.message.phone,
      email:this.message.email,
      date:this.message.date,
      campus:this.campusParse(this.message.campus_temp),
      reason:(this.message.reason)?this.message.reason:' ',
      likelihood:(this.message.likelihood)?this.message.likelihood:' '
    };

    if(this.checkInfo()){
      alert('please fill in all the field in the personal info section\n\n');
    }
    else{
      this.http.post(this.url,jsonBody).subscribe(
        res=>{
          alert('form submitted\n'  + jsonBody);      
          this.router.navigate(['/home']);
        },
        error=>{
          alert('failed to submit the form\n' + jsonBody);
        }
      );
      return;
    }  
      
  }
  cancel():void{
    alert("sure you want to cancel?")
    this.router.navigate(['/home'])
  }
  ////////////////////////////////////////////////////////
  // onClickSubmit():void {  
  //   this.message.date = this.today;
  //   let body ="fName="+this.message.fName+"&"
  //           +"lName="+this.message.lName+"&"
  //           +"address="+this.message.address +"&"
  //           +"city="+this.message.city+"&"
  //           +"state="+this.message.state+"&"
  //           +"zip="+this.message.zip+"&"
  //           +"phone="+this.message.phone+"&"
  //           +"email="+this.message.email+"&"
  //           +"date="+this.message.date+"&"
  //           +"campus="+this.campusParse(this.message.campus_temp)+"&"
  //           +"reason="+this.message.reason+"&"
  //           +"likelihood="+this.message.likelihood;
    
  //   if(this.checkInfo()){
  //     alert('please fill in all the field in the personal info section\n\n');
  //   }
  //   else{
  //     this.http.post(this.url,body).subscribe(
  //       succeed=>{
  //         alert('form submitted\n'  + body);      
  //         this.router.navigate(['/home']);
  //       },
  //       error=>{
  //         alert('failed to submit the form\n' + body);
  //       }
  //     );
  //     return;
  //   }  
  // }
}
