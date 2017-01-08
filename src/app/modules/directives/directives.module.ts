import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ElementInteractionComponent } from './element-interaction/element-interaction.component';
import { DirectivePropertyBindingComponent } from './directive-property-binding/directive-property-binding.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AttributeDirectivesComponent, StructuralDirectivesComponent, ElementInteractionComponent, DirectivePropertyBindingComponent]
})
export class DirectivesModule { }
