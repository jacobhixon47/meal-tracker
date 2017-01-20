import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <ul id="meal-list">
      <select>
        <option value="allMeals">All Meals</option>
        <option value="over500Meals">Over 500 Calories</option>
        <option value="under500Meals" selected="selected">Under 500 Calories</option>
      </select>
      <li *ngFor="let currentMeal of childMealList | caloriesAmount" class="meal-item">
        <h2 [class]="caloriesColor(currentMeal)">{{currentMeal.name}}</h2>
        <h3>{{currentMeal.details}}</h3>
        <h4 [class]="caloriesColor(currentMeal)">Calories: {{currentMeal.calories}}</h4>
        <button (click)="editClicked(currentMeal)" class="btn">Edit</button>
      </li>
    </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() editSender = new EventEmitter();

  caloriesColor(currentMeal) {
    if (currentMeal.calories <= 500) {
      return 'under500 meal-name';
    } else if (currentMeal.calories >= 500) {
      return 'over500 meal-name';
    }
  }

  editClicked(meal: Meal) {
    this.editSender.emit(meal);
  }
}
