import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RezeptComponent } from './rezept/rezept.component';
import { EinkaufslisteComponent } from './einkaufsliste/einkaufsliste.component';
import { RecipeListComponent } from './rezept/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './rezept/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './rezept/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListAddComponent } from './einkaufsliste/shopping-list-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RezeptComponent,
    EinkaufslisteComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListAddComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
