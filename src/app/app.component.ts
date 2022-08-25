import { Component } from '@angular/core';
import { Category } from './enums/category';
import { MenuItem } from './interfaces/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';
  items:MenuItem[] = [ {item:"Chicken Fingers", category: Category.dinner, price:11.99},
                        {item:"Pizza", category: Category.dinner, price:11.99},
                        {item:"Wings", category: Category.sides, price:8.99},
                        {item:"Breadsticks", category: Category.sides, price:4.99},
                        {item:"Ceasar Salad", category: Category.salads, price:5.99},
                        {item:"Cinnamon Roll", category: Category.dessert, price:8.99}]
}
