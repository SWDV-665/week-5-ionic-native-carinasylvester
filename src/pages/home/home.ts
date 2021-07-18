import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  removeItem(item) {
    console.log("Removing Item")
    const toast = this.toastCtrl.create({
      message: "Removing Item - " + item.name + " ...",
      duration: 3000
    });
    toast.present();
  }

  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
  }


  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
      title: "Login",
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: "title",
          placeholder: "Title",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Save clicked');
          }
        }
      ]
    });
    prompt.present();
  }
}