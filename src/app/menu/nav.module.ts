import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule, DirectivesModule, ServicesModule, PipesModule, HttpModule, FormsModule } from '../modules';

@NgModule({
  imports: [
    CommonModule, ComponentsModule, DirectivesModule, ServicesModule, PipesModule, HttpModule, FormsModule
  ],
  declarations: []
})
export class NavModule { }
