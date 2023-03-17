import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
})
export class RecipeDetailsComponent implements OnInit{
  //Auch hier
  @Input() selectedRecipe: Recipe | undefined;
  // Wichtg dass Rezept undefined ist damit ist zu keinen Fehlermeldungen kommt unsere App damit dynamisch bleibt
  ngOnInit() {
   
  }
constructor( ){}
}
