import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-rezept',
  templateUrl: './rezept.component.html',
})
export class RezeptComponent implements OnInit {

selectedRecipe: Recipe | undefined ;
  ngOnInit() {
    
  }


}
