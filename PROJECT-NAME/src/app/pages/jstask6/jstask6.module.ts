import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NzTableModule, NzSpinModule} from 'ng-zorro-antd';
import { Jstask6RoutingModule } from './jstask6-routing.module';
import { Jstask6Component } from './jstask6.component';
import { ArticleComponent } from './article/article.component';
import { Article2Component  } from './article2/article2.component';

import { PipesModule } from '../pipes/pipes.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  declarations: [Jstask6Component, ArticleComponent,Article2Component ],
  imports: [
    CommonModule,
    Jstask6RoutingModule,
    NgZorroAntdModule,
    NzTableModule,
    NzInputModule,
    PipesModule,
    NzSelectModule,
    FormsModule,
    NzUploadModule,
    NzDatePickerModule,
    NzPopconfirmModule,
    NzButtonModule,
    NzIconModule ,
    NzSpinModule ,
    NzFormModule,
    ReactiveFormsModule
  ]
})
export class Jstask6Module { }
