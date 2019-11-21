import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article2Component } from './article2.component';
import { NzFormModule, NzInputModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [Article2Component],
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class Article2Module { }
