import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
      <div *ngIf="childSelectedMeal" class="edit-meal">
        <h4>Edit Meal</h4>
        <label>Enter Meal Title</label>
        <input [(ngModel)]="childSelectedMeal.name">
        <label>Enter Calories</label>
        <input [(ngModel)]="childSelectedMeal.calories" type="number">
        <label>Enter Details/Notes</label>
        <input [(ngModel)]="childSelectedMeal.details">
        <button (click)="doneEditingClicked()" class="btn">Done</button>
      </div>
    `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneEditingSender = new EventEmitter();

  doneEditingClicked() {
    this.doneEditingSender.emit();
  }
}
