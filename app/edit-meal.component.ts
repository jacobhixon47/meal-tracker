import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
      <div *ngIf="childSelectedMeal" class="edit-meal">
        <h4>Edit Meal</h4>
        <label>Enter Meal Title</label><br>
        <input [(ngModel)]="childSelectedMeal.name"><br>
        <label>Enter Calories</label><br>
        <input [(ngModel)]="childSelectedMeal.calories" type="number"><br>
        <label>Enter Details/Notes</label><br>
        <input [(ngModel)]="childSelectedMeal.details"><br>
        <button (click)="doneEditingClicked()" class="btn btn-success">Done</button>
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
