import { StringInterpolationComponent,
          NgModuleComponent,
          CreatingComponentComponent,
          TemplateAccessComponent,
          TemplatesStylesComponent,
          ViewEncapsulationComponent,
          NgContentComponent,
          PropertyBindingComponent,
          EventBindingComponent,
          TwoWayBindingComponent,
          CustomEventsComponent,
          ComponentLifecycleComponent} from '../modules';

export const NAV_ITEMS = [
    {
      	name: "Components",
        lectures: [
            {title: "NgModule", component: NgModuleComponent},
            {title: "Creating a Component", component: CreatingComponentComponent},
            {title: "Templates and Styles", component: TemplatesStylesComponent},
            {title: "View Encapsulation", component: ViewEncapsulationComponent},
            {title: "NgContent", component: NgContentComponent},
            {title: "String Interpolation", component: StringInterpolationComponent},
            {title: "Property Binding", component: PropertyBindingComponent},
            {title: "Event Binding", component: EventBindingComponent},
            {title: "Two-way Binding", component: TwoWayBindingComponent},
            {title: "Custom Events", component: CustomEventsComponent},
            {title: "Template Access", component: TemplateAccessComponent},
            {title: "Component Lifecycle", component: ComponentLifecycleComponent}
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
        name: "Pipes",
        lectures: [
            {title: "Basic (built-in) Pipes"},
            {title: "Pipe Arguments"},
            {title: "Chaining Pipes"},
            {title: "Custom Pipes"},
            {title: "Pure Pipes vs Impure Pipes"},
            {title: "Async Pipes"}
        ]
    },
    {
        name: "Http",
        children: [
          {
              name: "FireBase Setup",
              lectures: [
                  {title: "Document Structure"},
                  {title: "Minimum Setup"}
              ]
          },
          {
              name: "CRUD Examples",
              lectures: [
                  {title: "GET Request"},
                  {title: "POST Request"},
                  {title: "PATCH Request"},
                  {title: "DELETE Request"},
                  {title: "Error Handling"}
              ]
          }
        ]
    },
    {
        name: "Animation"
    }
];
