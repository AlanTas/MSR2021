import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
declarations: [],
imports: [ FormsModule,ReactiveFormsModule]});

export class AppModule { }

import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
.
.
.
public formName: FormGroup;
constructor(private formsModule: FormsModule) {
 this.formName =  this.formBuilder.group({
   firstName:  [null, Validators.required],
   lastName:  [null, Validators.required],
 })
} 

 onSubmit() {
   console.log(this.formName.value);
 }
