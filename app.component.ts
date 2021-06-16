import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form:NgForm;

  subVal="advanced";

  user={
    email:'',
    subs:'',
    pass:''
  }
  submitted=false;

  onSubmit(){
    this.submitted = true;
    this.user.email = this.form.value.email;
    this.user.subs = this.form.value.subs;
    this.user.pass = this.form.value.password;
  }
}

  

