import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: `
      <p>Example Component</p>
  `
})
export class ExampleComponent{
  constructor() { }
}


@Component({
  selector: 'app-home',
  templateUrl: `
      <p>Example Component 2</p>
  `
})
export class ExampleComponent2{
  constructor() { }
}

@Component({
  selector: 'app-home',
  templateUrl: `
      <p>Example Component 3</p>
  `
})
export class ExampleComponent3{
  constructor() { }
}


export const NAV_ITEMS = [
    {
      	name: "Components",
        lectures: [
            {title: "NgModule", component: ExampleComponent},
            {title: "Creating a Component", component: ExampleComponent2},
            {title: "Templates and Styles", component: ExampleComponent3},
            {title: "View Encapsulation", component: ExampleComponent3},
            {title: "NgContent", component: ExampleComponent3},
            {title: "String Interpolation", component: ExampleComponent3},
            {title: "Property Binding", component: ExampleComponent3},
            {title: "Event Binding", component: ExampleComponent3},
            {title: "Two-way Binding", component: ExampleComponent3},
            {title: "Custom Events", component: ExampleComponent3},
            {title: "Template Access", component: ExampleComponent3},
            {title: "Component Lifecycle", component: ExampleComponent3}
        ]
    },
  	{
        name: "Directives",
        lectures: [
            {title: "Attribute Directives"},
            {title: "Structural Directives"},
            {title: "Element Interaction (HostListener & HostBinding)"},
            {title: "Directive Property Binding"}
        ]
    },
    {
        name: "Services",
        lectures: [
            {title: "Dependency Injection"},
            {title: "Single Instance vs Multiple Instances"},
            {title: "Service within a Service"},
            {title: "Cross-Component Services"}
        ]
    },
    {
        name: "Routing",
        lectures: [
            {title: "Route Configuration"},
            {title: "Child Routing"},
            {title: "Navigation With Links"},
            {title: "Imperative Routing"},
            {title: "Route Parameters"},
            {title: "Query Parameters"},
            {title: "Fragments"},
            {title: "Redirecting Request"},
            {title: "Route Guards (CanActivate & CanDeactivate)"}
        ]

    },
    {
        name: "Forms",
        children: [
          {
              name: "Template-Driven Approach",
              lectures: [
                  {title: "Form Properties"},
                  {title: "Input Validation"},
                  {title: "Submitting Forms"},
                  {title: "Setting a Default Value"},
                  {title: "Form Groups"},
                  {title: "Property Validation"},
                  {title: "Form Reset"}
              ]
          },
          {
              name: "Data-Driven Approach",
              lectures: [
                  {title: "Input Validation"},
                  {title: "Submitting Forms"},
                  {title: "Form Groups"},
                  {title: "Form Arrays"},
                  {title: "Custom Validators"},
                  {title: "Custom Async Validators"},
                  {title: "Form Reset"}
              ]
          }
        ]
    },
    {
        name: "Pipes"
    },
    {
        name: "Http"
    },
    {
        name: "Animation"
    }
];