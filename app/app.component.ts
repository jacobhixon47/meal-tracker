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
  masterMealList: Meal[] = [
    new Meal('Cheeseburger', 250, 'lettuce, tomato, cheese'),
    new Meal('Loaded Fries', 300, 'bacon bits, cheese, ranch'),
    new Meal('Smoothie', 40, 'strawberries and bananas'),
  ];

  selectedMeal: Meal = null;
}
