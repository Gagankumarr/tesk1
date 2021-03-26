import { Component, OnInit} from '@angular/core';
import{FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'feedbackForm';
  feedbackForm: FormGroup;

  ngOnInit(){
    this.feedbackForm =new FormGroup({
      
        'username': new FormControl(null,[Validators.required]),
        'hoursSpent': new FormControl(null,[Validators.required]),
        'ageGroup': new FormControl(null,[Validators.required]),
        'age': new FormControl(null,[Validators.required]),
        'movies':new FormControl(null,[Validators.required]),
     
    });
  }
  
  onSubmit(){
    console.log(this.feedbackForm)
    console.log(this.feedbackForm.value.movies.split(","))
  }

  checkHoursSpent(){
    const hoursSpent = this.feedbackForm.value.hoursSpent;
    if (hoursSpent>168){
      this.feedbackForm.patchValue({'hoursSpent':null})
    }
  }

  titledUserName(){
    const userName = this.feedbackForm.value.username
    const titleCase = userName.charAt(0).toUpperCase()+ userName.slice(1);
    this.feedbackForm.patchValue({'username': titleCase})
  }

  onAgeGroupSelect(){
    const ageGroup= this.feedbackForm.value.ageGroup;
    const age =this.feedbackForm.value.age;
    // console.log(ageGroup)
    if(Number(ageGroup)=== 0){
      if(0>age && age<13){
        this.feedbackForm.patchValue({'age':null})
      }
    }
    else if (Number(ageGroup)===1){
      if(age>19 && age<13){
        this.feedbackForm.patchValue({'age': null})
      }
    }
    else if(Number(ageGroup)===2){
      if(age<55){
        this.feedbackForm.patchValue({'age':null})
      }
    }
    else if(Number(ageGroup)===3){
      if (age>55){
        this.feedbackForm.patchValue({'age':null})
      }
    }
  }
}


