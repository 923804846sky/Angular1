import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { guandaoAPipe ,guandaoBPipe} from '../pipes/all.pipe'


@NgModule({
  declarations: [guandaoAPipe ,guandaoBPipe],
  imports: [
    CommonModule
  ],
  exports:[guandaoAPipe ,guandaoBPipe]
})
export class PipesModule { }
