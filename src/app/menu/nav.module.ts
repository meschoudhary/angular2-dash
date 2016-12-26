import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent, ExampleComponent2, ExampleComponent3 } from './nav-items';

//todo create a private class that loads all components in a single array from nav-items.ts

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExampleComponent, ExampleComponent2, ExampleComponent3]
})
export class NavModule { }
