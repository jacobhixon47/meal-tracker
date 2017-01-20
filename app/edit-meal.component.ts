import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div class="col s3">
      <div *ngIf="childSelectedMeal">
        <h4>Edit Meal</h4>
        <label>Enter Meal Title</label>
        <input [(ngModel)]="childSelectedMeal.name">
        <label>Enter Calories</label>
        <input [(ngModel)]="childSelectedMeal.calories" type="number">
        <label>Enter Details/Notes</label>
        <input [(ngModel)]="childSelectedMeal.details" type="number">
        <a (click)="doneEditingClicked()" class="btn green waves-effect waves-green">Done</a>
      </div>
    </div>
    `
})
