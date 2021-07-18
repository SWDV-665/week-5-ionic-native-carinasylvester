import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery List";

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
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  removeItem(item) {
    console.log("Removing Item")
    const toast = this.toastCtrl.create({
      message: "Removing Item - " + item.name + " ...",
      duration: 3000
    });
    toast.present();
  }

  addItem(){
    console.log("Adding Item");
  }
}
