import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { StepState } from '@covalent/core/steps';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-stock-market-news-form',
  templateUrl: './stock-market-news-form.component.html',
  styleUrls: ['./stock-market-news-form.component.scss'],
})
export class StockMarketNewsForm implements OnInit {
  constructor(private _router: Router, private _snackBarService: MatSnackBar) {}

  @ViewChild('form1')
  form1: NgForm;
  @ViewChild('form2')
  form2: NgForm;
  @ViewChild('form3')
  form3: NgForm;
  @ViewChild('step1')
  step1;
  @ViewChild('step2')
  step2;
  @ViewChild('step3')
  step3;
  @ViewChild('markdownEditor')
  markdownEditor;

  step1State: StepState = StepState.None;
  step2State: StepState = StepState.None;
  step3State: StepState = StepState.None;
  title: string = '';
  markdown: string = '';
  // TODO: Reference actual markdown from markdown editor
  sampleMarkdown = 'This **would** be a a preview of the markdown';
  file: File;

  get step1IsValid() {
    return this.form1.form.valid;
  }

  get step2IsValid() {
    return this.markdownEditor.value.trim() !== '';
  }

  get step1SubmitDisabled() {
    return !this.step1IsValid;
  }

  get step2SubmitDisabled() {
    return !this.step2IsValid;
  }

  get submitFormIsDisabled() {
    return !this.step1IsValid || !this.step2IsValid;
  }

  cancelStep(step) {
    switch (step) {
      case 1:
        this.step1.active = false;
        this.step1State = StepState.None;
        this.form1.reset();
        break;
      case 2:
        this.step2.active = false;
        this.step2State = StepState.None;
        this.form3.reset();
        break;
      case 3:
        this.step3.active = false;
        this.step3State = StepState.None;
        this.form3.reset();
    }
  }

  submitStep(step) {
    switch (step) {
      case 1:
        this.step2.active = true;
        break;
      case 2:
        this.step3.active = true;
        break;
      case 3:
        this.step3.active = false;
    }
  }

  validateStep(step): void {
    switch (step) {
      case 1:
        this.step1State = this.step1IsValid ? StepState.Complete : StepState.Required;
        break;
      case 2:
        this.step2State = this.step2IsValid ? StepState.Complete : StepState.Required;
        break;
      case 3:
        this.step3State = StepState.Complete;
    }
  }

  submitForm() {
    this._router.navigate(['/']);
    this._snackBarService.open('Story published', null, {
      duration: 3000,
    });
  }

  ngOnInit() {}
}
