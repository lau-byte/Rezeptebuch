import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent implements OnInit{
//hier wird das Property Binding freigeschaltet indem ein @Input hinzugefügt wird. dies soll sicher stellen, dass die rezepte durch die komponente hinzugrfügt werden können und datein reingeschrieben werden können
  @Input() recipe: Recipe | undefined;
  //Wir müssen um ein eigenes Event zu erstellen einen Event Emitter hinzufügen
  //Daten von dem Typ Recipe werden an den Event Emitter übergeben
  @Output() recipeSelected= new EventEmitter<Recipe>();
  ngOnInit(){
    
  }
//Methode die den Klick der Button steuert, wenn 
// Wir wollen unser eigenes Event nach draußen senden
  onSelect(){

    this.recipeSelected.emit(this.recipe);

  }
  

}
