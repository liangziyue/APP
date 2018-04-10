import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-Ziya',
  templateUrl: 'Ziya.html'
})
export class ZiyaPage {
  icons="info";  
  items = [];
     doRefresh(refresher) {
     console.log('Begin async operation', refresher);
     setTimeout(() => {
        this.items = [];
        for (var i = 0; i < 30; i++) {
         this.items.push( this.items.length );
       }
       console.log('Async operation has ended');
       refresher.complete();
     }, 2000);
   }
   doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}