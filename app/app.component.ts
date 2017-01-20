import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class='container'>
      <div class='row'>
        <edit-meal [childSelectedMeal]="selectedMeal" (doneEditingSender)="doneEditing()"></edit-meal>
        <meal-list [childMealList]="masterMealList" (editSender)="editMeal($event)"></meal-list>
        <new-meal (newMealSender)="addMeal($event)"></new-meal>
      </div>
    </div>
  `
})

export class AppComponent {
  masterMealList: Meal[] = [
    new Meal('Burger', 600, 'lettuce, tomato, cheese'),
    new Meal('Loaded Fries', 300, 'bacon bits, cheese, ranch'),
    new Meal('Smoothie', 40, 'strawberries and bananas'),
    new Meal('Donuts', 750, '4 donuts'),
  ];

  selectedMeal: Meal = null;

  editMeal(currentMeal) {
    this.selectedMeal = currentMeal;
  }

  doneEditing() {
    this.selectedMeal = null;
  }

  addMeal(newMeal: Meal) {
    this.masterMealList.push(newMeal);
  }
}
