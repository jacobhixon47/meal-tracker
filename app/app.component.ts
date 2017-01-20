import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class='container'>
      <div class='row'>
        <meal-list></meal-list>
      </div>
    </div>
  `
})

export class AppComponent {

}
