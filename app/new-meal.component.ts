import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <div class="col s12 m3 l3">
      <div class="new-meal">
        <h4>New Meal</h4>
        <label>Enter Item Name</label>
        <input #newName>
        <label>Enter Total Calories</label>
        <input type="number" #newCalories>
        <label>Enter Details/Notes</label>
        <input #newDetails>
        <a class="btn blue waves-effect waves-green" (click)="submitForm(newName.value, newCalories.value, newDetails.value)">Save</a>
      </div>
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
