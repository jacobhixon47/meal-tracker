import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div class="col 4">
      <ul id="meal-list">
        <li *ngFor="let currentMeal of childMealList" class="meal-item">
          <h1>{{currentMeal.name}}</h1>
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
      return 'teal accent-4';
    } else if (currentMeal.calories >= 500) {
      return 'amber accent-4';
    }
  }
}
