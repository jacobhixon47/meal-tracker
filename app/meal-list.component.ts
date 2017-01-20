import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div class="col s12 m8 l6">
      <ul id="meal-list">
        <li *ngFor="let currentMeal of childMealList" class="meal-item">
          <h2 class="meal-name">{{currentMeal.name}}</h2>
          <h3>{{currentMeal.details}}</h3>
          <h4 [class]="caloriesColor(currentMeal)">Calories: {{currentMeal.calories}}</h4>
        </li>
      </ul>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];

  caloriesColor(currentMeal) {
    if (currentMeal.calories <= 500) {
      return 'teal accent-4 z-depth-2';
    } else if (currentMeal.calories >= 500) {
      return 'amber accent-4 z-depth-2';
    }
  }
}
