import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor( private fb: FormBuilder) { }
  feedbackForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.email,Validators.required]],
    message: ['',Validators.required]
  });
  
  errorMsg = '';

  closeError(){
    this.errorMsg ='';
  }

  ngOnInit(): void {
  }

}
