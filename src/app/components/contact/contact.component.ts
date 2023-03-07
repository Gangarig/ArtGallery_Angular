import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { NetlifyFormsService } from './netlify-forms.service';
import { contactFormData } from './contact-Form-data';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('formRef')
  form!: NgForm;
  beingSubmitted: boolean = false;
  isSuccess = false;
  isError = false;
  error?: string;

  model: contactFormData = { name: '', message: '', 'contact': 'message-form', email: '' };

  constructor(private netlifyForms: NetlifyFormsService) {
  }

  ngAfterViewInit() {
    this.form.ngSubmit
      .pipe(
        tap(() => this.beingSubmitted = true),
        switchMap(() => this.netlifyForms.submitFeedback(this.model as contactFormData)),
      )
      .subscribe({
        next: () => {
          this.beingSubmitted = false;
          this.isSuccess = true;
        },
        error: (err) => {
          this.isError = true;
          this.error = err;
        }
      });
  }
}
