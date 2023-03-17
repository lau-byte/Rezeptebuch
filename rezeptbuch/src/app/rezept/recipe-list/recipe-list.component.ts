import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit{
  @Output() recipeSelected = new EventEmitter<Recipe>();

recipe= new Recipe('Dummy','Dummy', 'https://inst-1.cdn.shockers.de/hs_cdn/out/pictures/master/product/1/crashtest-dummy-maske-halloween-und-faschings-masken-crash-test-dummy-mask-52968.jpg' );
selectedRecipe: Recipe | undefined;

constructor() {}
  ngOnInit(){
    
  }

  onSelected(recipe:Recipe){

    this.recipeSelected.emit(recipe);

  }
}
