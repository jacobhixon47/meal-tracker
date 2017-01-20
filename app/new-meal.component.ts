import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <div class="new-meal">
      <h4>New Meal</h4>
      <label>Enter Item Name</label><br>
      <input #newName><br>
      <label>Enter Total Calories</label><br>
      <input type="number" #newCalories><br>
      <label>Enter Details/Notes</label><br>
      <input #newDetails><br>
      <button class="btn" (click)="submitForm(newName.value, newCalories.value, newDetails.value)">Save</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, calories: number, details: string) {
    var newMeal: Meal = new Meal(name, calories, details);
    this.newMealSender.emit(newMeal);
  }
}
