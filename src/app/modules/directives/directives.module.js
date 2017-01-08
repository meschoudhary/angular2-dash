"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var attribute_directives_component_1 = require('./attribute-directives/attribute-directives.component');
var structural_directives_component_1 = require('./structural-directives/structural-directives.component');
var element_interaction_component_1 = require('./element-interaction/element-interaction.component');
var directive_property_binding_component_1 = require('./directive-property-binding/directive-property-binding.component');
var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    DirectivesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            declarations: [attribute_directives_component_1.AttributeDirectivesComponent, structural_directives_component_1.StructuralDirectivesComponent, element_interaction_component_1.ElementInteractionComponent, directive_property_binding_component_1.DirectivePropertyBindingComponent]
        })
    ], DirectivesModule);
    return DirectivesModule;
}());
exports.DirectivesModule = DirectivesModule;
