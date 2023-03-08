import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NetlifyFormsService } from 'src/app/netlify-forms/netlify-forms.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private netlifyForms: NetlifyFormsService
 ) {}

    contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      message: ['', Validators.required],
    });

    errorMsg = '';

    closeError() {
      this.errorMsg = '';
    }

    onSubmit() {
      this.netlifyForms.submitFeedback(this.contactForm.value as Contact).subscribe(
         () => {
           this.contactForm.reset();
           this.router.navigateByUrl('/success');
         },
         err => {
           this.errorMsg = err;
         }
       );
      }





  ngOnInit(): void {
  }

}
