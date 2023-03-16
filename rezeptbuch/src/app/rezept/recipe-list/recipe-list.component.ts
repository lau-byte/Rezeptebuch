import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit{

recipe= new Recipe('Dummy','Dummy', 'https://inst-1.cdn.shockers.de/hs_cdn/out/pictures/master/product/1/crashtest-dummy-maske-halloween-und-faschings-masken-crash-test-dummy-mask-52968.jpg' );
constructor() {}
  ngOnInit(){
    
  }
}
