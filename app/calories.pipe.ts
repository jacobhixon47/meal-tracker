import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'caloriesAmount',
  pure: false
})

export class CaloriesPipe implements PipeTransform {

  transform(input: Meal[]) {
    var over500: Meal[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].calories >= 500) {
        over500.push(input[i]);
      }
    }
    return over500;
  }
}
