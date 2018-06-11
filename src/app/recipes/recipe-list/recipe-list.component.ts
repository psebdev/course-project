import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test desc', 'http://jamjarwines.com/wp-content/uploads/2015/02/Recipe-text.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
