import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <ul id="meal-list">
      <select (change)="onChange($event.target.value)">
        <option value="allMeals">All Meals</option>
        <option value="over500Meals" selected="selected">Over 500 Calories</option>
        <option value="under500Meals">Under 500 Calories</option>
      </select>
      <li *ngFor="let currentMeal of childMealList | calories:filterByCalories" class="meal-item">
        <h2 [class]="caloriesColor(currentMeal)">{{currentMeal.name}}</h2>
        <h3>{{currentMeal.details}}</h3>
        <h4 [class]="caloriesColor(currentMeal)">Calories: {{currentMeal.calories}}</h4>
        <button (click)="editClicked(currentMeal)" class="btn btn-info">Edit</button>
      </li>
    </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() editSender = new EventEmitter();

  filterByCalories: string = "over500Meals";

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

  onChange(optionFromSelect) {
    this.filterByCalories = optionFromSelect;
  }
}
