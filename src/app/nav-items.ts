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
            {title: "Event Binding", component: ExampleComponent},
            {title: "Property Binding", component: ExampleComponent2},
            {title: "Component Metadata", component: ExampleComponent3}
        ]
	},
 	{
        name: "Modules",
        lectures: [
            {title: "NgModule"},
            {title: "Module Properties"},
            {title: "Module Examples"}
        ]
    },
    {
        name: "Directives"
    },
    {
        name: "Routes"
    },
    {
        name: "Pipes"
    },
    {
        name: "Http"
    },
    {
        name: "Animations"
    }
];