/* import { HttpClient } from '@angular/common/http'; */
import { Injectable } from '@angular/core';

/*
  Generated class for the GroceriesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceriesServiceProvider {

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Eggs",
      quantity: 12
    },
    {
      name: "Banana",
      quantity: 3
    },
  ];
  constructor() {
    console.log('Hello GroceriesServiceProvider Provider');
  }

  getItems() {
    return this.items;
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  addItem(index) {
    this.items.push(index);
  }

  editItem(item, index) {
    this.items[index] = item;
  }

}
