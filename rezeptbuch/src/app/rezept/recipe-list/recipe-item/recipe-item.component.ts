import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent implements OnInit{
//hier wird das Property Binding freigeschaltet indem ein @Input hinzugefügt wird. dies soll sicher stellen, dass die rezepte durch die komponente hinzugrfügt werden können und datein reingeschrieben werden können
  @Input() recipe: Recipe | undefined;
  ngOnInit(){
    
  }
  

}
