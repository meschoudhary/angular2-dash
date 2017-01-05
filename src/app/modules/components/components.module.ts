import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { NgModuleComponent } from './ng-module/ng-module.component';
import { CreatingComponentComponent } from './creating-component/creating-component.component';
import { TemplatesStylesComponent } from './templates-styles/templates-styles.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { CustomEventsComponent } from './custom-events/custom-events.component';
import { TemplateAccessComponent } from './template-access/template-access.component';
import { ComponentLifecycleComponent } from './component-lifecycle/component-lifecycle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StringInterpolationComponent, NgModuleComponent, CreatingComponentComponent, TemplatesStylesComponent, ViewEncapsulationComponent, NgContentComponent, PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent, CustomEventsComponent, TemplateAccessComponent, ComponentLifecycleComponent]
})
export class ComponentsModule { }
