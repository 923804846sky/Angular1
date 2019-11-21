import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NzFormModule} from 'ng-zorro-antd';
import { Jstask5RoutingModule } from './jstask5-routing.module';
import { Jstask5Component } from './jstask5.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [Jstask5Component],
  imports: [
    CommonModule,
    Jstask5RoutingModule,
    NgZorroAntdModule,
    FormsModule,
    NzFormModule
  ]
})
export class Jstask5Module { }
